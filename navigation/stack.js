import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import RegisterScreen from '../screens/register-screen';
import SavedScreen from '../screens/saved-screen';
import HomeDrawer from './drawer';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name='Saved' component={SavedScreen} />
    </Stack.Navigator>
  );
}