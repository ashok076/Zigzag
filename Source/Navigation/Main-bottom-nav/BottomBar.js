import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homepage from '../../Pages/Home-page/Homepage'
const Tab = createMaterialBottomTabNavigator();

function TabBottom() {
  return (

      <Tab.Navigator
        initialRouteName="Login"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="Homepage"
          component={Homepage}
          options={{

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>

  );
}
export default TabBottom ;