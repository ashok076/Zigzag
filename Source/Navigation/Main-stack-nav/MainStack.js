import React from 'react';
import { View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SplashScreen from '../../Pages/SplashScreen/SplashScreen'
import Login from '../../Pages/Login/Login';
import LoginOtp from '../../Pages/OTP/LoginOtp';
import CreatetLogin from '../../Pages/OTP/CreatetLogin';
import RecipientForm from '../../Pages/Random/RecipientForm';


import BottomBar from '../Main-bottom-nav/BottomBar';
import Chat from '../../Pages/Indbox/Chat'
import Setting from '../../Pages/AccountSetting/Setting';
import Complete from '../../Pages/Complete/Complete'
import CreateAccount from '../../Pages/OTP/CreateAccount';
import Payment from '../../Pages/PaymentMethod/Payment';
import ChangePassword from '../../Pages/AccountSetting/ChangePassword'
import PackageInformation from '../../Pages/Random/PackageInformation';
import OrderComplete from '../../Pages/Complete/OrderComplete';
import FAQ from '../../Pages/FAQ/FAQ';
import EditProfile from '../../Pages/AccountSetting/EditProfile';
import PromoModal from '../../Pages/PromoDetails/PromoModal'
import UploadRequest from '../../Pages/Random/UploadRequest';
import DatePickerView from '../../Pages/Random/DatePickerView';
import AddCard from '../../Pages/AccountSetting/AddCard';

const Stack = createStackNavigator();



const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="UploadRequest" component={UploadRequest} />
    <Stack.Screen name="AddCard" component={AddCard} />
    <Stack.Screen name="DatePickerView" component={DatePickerView} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="LoginOtp" component={LoginOtp}   />
    <Stack.Screen name="CreatetLogin" component={CreatetLogin} />
    <Stack.Screen name="RecipientForm" component={RecipientForm} />
    <Stack.Screen name="Homepage" component={BottomBar} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Setting" component={Setting} />
    <Stack.Screen name="Complete" component={Complete} />
    <Stack.Screen name="CreateAccount" component={CreateAccount} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="PackageInformation" component={PackageInformation} />
    <Stack.Screen name="OrderComplete" component={OrderComplete} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="PromoModal" component={PromoModal} />
  </Stack.Navigator>
);

export default MainStackNavigator;
