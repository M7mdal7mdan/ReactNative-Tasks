import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartIcon = () => {
  const navigation = useNavigation();
  const total = 0;
  cartStore.items.forEach((item) => (total = total + item.quantity));
  return (
    <>
      <FeatherIcon
        name="shopping-cart"
        size={30}
        color="#000"
        onPress={() => navigation.navigate("Cart")}
      />
      ;
    </>
  );
};

export default observer(CartIcon);

const styles = StyleSheet.create({});
