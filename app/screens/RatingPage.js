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
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
import { dataBase } from "../../firebase";
import { Firestore } from "firebase/firestore";
import { navigate } from "../navi/RootNavi";

export default function RatingPage({ route, navigation }) {
  const { account, key, phone } = route.params;
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
  async function submit() {
    let totalRating =
      (efficiency + reachability + speed + pricing + fluency) / 5;
    const ref = dataBase.collection(key);
    const snapshot = await ref.get();
    let docu;
    let id;
    let idR;
    snapshot.forEach((doc) => {
      if (doc.data().phone_number === phone) {
        id = doc.id;
      }
    });
    docu = dataBase.collection(key).doc(id).collection("rating");
    const snap = await docu.get();
    snap.forEach((e) => {
      if (e.data().email === account) {
        idR = e.id;
      }
    });
    console.log(account);
    if (idR === undefined) {
      dataBase
        .collection(key)
        .doc(id)
        .collection("rating")
        .add({
          email: account,
          rate: totalRating,
          comment: comments,
        })
        .then(() => {
          console.log("successful add");
        });
    } else {
      dataBase
        .collection(key)
        .doc(id)
        .collection("rating")
        .doc(idR)
        .set({
          email: account,
          rate: totalRating,
          comment: comments,
        })
        .then(() => {
          console.log("successful add");
        });
    }
    let total = 0;
    let sum = 0;
    let count = 0;
    const ratee = dataBase.collection(key).doc(id).collection("rating");
    const snapR = await ratee.get();
    snapR.forEach((element) => {
      sum += element.data().rate;
      count += 1;
    });
    total = sum / count;
    dataBase
      .collection(key)
      .doc(id)
      .update({
        rate: total,
      })
      .then(() => {
        alert("Rate Submited");
      });
    navigation.goBack();
  }
  function comment(val) {
    setComments(val);
  }
  return (
    <SafeAreaView style={styles.containerBig}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <AntDesign
        name="back"
        size={34}
        color="#222"
        style={{ alignSelf: "flex-end", paddingRight: "4%" }}
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: 0,
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42,
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              padding: 20,
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <Text style={styles.text}>יעילות</Text>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={0}
              onFinishRating={ratingCompletedE}
              style={styles.rateButton}
            />
            <Text style={styles.text}>נגישות</Text>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={0}
              onFinishRating={ratingCompletedR}
              style={styles.rateButton}
            />
            <Text style={styles.text}>מהירות</Text>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={0}
              onFinishRating={ratingCompletedS}
              style={styles.rateButton}
            />
            <Text style={styles.text}>מחיר</Text>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={0}
              onFinishRating={ratingCompletedP}
              style={styles.rateButton}
            />
            <Text style={styles.text}>אחריות</Text>
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={0}
              onFinishRating={ratingCompletedF}
              style={styles.rateButton}
            />
            <View style={styles.commentCon}>
              <TextInput
                multiline={true}
                maxLength={200}
                numberOfLines={5}
                textAlign="right"
                style={styles.commentF}
                fontSize="18"
                placeholder="הוסף תגובה... (אופציונלי)"
                placeholderTextColor={"black"}
                onChangeText={(val) => {
                  comment(val);
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={submit} style={styles.button}>
              <Text style={styles.buttonText}>להגיש</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 20 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
  container: {
    //justifyContent:"space-around"
  },
  rateButton: {
    alignSelf: "flex-end",
    paddingVertical: 100,
  },
  commentF: {
    borderWidth: 2,
    width: "100%",
    marginTop: "10%",
    paddingHorizontal: "5%",
    alignSelf: "flex-end",
    height: 80,
    fontSize: 18,
  },
  commentCon: {
    paddingHorizontal: "5%",
  },
  text: {
    fontSize: 18,
    borderBottomWidth: 1,
    fontWeight: "700",
    marginVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#2885A6",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
//#0782f9 blue
