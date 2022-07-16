
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';

import AppNavigation from './navigation/AppNavigation';

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
