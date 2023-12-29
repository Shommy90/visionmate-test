import React, {FC} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../screens';
import Users from '../screens/Users';
import User from '../screens/User';
import color from '../styles/colors';
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShadowVisible: false,
  };

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: color.primary,
        },
      }}>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            title: '',
          }}
        />
        <Stack.Screen name="Users" component={Users} options={{title: ''}} />
        <Stack.Screen name="User" component={User} options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
