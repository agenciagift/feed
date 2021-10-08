import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { timestamp } from "../../firebase/config";
import { tokenize } from "../../firebase/links";
import useAuth from "../../hooks/useAuth";
import useScrape from "../../hooks/useScrape";

const useAddLinkState = () => {
    const { add } = useContext(GlobalContext);
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
            await add(createNewPost());
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
            setUrl: (newUrl) => {
                setError('');
                setUrl(newUrl);
                // avoiding previous data remain in the fields
                setTitle(newUrl ? title : '');
                setDescription(newUrl ? description : '');
                setImage(newUrl ? image : '');
            },
        },
    }
};

export default useAddLinkState;
