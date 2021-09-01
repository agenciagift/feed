import { useEffect, useReducer } from 'react';
import { createLinksRef } from '../util/links';
import linksReducer, { linksInitialState } from '../util/linksReducer';

const useLinks = (search) => {
    const [
        { docs, loading, startAfter, searchTerm, ended },
        dispatch,
    ] = useReducer(linksReducer, linksInitialState);

    const next = () => dispatch({ type: 'next' });

    useEffect(() => {
        dispatch({ type: 'search', payload: search });
    }, [search]);

    useEffect(() => {
        dispatch({ type: 'startLoading' });
        createLinksRef(startAfter, searchTerm).get().then(snap => {
            dispatch({ type: 'setDocs', payload: snap });
        });
    }, [startAfter, searchTerm]);

    return { docs, loading, next, ended };
}

export default useLinks;
