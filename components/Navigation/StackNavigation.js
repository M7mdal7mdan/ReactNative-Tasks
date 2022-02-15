import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home/Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import CartIcon from "../Cart/CartIcon";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          headerRight: () => <CartIcon />,
        }}
      />
      <Screen name="Shops" component={ShopList} />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => ({
          title: route.params.shop.name,
          headerRight: () => <CartIcon />,
        })}
      />
    </Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
