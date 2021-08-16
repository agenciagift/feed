import { createSlice } from "@reduxjs/toolkit";
import { status } from "../constants";

const initialState = {
    value: {
        term: '',
    },
    status: status.IDLE,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { set } = searchSlice.actions;

export const selectSearch = (state) => state.search.value;

export default searchSlice.reducer;
