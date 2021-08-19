import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../../app/slices/search';
import searchIcon from './loupe.png';
import { SearchButton, SearchButtonImg, SearchForm, SearchInput } from './styled';

export default function Search() {
    const [term, setTerm] = useState('');
    const [focus, setFocus] = useState(false);
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(set({ term }));
    };

    return (
        <SearchForm onSubmit={submitForm} focus={focus}>
            <SearchInput
                type="text"
                placeholder="Clique para pesquisar"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)} />
            {focus && <SearchButton>
                <SearchButtonImg
                    src={searchIcon}
                    alt="Pesquisar" />
            </SearchButton>}
        </SearchForm>
    )
}
