import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import GamePage from '../Pages/GamePage';
import ResultPage from '../Pages/ResultPage';
const AppNavigation = () => {
  const AppNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <AppNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AppNavigator.Screen
        name={'GamePage'}
        component={GamePage}
      />
      <AppNavigator.Screen
        name={'ResultPage'}
        component={ResultPage}
      />
    </AppNavigator.Navigator>
    </NavigationContainer>

  );
};

export default AppNavigation;
