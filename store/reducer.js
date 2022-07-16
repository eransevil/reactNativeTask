import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {

        clearMessage: (state) => {
            state.message = null;
        },
    },
});

export const {
    clearMessage
} = resultSlice.actions;

export default resultSlice.reducer;
