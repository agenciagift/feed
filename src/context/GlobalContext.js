import React, { createContext, useEffect, useReducer } from "react";
import { collections } from "../constants/appConfig";
import { projectFirestore } from "../firebase/config";
import { createLinksRef } from "../firebase/links";
import AppReducer, { actionTypes, initialState } from "./AppReducer";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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

    useEffect(() => {
        projectFirestore.collection(collections.STATS).onSnapshot((snap) => {
            let payload = [];
            snap.forEach(doc => {
                payload.push({ ...doc.data(), id: doc.id });
            });

            dispatch({ type: actionTypes.SET_STATS, payload });
        });
    }, []);

    const next = () => dispatch({ type: actionTypes.REQUEST_NEXT_PAGE });

    const add = async (payload) => {
        const response = await projectFirestore.collection(collections.LINKS).add(payload);
        dispatch({ type: actionTypes.ADD_LINK, payload: { ...payload, id: response.id } });
    };

    const remove = async (payload) => {
        await projectFirestore.collection(collections.LINKS).doc(payload).delete();
        dispatch({ type: actionTypes.REMOVE_LINK, payload });
    };

    return (
        <GlobalContext.Provider value={{
            ...state,
            next,
            add,
            remove,
            requestSearch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
