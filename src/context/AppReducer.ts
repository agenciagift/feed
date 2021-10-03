import { parseDocs } from "../util/links";
import firebase from 'firebase/app';

export const actionTypes = {
    LOADING: 'LOADING',
    SET_STATS: 'SET_STATS',
    SET_LINKS: 'SET_LINKS',
    ADD_LINK: 'ADD_LINK',
    REMOVE_LINK: 'REMOVE_LINK',
    REQUEST_SEARCH: 'REQUEST_SEARCH',
    REQUEST_NEXT_PAGE: 'REQUEST_NEXT_PAGE',
}

type Link = {
    id: string;
};

type Stat = {
    id: string;
    likes: number;
};

type GlobalState = {
    nextItem: firebase.firestore.DocumentData;
    startAfter: firebase.firestore.DocumentData;
    search: string;
    loading: boolean;
    ended: boolean;
    links: Link[];
    stats: Stat[];
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
