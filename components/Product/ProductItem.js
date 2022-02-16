import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cartStore from "../../stores/cartStore";

const ProductItem = ({ product }) => {
  const handleAdd = () => {
    const newItem = {
      product: product,
      quantity: 1,
    };
    cartStore.addItemToCart(newItem);
  };
  return (
    <View>
      <Text>{product.name}</Text>
      <Button onPress={handleAdd}>Add to cart</Button>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
