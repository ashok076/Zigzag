import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Homepage from '../../Pages/Home-page/Homepage';
 

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Homepage" component={Homepage} />
    </Tab.Navigator>
  );
}