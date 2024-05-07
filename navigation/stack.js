import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';
import RegisterScreen from '../screens/register-screen';
import SavedScreen from '../screens/saved-screen';
import PublicationScreen from '../screens/publication-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{stackLabel: ()=> <Text> Sweet Home </Text>}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{stackLabel: ()=> <Text> Inicio de sesion </Text>}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{stackLabel: ()=> <Text> Registrate </Text>}} />
      <Stack.Screen name='Saved' component={SavedScreen} options={{stackLabel: ()=> <Text> Guardados </Text>}} />
      <Stack.Screen name='Publication' component={PublicationScreen} options={{stackLabel: ()=> <Text> Publicacion </Text>}} />
    </Stack.Navigator>
  );
}