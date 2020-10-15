import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../Pages/Login/Login';
import LoginOtp from '../../Pages/OTP/LoginOtp';
import CreatetLogin from '../../Pages/OTP/CreatetLogin';
import Homepage from '../../Pages/Home-page/Homepage';
import RecipientForm from '../../Pages/Random/RecipientForm';
const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="LoginOtp" component={LoginOtp} />
    <Stack.Screen name="CreatetLogin" component={CreatetLogin} />
    <Stack.Screen name="Homepage" component={Homepage} />
    <Stack.Screen name="RecipientForm" component={RecipientForm} />
  </Stack.Navigator>
);

export default MainStackNavigator;