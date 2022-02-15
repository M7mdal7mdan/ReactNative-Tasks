import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home/Home";
import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import ShopList from "./components/Shop/ShopList";
import ShopDetail from "./components/Shop/ShopDetail";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
