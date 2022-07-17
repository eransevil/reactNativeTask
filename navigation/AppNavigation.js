import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GamePage from '../Pages/GamePage';
import ResultPage from '../Pages/ResultPage';
import { getFromStorage } from '../utils/setAsyncStoarge';
import { useDispatch } from 'react-redux'
import { initResultes } from '../store/resultSlice';
import AppHeader from '../Components/AppHeader';

const AppNavigation = () => {
  const AppNavigator = createNativeStackNavigator();
  const dispatch = useDispatch()


  useEffect(() => {
    fetchBestResults()
  }, [])

  const fetchBestResults = async () => {
    const bestResults = await getFromStorage('bestResults')
    dispatch(initResultes(bestResults || []))
  }

  return (
    <NavigationContainer>
      <AppNavigator.Navigator screenOptions={{
        headerShown: true,
        header: () => <AppHeader />,
      }}>
        <AppNavigator.Screen
          name={'GamePage'}
          component={GamePage}
        />
        <AppNavigator.Screen
          name={'resultPage'}
          component={ResultPage}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>

  );
};

export default AppNavigation;
