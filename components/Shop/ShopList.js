import React from "react";
import ShopItem from "./ShopItem";
import shopStore from "../../stores/shopStores";
import { Center, Box, Heading, VStack } from "native-base";
import { observer } from "mobx-react";
import { ImageBackground } from "react-native-web";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));

  return (
    <ImageBackground
      style={{ flex: 1, height: "100%", width: "100%" }}
      source={{
        uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80",
      }}
    >
      <Center>
        <Box maxW="300" w="100%">
          <Heading
            mb="2"
            size="md"
            style={{
              color: "#000",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 40,
              paddingRight: 40,
              marginTop: 100,
              height: 40,
            }}
          >
            Shops
          </Heading>
          <VStack space={4}>
            <VStack>{shopList}</VStack>
          </VStack>
        </Box>
      </Center>
    </ImageBackground>
  );
};
export default observer(ShopList);
