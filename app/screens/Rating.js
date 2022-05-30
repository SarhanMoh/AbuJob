import {
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    TextInput,
    SafeAreaView,
    FlatList,
    Platform,
    StatusBar,
    ActivityIndicator,
    Dimensions,
  } from "react-native";
  import { AntDesign } from "@expo/vector-icons";
  import React, { useEffect, useState } from "react";
  import { AirbnbRating } from "react-native-ratings";
  import { dataBase } from "../../firebase";
  
  export default function Rating({route }) {
    const {email} = route.params;
    console.log("rating",email);
   return (

    <View>
        <Text>Yes No</Text>
    </View>

   )
  };
  
  
  
  const styles = StyleSheet.create({

  });
  //#0782f9 blue
  