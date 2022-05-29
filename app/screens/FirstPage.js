import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Pressable,
} from "react-native";
import CustomButton from "./scr/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
//import Logo from './assets/AbuJobsLogo.jpeg'
const FirstPage = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      {
        <Image
          source={require("../assets/AbuJobsLogo.jpeg")}
          style={[styles.logo, { height: height * 0.1 }]}
        />
      }
      <CustomButton
        text="להתחבר"
        onPress={() => navigation.navigate("SignIn")}
        type="PRIMARY"
      />
      <CustomButton
        text="להיכנס כאורח"
        onPress={() => navigation.navigate("Home")}
        type="PRIMARY"
      />
      <Text style={styles.text}> אין לך חשבון ? להירשם כאן </Text>
      <CustomButton
        text="הירשם"
        onPress={() => navigation.navigate("SignUp")}
        type="C"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffff",
  },
  logo: {
    paddingTop: 200,
    resizeMode: "contain",
    width: "70%",
    maxWidth: 500,
    maxHeight: 400,
  },
  text: {
    paddingTop: 30,
    fontWeight: "bold",
    color: "gray",
  },
});
export default FirstPage;
