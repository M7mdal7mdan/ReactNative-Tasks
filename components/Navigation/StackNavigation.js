import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home/Home";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopDetail";
import Cart from "../Buttons/Cart";
import CartList from "../Cart/CartList";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          headerRight: () => <Cart />,
        }}
      />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ headerTitle: "All Shops", headerRight: () => <Cart /> }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => ({
          title: route.params.shop.name,
          headerRight: () => <Cart />,
        })}
      />
      <Screen name="Cart" component={CartList} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
