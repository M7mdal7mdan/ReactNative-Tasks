import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import { VStack } from "native-base";

const CartList = () => {
  const CartItems = cartStore.items.map((item) => <CartItem item={item} />);
  return (
    <View>
      <VStack space={3}>{CartItems}</VStack>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({});
