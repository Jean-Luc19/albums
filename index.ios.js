//Import Library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create Component

const App = () => (
  <Text>Some Text</Text>
);

//Render to device

AppRegistry.registerComponent('albums', () => App)
