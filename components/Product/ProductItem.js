import { StyleSheet, Text, View } from "react-native";
import React from "react";
import cartStore from "../../stores/cartStore";
import NumericInput from "react-native-numeric-input";
import { HStack } from "native-base";
import { useToast } from "native-base";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const toast = useToast();

  const handleQuantity = (value) => setQuantity(value);
  const handleAdd = () => {
    const item = {
      product: product,
      quantity: quantity,
    };
    cartStore.addItemToCart(item);
    setQuantity(0);

    toast.show({
      title: `${product.name} is Added Successfully`,
      status: "success",
      description: `${quantity} pc(s)`,
    });
  };

  return (
    <HStack>
      <Text>{product.name}</Text>
      <NumericInput
        initValue={quantity}
        value={quantity}
        onChange={(value) => handleQuantity(value)}
        minValue={0}
      />
      <Button onPress={handleAdd}>Add to cart</Button>
    </HStack>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
