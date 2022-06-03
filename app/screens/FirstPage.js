import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  Alert,
  text,
  TouchableOpacity,
} from "react-native";
import CustomButton from "./scr/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
//import Logo from './assets/AbuJobsLogo.jpeg'
const FirstPage = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const guest = "guest";
  const pressHandler=()=>{
    Alert.alert("اللغة/שפה" ,"",[
      {text:"עברית" , onPress: ()=>console.log("שפה עברית") },
      {text:"العربية" , onPress: ()=> console.log("اللغة العربية")}
    ])

  }
  return (
    <SafeAreaView style={styles.safeView}>
    <View style = {styles.container}>
        <View>
          <TouchableOpacity
          onPress={()=>pressHandler()}>
            {/* <Text style={styles.lanButton} > Ar/He </Text> */}
            <Image
            resizeMode="contain"
            source={require("../assets/lang.png")}
            style={styles.lanButton}
            
            />
          </TouchableOpacity>
        </View>
      <View style={styles.root}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      {
        <Image
          source={require("../assets/good.png")}
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
        onPress={() => navigation.navigate("Home" , {guest})}
        type="PRIMARY"
      />
      <Text style={styles.text}> אין לך חשבון ? להירשם כאן </Text>
      <CustomButton
        text="הירשם"
        onPress={() => navigation.navigate("SignUp")}
        type="C"
      />
      </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeView:{
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight *0.5 : 0,
  },
  container:{
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
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
  lanButton:{
    // borderColor :"black",
    // borderWidth : 2,
    // fontSize: 16,
    alignItems: 'flex-start',
    width: "15%",
    height: 40,
    justifyContent:"center",
    marginLeft:"2%",
  // backgroundColor: "black"
    //justifyContent: 'flex-start',
  }
});
export default FirstPage;
