import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { SearchButton, SearchButtonImg, SearchForm, SearchInput } from './styled';

export default function Search() {
    const [text, setText] = useState('');
    const [focus, setFocus] = useState(false);
    const { requestSearch } = useContext(GlobalContext);

    const submitForm = (e) => {
        e.preventDefault();
        requestSearch(text);
    };

    return (
        <SearchForm onSubmit={submitForm} focus={focus}>
            <SearchInput
                type="text"
                placeholder={focus ? '' : 'Clique para pesquisar'}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)} />
            {focus && <SearchButton>
                <SearchButtonImg />
            </SearchButton>}
        </SearchForm>
    )
}
