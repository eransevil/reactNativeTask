import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (key, payload) => {
    console.log('key, payload', key, payload);
  await AsyncStorage.setItem(key, JSON.stringify(payload));
};

export const getFromStorage = async (key) => {
  return JSON.parse(await AsyncStorage.getItem(key));
};

export const clearStorage = async () => {
  const keys = ['bestResults'];
  await AsyncStorage.multiRemove(keys);
};
