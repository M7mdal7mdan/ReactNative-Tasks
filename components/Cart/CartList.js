import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";
import { VStack } from "native-base";
import { observer } from "mobx-react";

const CartList = ({ navigation }) => {
  const CartItems = cartStore.items.map((item) => <CartItem item={item} />);

  const handleCheckout = () => {
    if (authStore.user) {
      cartStore.checkout();
    } else {
      Alert.alert("You 're not signed in!", "sign in to continue", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sign in", onPress: () => navigation.navigate("signin") },
      ]);
    }
  };
  return (
    <View>
      <VStack space={3}>{CartItems}</VStack>
      <Button onPress={cartStore.checkout}>
        <Text>Checkout</Text>
      </Button>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
