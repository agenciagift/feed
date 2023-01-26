import { useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../firebase/config";
import { doc, getDoc, setDoc } from 'firebase/firestore'

const urlRegex = /^(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]+\.[a-z]{2,}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/;

const SCRAPING_API_URL = 'https://gift-scraper.herokuapp.com/scrape/?format=json';

const fetchScraping = async (uri) => {
    const json = await fetch(`${SCRAPING_API_URL}&url=${uri}`)
        .then(resp => resp.ok && resp.json());
    return json || {};
};

const SCRAPE_CACHE = new Map();

const useScrape = (uri) => {
    const [state, setState] = useState({ loading: false });
    const [isUrlValid, setIsUrlValid] = useState(true);

    useEffect(() => {
        const isUrlValid = !!uri.match(urlRegex);
        setIsUrlValid(isUrlValid);

        const cache = SCRAPE_CACHE.get(uri);
        if (cache) {
            setState({ ...state, ...cache });
            return;
        }

        if (!isUrlValid || SCRAPE_CACHE.has(uri)) {
            return;
        }

        SCRAPE_CACHE.set(uri, null);

        const docRef = doc(projectFirestore, 'scrape', encodeURIComponent(uri));

        const tryFetchScraping = async () => {
            try {
                const fetchedAt = timestamp();
                const scrapeResponse = await fetchScraping(uri);
                await setDoc(docRef, scrapeResponse);
                SCRAPE_CACHE.set(uri, scrapeResponse);
                setState({ ...scrapeResponse, fetchedAt, loading: false });
            } catch (error) {
                SCRAPE_CACHE.set(uri, { error });
                setState({ data: null, error, loading: false });
            }
        };

        setState({ data: null, error: null, loading: true });

        getDoc(docRef)
            .then(resp => {
                const payload = resp.data();
                if (!payload) {
                    tryFetchScraping();
                    return;
                }
                SCRAPE_CACHE.set(uri, payload);
                setState({ ...payload, loading: false });
            })
            .catch(error => {
                setState({ data: null, error, loading: false });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uri]);

    const { data, error, loading } = state;
    return { isUrlValid, data, error, loading };
};

export default useScrape;
