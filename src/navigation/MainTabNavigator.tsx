import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FlightsScreen from '../screens/FlightsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { SimpleLineIcons } from '@expo/vector-icons';

type TabParamList = {
  Plans: undefined;
  Flights: undefined;
  Me: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof SimpleLineIcons>['name'];

            if (route.name === 'Plans') {
              iconName = 'calendar';
            } else if (route.name === 'Flights') {
              iconName = 'plane';
            } else if (route.name === 'Me') {
              iconName = 'user';
            } else {
              iconName = 'plane';
            }

            return <SimpleLineIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen options={{headerShown: false}} name="Plans" component={HomeScreen} />
        <Tab.Screen options={{headerShown: false}} name="Flights" component={FlightsScreen} />
        <Tab.Screen options={{headerShown: false}} name="Me" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
