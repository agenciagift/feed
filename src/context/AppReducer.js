import { parseDocs } from "../util/links";

export const actionTypes = {
    LOADING: 'LOADING',
    SET_LINKS: 'SET_LINKS',
    ADD_LINK: 'ADD_LINK',
    REMOVE_LINK: 'REMOVE_LINK',
    ADD_LIKE: 'ADD_LIKE',
    REMOVE_LIKE: 'REMOVE_LIKE',
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

const incrementLikes = (link) => ({ ...link, likes: (link.likes || 0) + 1 });

const decrementLikes = (link) => {
    const likes = link.likes || 0;
    return likes > 0
        ? { ...link, likes: likes - 1 }
        : link;
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

        case actionTypes.ADD_LINK:
            return {
                ...state,
                links: [
                    action.payload,
                    ...state.links,
                ],
            };

        case actionTypes.REMOVE_LINK:
            return {
                ...state,
                links: state.links.filter(({ id }) => action.payload !== id),
            };

        case actionTypes.ADD_LIKE:
            return {
                ...state,
                links: state.links.map((link) => (
                    action.payload !== link.id
                        ? link
                        : incrementLikes(link)
                )),
            };

        case actionTypes.REMOVE_LIKE:
            return {
                ...state,
                links: state.links.map((link) => (
                    action.payload !== link.id
                        ? link
                        : decrementLikes(link)
                )),
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
