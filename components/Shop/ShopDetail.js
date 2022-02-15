import {SafeAreaView ,View, Text,Image } from 'react-native'
import React from 'react'
import shopStore from '../../stores/shopStores'
import { observer } from 'mobx-react-lite';
import { baseURL } from '../../stores/api';
import ProductList from '../Product/ProductList';
import Loading from '../Loading';



const ShopDetail = () => {
    if(shopStore.loading) return(<Loading/>)
         
    const shop = shopStore.shops[0];
    const types = shop.type.map((mnm) => (<Text key={mnm}>{mnm} </Text>));
   
  return (
      <SafeAreaView>
    
    <View style={{
        titleView:{
            height:"40%",
            alignItems:"ceneter",
            justifyContent:"center",
        }
    }}>
      <Text style={{
        title:{color:"#000",fontSize:38,textAlign:"center"}}}>
            {shop.name}</Text>
            <Image source={{uri: shop.image}} style={{
         height:"250px",
         width:"250px"}}/>
         {types}
        
         <ProductList products={shop.products}/>
    </View>
   
    </SafeAreaView>
  )
}

export default observer (ShopDetail)