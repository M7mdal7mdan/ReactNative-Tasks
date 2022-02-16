import { StyleSheet, Text } from "react-native";
import React from "react";
import { HStack, VStack, Avatar, Wrap, Button } from "native-base";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const cost = item.product.price * item.quantity;
  const handleAdd = () => {
    const newItem = { quantity, item };
    cartStore.addItemToCart(newItem);
    console.log("handleAdd -> newItem", newItem);
  };
  return (
    <HStack>
      <Wrap spacing={10} align="center" direction="row">
        <Avatar size="lg" source={{ uri: item.product.image }} />
        <VStack>
          <Text>{item.product.name}</Text>
          <Text>
            {item.product.price} KD x {item.quantity} = {cost} KD
          </Text>
          <Text>{cost} KD</Text>
        </VStack>

        <NumericInput
          rounded
          value={quantity}
          onChange={(value) => setQuantity(value)}
          totalHeight={30}
          totalWidth={60}
        />
        <Button onPress={handleAdd}>
          <Text> Add </Text>
        </Button>
      </Wrap>
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
