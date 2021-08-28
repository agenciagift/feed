import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const urlRegex = /^(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/;

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
        const match = !!uri.match(urlRegex);
        setIsUrlValid(match);

        if (!match || state.loading) {
            setState({ ...state, data: null, error: null });
            return;
        }

        const cache = SCRAPE_CACHE.get(uri);
        if (cache) {
            setState({ ...state, ...cache });
            return;
        }

        const doc = projectFirestore.collection('scrape').doc(encodeURIComponent(uri));

        const tryFetchScraping = async () => {
            try {
                const scrapeResponse = await fetchScraping(uri);
                await doc.set(scrapeResponse);
                SCRAPE_CACHE.set(uri, scrapeResponse);
                setState({ ...scrapeResponse, loading: false });
            } catch (error) {
                SCRAPE_CACHE.set(uri, { error });
                setState({ data: null, error, loading: false });
            }
        };

        setState({ data: null, error: null, loading: true });

        doc.get()
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

    return { isUrlValid, ...state };
};

export default useScrape;
