import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { HStack } from "native-base";

const ShopItem = ({ navigation, shop }) => {
  console.log("🚀 ~ file: ShopItem.js ~ line 6 ~ ShopItem ~ shop", shop.image);
  return (
    <Pressable
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
    >
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <Image
          source={{ uri: shop.image }}
          style={{
            height: "250px",
            width: "250px",
          }}
        />
        <Text mx="2">{shop.name}</Text>
      </HStack>
    </Pressable>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
