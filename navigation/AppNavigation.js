import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
const AppNavigation = () => {
  const AppNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <AppNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AppNavigator.Screen
        name={'page1'}
        component={Page1}
      />
      <AppNavigator.Screen
        name={'page2'}
        component={Page2}
      />
    </AppNavigator.Navigator>
    </NavigationContainer>

  );
};

export default AppNavigation;
