import React, { useState } from 'react';
import { projectFirestore, timestamp } from '../../firebase/config';
import { BaseButton, BaseInput, BaseTextArea } from '../form';
import { HorizontalLayout, VerticalLayout } from '../layout';

function AddLink() {
    const [error, setError] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    
    const fail = (message) => {
        setError(message);
        setTimeout(setError, 3000);
    };

    const createNewPost = () => {
        const createdAt = timestamp();
        return { url, description, createdAt };
    };

    const addLink = async (e) => {
        e.preventDefault();

        if (!url) {
            fail('Informe o link para compartilhar.');
            return;
        }

        await projectFirestore.collection('links').add(createNewPost());
        setUrl('');
        setDescription('');
    };

    return (
        <form onSubmit={addLink}>
            <HorizontalLayout>
                <p>Compartilhar link</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </HorizontalLayout>

            <VerticalLayout>
                <BaseInput placeholder="https://" value={url} onChange={(e) => setUrl(e.target.value)} />
                <BaseTextArea placeholder="Description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                <p>{`{ url: "${url}", description: "${description}" }`}</p>
                <BaseButton>Publicar</BaseButton>
            </VerticalLayout>
        </form>
    )
}

export default AddLink
