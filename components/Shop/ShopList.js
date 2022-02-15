import { StyleSheet,Text,View } from "react-native";

import React from "react";
import ShopItem from "./ShopItem";

const ShopList =() => {

    const shopList = shopStore.shops.map(shop => <ShopItem key={shop._id} shop = {shop}/>)
    return (
        <View>
          <Text>ShopList</Text>
            {shopList}
        </View>
    )
}
export default ShopList