import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";

import { useNavigation } from "@react-navigation/native";

const CartIcon = () => {
  const navigation = useNavigation();
  return <Button onPress={() => navigation.navigate("Home")}> Cart</Button>;
};

export default CartIcon;

const styles = StyleSheet.create({});
