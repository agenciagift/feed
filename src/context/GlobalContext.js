import { createContext, useEffect, useReducer } from "react";
import { collections } from "../constants/appConfig";
import { projectFirestore } from "../firebase/config";
import { createLinksRef } from "../firebase/links";
import AppReducer, { actionTypes, initialState } from "./AppReducer";
import { doc, addDoc, collection, deleteDoc, getDocs, onSnapshot } from 'firebase/firestore';

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const requestSearch = (text) => {
        dispatch({
            type: actionTypes.REQUEST_SEARCH,
            payload: text,
        });
    };

    const setUserLikes = (userLike) => {
        dispatch({
            type: actionTypes.SET_USER_LIKE,
            payload: userLike,
        });
    };
    
    const unsetUserLike = (userLike) => {
        dispatch({
            type: actionTypes.UNSET_USER_LIKE,
            payload: userLike,
        });
    };

    useEffect(() => {
        dispatch({ type: actionTypes.LOADING });
        const linksRef = createLinksRef(state.startAfter, state.search);
        getDocs(linksRef).then(payload => {
            dispatch({ type: actionTypes.SET_LINKS, payload });
        });
    }, [state.search, state.startAfter]);

    useEffect(() => {
        const collRef = collection(projectFirestore, collections.STATS);
        onSnapshot(collRef, (snap) => {
            let payload = [];
            snap.forEach(doc => {
                payload.push({ ...doc.data(), id: doc.id });
            });

            dispatch({ type: actionTypes.SET_STATS, payload });
        });
    }, []);

    const next = () => dispatch({ type: actionTypes.REQUEST_NEXT_PAGE });

    const add = async (payload) => {
        const response = await addDoc(collection(projectFirestore, collections.LINKS), payload);
        dispatch({ type: actionTypes.ADD_LINK, payload: { ...payload, id: response.id } });
    };

    const remove = async (payload) => {
        await deleteDoc(doc(projectFirestore, collections.LINKS, payload));
        dispatch({ type: actionTypes.REMOVE_LINK, payload });
    };

    return (
        <GlobalContext.Provider value={{
            ...state,
            next,
            add,
            remove,
            requestSearch,
            setUserLikes,
            unsetUserLike,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
