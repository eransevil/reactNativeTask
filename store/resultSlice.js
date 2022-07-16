import { createSlice } from '@reduxjs/toolkit';
import { getFromStorage } from '../utils/setAsyncStoarge';

const initialState = {
    results: []
};


export const resultSlice = createSlice({
    name: 'resultSlice',
    initialState,
    reducers: {

        initResultes: (state, action) => {
            state.results = action.payload;
        },
        setResult: (state, action) => {
            state.results = action.payload;
        }
    },
});

export const {
    initResultes,
    setResult
} = resultSlice.actions;

export default resultSlice.reducer;
