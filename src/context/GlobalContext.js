import React, { createContext, useReducer } from "react";
import AppReducer, { actionTypes } from "./AppReducer";

const initialState = {
    search: '',
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const requestSearch = (text) => {
        dispatch({
            type: actionTypes.REQUEST_SEARCH,
            payload: text,
        });
    };

    return (
        <GlobalContext.Provider value={{
            search: state.search,
            requestSearch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
