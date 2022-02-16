import { StyleSheet, Text } from "react-native";
import React from "react";
import { HStack, VStack, Avatar, Wrap, Button, useToast } from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import cartStore from "../../stores/cartStore";
import { baseURL } from "../../stores/api";

const CartItem = ({ item }) => {
  const toast = useToast();

  const cost = item.product.price * item.quantity;

  const handleRemove = () => {
    cartStore.removeItemFromCart(item.product._id);
    toast.show({
      title: `${item.product.name} has been deleted`,
      status: "info",
    });
  };

  return (
    <HStack>
      <Avatar size="lg" source={{ uri: baseURL + item.product.image }} />
      <VStack>
        <Text>{item.product.name}</Text>
        <Text>
          {item.product.price} KD x {item.quantity} = {cost} KD
        </Text>
        <Text>{cost} KD</Text>
      </VStack>
      "
      <EntypoIcon size={20} name="trash" onPress={handleRemove} />
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
