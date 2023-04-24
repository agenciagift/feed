import { DocumentData } from 'firebase/firestore';
import { parseDocs } from "../firebase/links";

export const actionTypes = {
    LOADING: 'LOADING',
    SET_STATS: 'SET_STATS',
    SET_LINKS: 'SET_LINKS',
    ADD_LINK: 'ADD_LINK',
    REMOVE_LINK: 'REMOVE_LINK',
    REQUEST_SEARCH: 'REQUEST_SEARCH',
    REQUEST_NEXT_PAGE: 'REQUEST_NEXT_PAGE',
    SET_USER_LIKE: 'SET_USER_LIKE',
    UNSET_USER_LIKE: 'UNSET_USER_LIKE',
}

type Link = {
    id: string;
};

type Stat = {
    id: string;
    likes: number;
};

type Likes = {
    url: string;
    title: string;
}

type GlobalState = {
    nextItem: DocumentData;
    startAfter: DocumentData;
    search: string;
    loading: boolean;
    ended: boolean;
    links: Link[];
    stats: Stat[];
    likes: Likes[],
};

type Action = {
    type: string,
    payload: any,
}

export const initialState: GlobalState = {
    nextItem: {},
    startAfter: {},
    search: '',
    loading: false,
    ended: false,
    links: [],
    stats: [],
    likes: [],
};

const AppReducer = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.SET_STATS:
            return {
                ...state,
                stats: action.payload,
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

        case actionTypes.REQUEST_NEXT_PAGE:
            return {
                ...state,
                startAfter: state.nextItem || {},
            };

        case actionTypes.SET_USER_LIKE:
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    likes: [...state.likes, ...action.payload],
                }
            };

            state.likes.push(action.payload);
            return {
                ...state,
            };
        
        case actionTypes.UNSET_USER_LIKE:
            const likes = state.likes.filter((like) => like.url !== action.payload.url);
            return {
                ...state,
                likes,
            }

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
