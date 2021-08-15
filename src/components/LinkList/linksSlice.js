import { createSlice } from "@reduxjs/toolkit";
import { sliceState } from "../../app/storeConstants";

const initialState = {
    value: [],
    status: sliceState.IDLE,
};

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.status = sliceState.LOADING;
        },
        fetchEnd: (state) => {
            state.status = sliceState.IDLE;
        },
        set: (state, action) => {
            state.value = action.payload;
        },
        add: (state, action) => {
            state.value = [
                action.payload,
                ...state.value,
            ];
        },
        remove: (state, action) => {
            state.value = state.value
                .filter(({ id }) => id !== action.payload);
        },
    }
})

export const { fetchStart, fetchEnd, set, add, remove } = linksSlice.actions;

export const selectLinks = (state) => state.links.value;

export const fetchLinks = () => (dispatch, getState) => {
    console.log(getState());
    dispatch(set([{
        id: 9879,
        url: 'none',
    }]));
};

export default linksSlice.reducer;
