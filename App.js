import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './Source/Navigation/Main-stack-nav/MainStack';
import TabBottom from './Source/Navigation/Main-bottom-nav/BottomBar'
export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}