
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home/Home"
import React from "react"
import { NativeBaseProvider, Box } from 'native-base';
import ShopList from './components/Shop/ShopList';

export default function App() {
  return (
    <NativeBaseProvider>
    <View>
      <Home/>
  
    </View>
    </NativeBaseProvider>
  );
}

