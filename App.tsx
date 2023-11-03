/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NAVIGATION from './Navigation';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <NAVIGATION />
    </NavigationContainer>
  );
}

export default App;
