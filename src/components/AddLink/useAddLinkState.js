import { useEffect, useState } from "react";
import { projectFirestore, timestamp } from "../../firebase/config";
import useAuth from "../../hooks/useAuth";
import useScrape from "../../hooks/useScrape";
import { tokenize } from "../../util/links";

const useAddLinkState = () => {
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const resetState = () => {
        setError('');
        setUrl('');
        setTitle('');
        setDescription('');
        setImage('');
    };

    const { user } = useAuth();
    const scrape = useScrape(url);

    const fail = (message, delay = 5000) => {
        setError(message);
        setTimeout(() => setError(''), delay);
    };

    useEffect(() => {
        if (!scrape.data) {
            setImage('');
            return;
        }
        setTitle(scrape.data.title || '');
        setDescription(scrape.data.description || '');
        setImage(scrape.data.images[0] || '');
    }, [scrape.data]);

    useEffect(() => {
        if (scrape.error) {
            fail('Ocorreu um erro ao pesquisar. Verifique se o link está correto e tente novamente', 10000);
        }
    }, [scrape.error]);

    const createNewPost = () => {
        const { uid, displayName, photoURL } = user;
        return {
            url,
            title,
            description,
            image,
            author: { uid, displayName, photoURL },
            createdAt: timestamp(),
            keywords: tokenize(`${title} ${description}`),
        };
    };

    const addLink = async (e) => {
        e.preventDefault();
        setError('');

        if (!url) {
            fail('Informe o link para compartilhar.');
            return;
        }

        try {
            await projectFirestore.collection('links').add(createNewPost());
            resetState();
        } catch (err) {
            setError(err);
        }
    };

    return {
        state: {
            error,
            url,
            title,
            description,
            image,
            loading: scrape.loading,
            showPublishForm: scrape.isUrlValid && !scrape.loading,
        },
        actions: {
            setTitle,
            setDescription,
            addLink,
            setUrl: (url) => {
                setUrl(url);
                setError('');
            },
        },
    }
};

export default useAddLinkState;
