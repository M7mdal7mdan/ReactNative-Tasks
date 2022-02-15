
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home/Home"
import React from "react"
import { NativeBaseProvider, Box } from 'native-base';
import ShopList from './components/Shop/ShopList';
import ShopDetail from './components/Shop/ShopDetail';

export default function App() {
  return (
    <NativeBaseProvider>
    <View>
      {/* <Home/> */}
      {/* <ShopList/> */}
      <ShopDetail/>
  
    </View>
    </NativeBaseProvider>
  );
}

