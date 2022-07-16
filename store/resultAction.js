import { saveToStorage, getFromStorage } from '../utils/setAsyncStoarge';
import { initResultes, setResult } from './resultSlice';

const key = 'bestResults'


export const saveResultToStorage = (payload) => async (dispatch) => {
    const bestResults = await getFromStorage(key);
    bestResults.push(payload);
    const bestResultsSorted = bestResults.sort((a, b) => b.result - a.result)
    await saveToStorage('bestResults', bestResultsSorted.slice(0, 9))
    dispatch(setResult(bestResultsSorted));
};