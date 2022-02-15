import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { HStack, } from 'native-base'
import { observer } from 'mobx-react'
    
const ShopItem = ({shop}) => {
console.log("🚀 ~ file: ShopItem.js ~ line 6 ~ ShopItem ~ shop", shop.image)
  return (
    <View>
      <HStack w="100%" justifyContent="space-between"
      alignItems="center">
        <Image source={{uri:shop.image}} style={{
         height:"250px",
         width:"250px"}} />
      <Text mx="2">{shop.name}</Text>
      </HStack>
    </View>
  )
}

export default  ShopItem

const styles = StyleSheet.create({})