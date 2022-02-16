import React from "react";
import ShopItem from "./ShopItem";
import shopStore from "../../stores/shopStores";
import { Center, Box, Heading, VStack } from "native-base";
import { observer } from "mobx-react";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));

  return (
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
  );
};
export default observer(ShopList);
