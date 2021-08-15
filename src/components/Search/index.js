import React, { useState } from 'react'
import { addLink } from '../../firebase/useLinks';
import { BaseButton, BaseInput } from '../form';

export default function Search() {
    const [text, setText] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        addLink({
            url: text,
        }).then(() => {
            setText('');
        });
    };

    return (
        <form onSubmit={submitForm}>
            <BaseInput type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <BaseButton>Pesquisar</BaseButton>
        </form>
    )
}
