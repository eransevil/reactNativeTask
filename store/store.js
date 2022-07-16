import { configureStore } from '@reduxjs/toolkit';
import { resultSlice } from './reducer';


const store = configureStore({
    reducer: { resultSlice }
});

export default store;


