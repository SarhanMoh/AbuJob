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
import { Rating, AirbnbRating } from "react-native-ratings";
import { dataBase } from "../../firebase";
import { Firestore } from "firebase/firestore";
import { navigate } from "../navi/RootNavi";

export default function RatingPage({route,navigation}) {
  const {account,key,phone} = route.params;
  const [comments, setComments] = useState("");
  const [efficiency, setEfficiency] = useState(0);
  const [reachability, setReachability] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [pricing, setPricing] = useState(0);
  const [fluency, setFluency] = useState(0);
  function ratingCompletedE(rating) {
    setEfficiency(rating);
  }
  function ratingCompletedR(rating) {
    setReachability(rating);
  }
  function ratingCompletedS(rating) {
    setSpeed(rating);
  }
  function ratingCompletedP(rating) {
    setPricing(rating);
  }
  function ratingCompletedF(rating) {
    setFluency(rating);
  }
  async function submit(){
    let totalRating = (efficiency+reachability+speed+pricing+fluency)/5;
    const ref = dataBase.collection(key);
    const snapshot = await ref.get();
    let docu ;
    let id ;
    let idR ;
    snapshot.forEach((doc) => {
      if (doc.data().phone_number===phone) {
        id = doc.id;
      }
    });
    docu = dataBase.collection(key).doc(id).collection("rating");
    const snap = await docu.get();
    snap.forEach((e)=>{
      if (e.data().email===account) {
        idR = e.id;
      }
    })
    console.log(account);
    if (idR === undefined) {
      dataBase.collection(key).doc(id).collection("rating").add({
        email : account,
        rate : totalRating,
        comment: comments
      }).then(()=>{
        console.log("successful add");
      })
    }else{
      dataBase.collection(key).doc(id).collection("rating").doc(idR).set({
        email : account,
        rate : totalRating,
        comment: comments
      }).then(()=>{
        console.log("successful add");
      })
    }
    let total = 0;
    let sum = 0;
    let count = 0;
    const ratee = dataBase.collection(key).doc(id).collection("rating");
    const snapR = await ratee.get();
    snapR.forEach((element)=>{
      sum += element.data().rate;
      count +=1;
    })
    total = sum/count;
    dataBase.collection(key).doc(id).update({
      rate : total
    }).then(()=>{
      alert("Rate Submited");
    })
    navigation.goBack();
  }
  function comment(val){
    setComments(val);
    console.log(val);
  }
 return (
  <SafeAreaView style={styles.containerBig}>
    <View>
  <Text>Efficiency</Text>
  <AirbnbRating
    count={5}
    reviews={["Very Bad", "Bad", "OK", "Good", "Very Good"]}
    defaultRating={0}
    onFinishRating={ratingCompletedE}
  />
  <Text>Reachability</Text>
  <AirbnbRating
    count={5}
    reviews={["Very Bad", "Bad", "OK", "Good", "Very Good"]}
    defaultRating={0}
    onFinishRating={ratingCompletedR}
  />
  <Text>speed</Text>
  <AirbnbRating
    count={5}
    reviews={["Very Bad", "Bad", "OK", "Good", "Very Good"]}
    defaultRating={0}
    onFinishRating={ratingCompletedS}
  />
  <Text>pricing</Text>
  <AirbnbRating
    count={5}
    reviews={["Very Bad", "Bad", "OK", "Good", "Very Good"]}
    defaultRating={0}
    onFinishRating={ratingCompletedP}
  />
  <Text>fluency</Text>
  <AirbnbRating
    count={5}
    reviews={["Very Bad", "Bad", "OK", "Good", "Very Good"]}
    defaultRating={0}
    onFinishRating={ratingCompletedF}
  />
   <TextInput
    placeholderTextColor="#899499"
    multiline={true}
    maxLength={200}
    numberOfLines={5}
    textAlign="right"
    defaultValue="Add a comment... (Optional)"
    onChangeText={(val)=>{comment(val)}}
  />
  <TouchableOpacity
  onPress={submit}
  >
    <Text>submit</Text>
  </TouchableOpacity>
  </View>
  </SafeAreaView>
 )
};



const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
});
//#0782f9 blue