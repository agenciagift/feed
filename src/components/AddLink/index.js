import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../../firebase/config';
import useAuth from '../../hooks/useAuth';
import { BaseButton, BaseInput, BaseTextArea } from '../form';
import { VerticalLayout } from '../layout';

function AddLink() {
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const { user } = useAuth();

    const fail = (message) => {
        setError(message);
        setTimeout(setError, 3000);
    };

    const createNewPost = () => {
        const createdAt = timestamp();
        const author = user.uid;
        return { url, description, author, createdAt };
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
            setUrl('');
            setDescription('');
        } catch (err) {
            setError('Ocorreu um erro inesperado :( Desculpe.');
        }
    };

    if (!user) {
        return null;
    }

    return (
        <form onSubmit={addLink}>
            <h4>Compartilhar link</h4>

            <VerticalLayout>
                <BaseInput placeholder="https://" value={url} onChange={(e) => setUrl(e.target.value)} />
                <BaseTextArea placeholder="Description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                <BaseButton>Publicar</BaseButton>
                {error && <p style={{ color: 'red' }}>{`${error}`}</p>}
            </VerticalLayout>
        </form>
    );
}

export default AddLink;
