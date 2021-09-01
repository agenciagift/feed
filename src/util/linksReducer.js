import { parseDocs } from "./links";

export const linksInitialState = {
    nextItem: {},
    startAfter: {},
    searchTerm: '',
    loading: false,
    ended: false,
    docs: [],
};

const linksReducer = (state, action) => {
    switch (action.type) {
        case 'startLoading':
            return {
                ...state,
                loading: true,
            };
        case 'setDocs':
            const [newDocs, nextItem] = parseDocs(action.payload);
            const docs = state.startAfter.exists
                ? [...state.docs, ...newDocs]
                : newDocs;
            return {
                ...state,
                loading: false,
                docs,
                nextItem,
                ended: !nextItem,
            };
        case 'next':
            return {
                ...state,
                startAfter: state.nextItem || {},
            };
        case 'search':
            return {
                ...linksInitialState,
                searchTerm: action.payload,
            }
        default:
            return state;
    }
};

export default linksReducer;
