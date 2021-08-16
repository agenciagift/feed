import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../../app/slices/search';
import { BaseButton, BaseInput } from '../form';

export default function Search() {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(set({ term }));
    };

    return (
        <form onSubmit={submitForm}>
            <BaseInput type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            <BaseButton>Pesquisar</BaseButton>
        </form>
    )
}
