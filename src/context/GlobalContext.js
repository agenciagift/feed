import { createContext, useEffect, useReducer } from "react";
import { collections } from "../constants/appConfig";
import { projectFirestore } from "../firebase/config";
import { addLinkToCollection, removeLinkFromCollection } from "../firebase/userCollections";
import useAuth from '../hooks/useAuth';
import { createLinksRef } from "../util/links";
import AppReducer, { actionTypes, initialState } from "./AppReducer";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const { user } = useAuth();

    const requestSearch = (text) => {
        dispatch({
            type: actionTypes.REQUEST_SEARCH,
            payload: text,
        });
    };

    useEffect(() => {
        dispatch({ type: actionTypes.LOADING });
        createLinksRef(state.startAfter, state.search).get().then(payload => {
            dispatch({ type: actionTypes.SET_LINKS, payload });
        });
    }, [state.search, state.startAfter]);

    const next = () => dispatch({ type: actionTypes.REQUEST_NEXT_PAGE });

    const add = async (payload) => {
        await projectFirestore.collection(collections.LINKS).add(payload);
        dispatch({ type: actionTypes.ADD_LINK, payload });
    };

    const remove = async (payload) => {
        await projectFirestore.collection(collections.LINKS).doc(payload).delete();
        dispatch({ type: actionTypes.REMOVE_LINK, payload });
    };

    const like = async (payload) => {
        try {
            await addLinkToCollection('Likes', payload, user);
            dispatch({ type: actionTypes.ADD_LIKE, payload });
        }
        catch (error) {
            console.warn(error);
        }
    };

    const removeLike = async (payload) => {
        try {
            await removeLinkFromCollection('Likes', payload, user);
            dispatch({ type: actionTypes.REMOVE_LIKE, payload });
        }
        catch (error) {
            console.warn(error);
        }
    }

    return (
        <GlobalContext.Provider value={{
            ...state,
            next,
            add,
            remove,
            like,
            removeLike,
            requestSearch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
