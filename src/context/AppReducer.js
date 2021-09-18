import { parseDocs } from "../util/links";

export const actionTypes = {
    LOADING: 'LOADING',
    SET_LINKS: 'SET_LINKS',
    ADD_LINK: 'ADD_LINK',
    REMOVE_LINK: 'REMOVE_LINK',
    REQUEST_SEARCH: 'REQUEST_SEARCH',
    REQUEST_NEXT_PAGE: 'REQUEST_NEXT_PAGE',
}

export const initialState = {
    nextItem: {},
    startAfter: {},
    search: '',
    loading: false,
    ended: false,
    links: [],
};

const AppReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.SET_LINKS:
            const [newItems, nextItem] = parseDocs(action.payload);
            const links = state.startAfter.exists
                ? [...state.links, ...newItems]
                : newItems;
            return {
                ...state,
                loading: false,
                links,
                nextItem,
                ended: !nextItem,
            };

        case actionTypes.REQUEST_NEXT_PAGE:
            return {
                ...state,
                startAfter: state.nextItem || {},
            };

        case actionTypes.REQUEST_SEARCH:
            return {
                ...initialState,
                search: action.payload,
            };

        default:
            return state;
    }
};

export default AppReducer;
