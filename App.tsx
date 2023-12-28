/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation/Navigation';
import {StatusBar} from 'react-native';
import GlobalStateProvider from './src/context/GlobalStateContext';

function App(): React.JSX.Element {
  return (
    <GlobalStateProvider>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </GlobalStateProvider>
  );
}

export default App;
