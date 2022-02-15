import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, NativeBaseProvider, Box } from "native-base";

const index = ({ navigation }) => {
  return (
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

      <Image
        style={{ height: 100, width: 100 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/f/f3/MNM_Sindhi_Logo_2020.png",
        }}
      />
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
  );
};

export default index;

const styles = StyleSheet.create({});
