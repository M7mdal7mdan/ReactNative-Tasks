import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products}) => {
    const productList = products.map(product => <ProductItem key={product._id} product = {product}/>)
  return (
    <View>
       <Text>Products</Text>
         {productList}
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({})