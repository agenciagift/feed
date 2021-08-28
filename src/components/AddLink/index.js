import React, { useEffect, useState } from 'react';
import { projectFirestore, timestamp } from '../../firebase/config';
import useAuth from '../../hooks/useAuth';
import useScrape from '../../hooks/useScrape';
import { BaseButton, BaseInput, BaseTextArea } from '../form';
import { BasePreviewImage, HorizontalLayout, VerticalLayout } from '../layout';

function AddLink() {
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
        setImage(scrape.data.image || '');
    }, [scrape.data]);

    useEffect(() => {
        if (scrape.error) {
            fail('Ocorreu um erro ao pesquisar. Verifique se o link está correto e tente novamente', 10000);
        }
    }, [scrape.error]);

    const createNewPost = () => {
        const createdAt = timestamp();
        const author = user.uid;
        return { url, title, description, image, author, createdAt };
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
            setError('Ocorreu um erro inesperado :( Desculpe.');
        }
    };

    if (!user) {
        return null;
    }

    const PublishForm = () => (
        <HorizontalLayout>
            {image && <BasePreviewImage src={image} alt="Imagem encontrada." />}

            <VerticalLayout expand>
                <BaseInput
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <BaseTextArea
                    expand
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <BaseButton>Publicar</BaseButton>
            </VerticalLayout>
        </HorizontalLayout>
    );

    return (
        <form onSubmit={addLink}>
            <h4>Compartilhar link</h4>

            <VerticalLayout>
                <BaseInput placeholder="https://" value={url} onChange={(e) => {
                    setUrl(e.target.value);
                    setError('');
                }} />

                {scrape.isUrlValid && !scrape.loading && !error && <PublishForm />}
                {error && <p style={{ color: 'red' }}>{`${error}`}</p>}
            </VerticalLayout>
        </form>
    );
}

export default AddLink;
