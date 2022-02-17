import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import { ImageBackground } from "react-native-web";

const index = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1, height: "100%", width: "100%" }}
      source={{
        uri: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80",
      }}
    >
      <View
        style={{
          height: "60%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#000",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 40,
            paddingRight: 40,
            marginTop: 400,
            height: 40,
          }}
        >
          Al-Hamdan Shop
        </Text>

        <Button
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 40,
            paddingRight: 40,
            marginTop: 400,
            height: 40,
          }}
          onPress={() => {
            navigation.navigate("Shops");
          }}
        >
          Visit shops
        </Button>
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({});
