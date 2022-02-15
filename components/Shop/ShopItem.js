import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

    const shopList = shopStore.shops.map(shop => <ShopItem key={shop._id} shop = {shop}/>)
const ShopItem = ({shopList}) => {
  return (
    <View>
      <Text>{shopList.name}</Text>
    </View>
  )
}

export default ShopItem

const styles = StyleSheet.create({})