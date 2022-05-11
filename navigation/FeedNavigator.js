import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import HomeScreen from "../screens/HomeScreen"
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
