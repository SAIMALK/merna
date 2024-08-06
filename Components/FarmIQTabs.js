// FarmIQTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../Screens/HomeScreen';
import AllCropsScreen from '../Screens/AllCropScreen';
import WeatherScreen from '../Screens/WeatherScreen';

const Tab = createBottomTabNavigator();

const FarmIQTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: '#009900' },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#CCFF99',
      headerStyle: { backgroundColor: '#009900' },
      headerTintColor: '#fff',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Crops"
      component={AllCropsScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Crops',
        tabBarIcon: ({ color, size }) => <Icon name='eco' color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Weather"
      component={WeatherScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Weather',
        tabBarIcon: ({ color, size }) => <Icon name='cloud' color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);

export default FarmIQTabs;
