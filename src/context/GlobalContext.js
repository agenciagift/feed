import React, { createContext, useEffect, useReducer } from "react";
import { collections } from "../constants/appConfig";
import { projectFirestore } from "../firebase/config";
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
        if (!user) {
            console.log('Invalid user :(');
            return;
        }

        const docRef = projectFirestore.collection(collections.LINKS).doc(payload);
        const doc = await docRef.get();
        if (!doc.exists) {
            console.log('Document not found :(');
            return;
        }

        const likesRef = projectFirestore.collection(collections.USERS)
            .doc(user.uid).collection('lists').doc('Likes');
        const likesData = await likesRef.get();

        const batch = projectFirestore.batch();

        if (likesData.exists) {
            const { items } = (likesData.data() || {});
            if (items instanceof Array && items.includes(doc.id)) {
                console.log('Already liked =)');
                return;
            }
            batch.update(likesRef, { items: [...items, doc.id] });
        } else {
            batch.set(likesRef, { name: 'Likes', items: [doc.id] });
        }

        const count = doc.data().likes || 0;
        batch.update(docRef, { likes: count + 1 });

        await batch.commit();
        console.log('success');
    };

    return (
        <GlobalContext.Provider value={{
            ...state,
            next,
            add,
            remove,
            like,
            requestSearch,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};
