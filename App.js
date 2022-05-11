import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './components/AppButton';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import ListingEditScreen from "./screens/ListingEditScreen";

import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigation/NavigationTheme";
import HomeScreen from './screens/HomeScreen';
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return ( 
    <NavigationContainer theme={navigationTheme}>
      {/* <HomeScreen/> */}
      {/* <LoginScreen/> */}
      {/* <RegisterScreen/> */}
      {/* <WelcomeScreen/> */}
      {/* <AuthNavigator/> */}
      <AppNavigator />
      
    </NavigationContainer>
  );
}


