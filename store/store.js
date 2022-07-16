import { configureStore } from '@reduxjs/toolkit';
import { resultSlice } from './resultSlice';


const store = configureStore({
    reducer: resultSlice
});

export default store;


