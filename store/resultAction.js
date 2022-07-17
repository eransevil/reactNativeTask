import { saveToStorage } from '../utils/setAsyncStoarge';
import { setResult } from './resultSlice';

const key = 'bestResults'

export const saveResultToStorage = (payload) => async (dispatch, getState) => {
    
    let  bestResults  = getState().reducer.results;
    let newBestResults = [...bestResults]
    newBestResults?.push(payload);
    let newBestResultsSorted = newBestResults.sort((a, b) => b.result - a.result)
    newBestResultsSorted =  newBestResultsSorted.splice(0, 9)
    await saveToStorage(key, newBestResultsSorted);
 
    dispatch(setResult(newBestResultsSorted));
};