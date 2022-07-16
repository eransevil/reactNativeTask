import { createSlice } from '@reduxjs/toolkit';
import { getFromStorage } from '../utils/setAsyncStoarge';

const initialState = {
    results: []
};

console.log('initialState',initialState );

export const resultSlice = createSlice({
    name: 'resultSlice',
    initialState,
    reducers: {

        initResultes: (state, action) => {
            console.log('action', action.payload);
            state.results = action.payload;
        },
    },
});

export const {
    initResultes
} = resultSlice.actions;

export default resultSlice.reducer;
