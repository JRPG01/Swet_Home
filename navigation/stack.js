import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import LoginScreen from '../screens/login-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}