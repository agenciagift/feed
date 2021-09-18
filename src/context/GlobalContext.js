import React, { createContext, useEffect, useReducer } from "react";
import { createLinksRef } from "../util/links";
import AppReducer, { actionTypes, initialState } from "./AppReducer";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

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

    return (
        <GlobalContext.Provider value={{
            ...state,
            next,
            requestSearch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
