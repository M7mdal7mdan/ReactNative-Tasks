import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack, Avatar } from "native-base";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  const cost = item.product.price * item.quantity;
  return (
    <HStack>
      <Avatar size="lg" source={{ uri: item.product.image }} />
      <VStack>
        <Text>{item.product.name}</Text>
        <Text>
          {item.product.price} KD x {item.quantity} = {cost} KD
        </Text>
        <Text>{cost} KD</Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
