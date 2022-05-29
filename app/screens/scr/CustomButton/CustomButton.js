import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
const CustomButton = ({ onPress, text, type }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    //   backgroundColor:"#3B71F3",
    width: "70%",
    marginVertical: 5,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 10,
  },
  container_PRIMARY: {
    backgroundColor: "#ffff",
    borderColor: "#2885A6",
    borderWidth: 3,
  },
  container_TERITARY: {},
  text: {
    color: "#2885A6",
    fontWeight: "700",
    fontSize: 16,
  },
  text_TERITARY: {
    color: "gray",
  },
  container_C: {
    backgroundColor: "#A8D173",
    borderColor: "#A8D173",
    borderWidth: 3,
  },
  text_C: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
export default CustomButton;
