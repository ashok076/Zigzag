import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homepage from '../../Pages/Home-page/Homepage'
import PromoDetails from '../../Pages/PromoDetails/PromoDetails'
import Indboxpage from '../../Pages/Indbox/Indboxpage';
import Notification from '../../Pages/Notification/Notification';
import AccountSetting from '../../Pages/AccountSetting/AccountSetting';
import Boxipay from '../../Pages/Boxipay/Boxipay';
import MyTabBar from './BottomStack';
import Map from '../../Pages/Map/Map';
import MapScreen from '../../Pages/Map/MapScreen'
import MapDeliver from '../../Pages/Map/MapDeliver'
import MapViewScreen from '../../Pages/Map/MapViewScreen';
import MapOrder from '../../Pages/Map/MapOrder';
import FindingPilot from '../../Pages/Map/FindingPilot';
import MapSendFilter from '../../Pages/Map/MapSendFilter';
import HomePagePoilt from '../../Pages/Home-page/HomePagePoilt';
import TrackDeliverys from '../../Pages/TrackDeliverys/TrackDeliverys';
import History from '../../Pages/TrackDeliverys/History';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const MapView = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
        {/* Poilt home page */}
        <HomeStack.Screen options={{ headerShown: false }} name="Homepage" component={Homepage} />
       <HomeStack.Screen options={{ headerShown: false }} name="HomePagePoilt" component={HomePagePoilt} />
      <HomeStack.Screen options={{ headerShown: false }} name="Notification" component={Notification} />
      <HomeStack.Screen options={{ headerShown: false }} name="PromoDetails" component={PromoDetails} />
      <HomeStack.Screen options={{ headerShown: false }} name="Boxipay" component={Boxipay} />
      <MapView.Screen options={{ headerShown: false }} name="MapScreen" component={MapScreen} />
      <MapView.Screen options={{ headerShown: false }} name="MapViewScreen" component={MapViewScreen} />
      <MapView.Screen options={{ headerShown: false }} name="MapOrder" component={MapOrder} />
      <MapView.Screen options={{ headerShown: false }} name="Map" component={Map} />
      <MapView.Screen options={{ headerShown: false }} name="History" component={History} />
      <MapView.Screen options={{ headerShown: false }} name="MapDeliver" component={MapDeliver} />
      <MapView.Screen options={{ headerShown: false }} name="MapSendFilter" component={MapSendFilter} />
      <MapView.Screen options={{ headerShown: false }} name="FindingPilot" component={FindingPilot} />
      <MapView.Screen options={{ headerShown: false }} name="TrackDeliverys" component={TrackDeliverys} />
    </HomeStack.Navigator>
  );
}
function MapScreenView() {
  <MapView.Navigator>
     <MapView.Screen options={{ headerShown: false }} name="Map" component={Map} />
  </MapView.Navigator>

}
export default function BottomBar() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#ffffff' }}
      screenOptions={{ headerShown: false }}
    
    >
      <Tab.Screen
        name="Homepage" component={HomeStackScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../Images/Bottom/Home1.png')}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MapSendFilter" component={MapSendFilter}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../Images/Bottom/Box1.png')}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Indboxpage" component={Indboxpage}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../Images/Bottom/Chat1.png')}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AccountSetting" component={AccountSetting}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../Images/Bottom/Acc1.png')}
              style={{ height: 35, width: 35 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
