import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StatusBar,
  Animated,
  Button,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Easing,
  ActivityIndicator,
  View,
  SafeAreaView,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { dataBase } from "../firebase";
import { Picker } from "@react-native-picker/picker";
import { collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { withNavigation } from "react-navigation";

const options = [
  {
    label: "רכב",

    value: "Cars",
  },

  {
    label: "שיפוצים",

    value: "Renovations",
  },

  {
    label: "טיפול",

    value: "Treatment",
  },

  {
    label: "אמנות ומלאכת יד",

    value: "Arts",
  },
  {
    label: "קוסמטיקה",

    value: "cosmetics",
  },
  {
    label: "תיקונים ומלאכות",

    value: "Repairs",
  },
  {
    label: "חשמלאות",

    value: "Electricians",
  },
  {
    label: "הוראה",

    value: "Teaching",
  },
  {
    label: "מוסיקה",

    value: "Music",
  },
  {
    label: "שירותי מכלות",

    value: "Grocery",
  },
  {
    label: "טכנאים",

    value: "Technicians",
  },
  {
    label: "כושר ואימון פיזי",

    value: "Fitness",
  },
  {
    label: "שונות",

    value: "Various",
  },
  {
    label: "קייטרינג",

    value: "Catering",
  },
];

class ReadComponent extends Component {
  constructor() {
    super();
    //this.ref = dataBase.collection();
    this.state = {
      category: "Cars",
      isLoading: false,
      emptyList: [],
    };
  }

  async getList() {
    const ref = dataBase.collection(this.state.category);
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      tmp.push(doc.data());
    });
    this.setState({
      emptyList: tmp,
    });
    console.log(this.state.emptyList);
  }
  // componentDidMount(){
  //   const scrollY= React.useRef(new Animated.Value(0)).current;
  // }
  render() {
    // const scrollY= React.useRef(new Animated.Value(0)).current;

    return (
      <SafeAreaView style={styles.containerSafe}>
        <ImageBackground
          source={require("../app/assets/back.png")}
          style={StyleSheet.absoluteFillObject}
          blurRadius={25}
          resizeMode="cover"
        />
        <View style={{ flex: 1 }}>
          <AntDesign
            name="back"
            size={34}
            color="#222"
            style={{ alignSelf: "flex-end", paddingRight: "4%" }}
            onPress={() => this.props.navigation.navigate("BusinessOptions")}
          />

          <Picker
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                category: itemValue,
              })
            }
          >
            {options.map((option, itemIndex) => (
              <Picker.Item
                key={itemIndex}
                value={option.value}
                label={option.label}
              ></Picker.Item>
            ))}
          </Picker>
          <View style={styles.container}>
            <Pressable
              style={styles.button}
              onPress={() => this.getList()}
              // color="#000"
              // backgroundColor='#000'
              // borderColor= "#000"
              title="הצג רשימה"
            >
              <Text style={styles.text}>הצג רשימה</Text>
            </Pressable>
          </View>
          {/* <ImageBackground
            source={{uri: IMG}}
            resizeMode="cover"
            style={{StyleSheet.absoluteFillObject}}
          /> */}

          <Animated.FlatList
            // const scrollY = React.useRef(new Animated.value(0)).current;
            data={this.state.emptyList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 100,
              padding: 20,
              paddingTop: StatusBar.currentHeight || 42,
            }}
            // onScroll ={Animated.event (
            //   [{ nativeEvent : {contentOffset:{y:''}}}],
            //   {useNativeDriver:true}

            //   )}
            renderItem={({ item, index }) => {
              return (
                //:שם
                //:כתובת
                //:שפות
                //:טלפון

                <View
                  key={index}
                  style={{
                    flexDirection: "column",
                    padding: 20,
                    marginBottom: 20,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 14,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 20,
                  }}
                >
                  <View style={styles.info}>
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "700",
                        textAlign: "right",
                      }}
                    >
                      שם:
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: "700" }}>
                      {" "}
                      {item.name}{" "}
                    </Text>
                  </View>
                  <View style={styles.info}>
                    <Text
                      style={{ fontSize: 16, opacity: 0.7, textAlign: "right" }}
                    >
                      כתובת:
                    </Text>
                    <Text style={{ fontSize: 18, opacity: 0.7 }}>
                      {" "}
                      {item.address}{" "}
                    </Text>
                  </View>
                  <View style={styles.info}>
                    <Text
                      style={{ fontSize: 16, opacity: 0.8, textAlign: "right" }}
                    >
                      שפות:
                    </Text>
                    <Text
                      style={{ fontSize: 16, opacity: 0.8, textAlign: "right" }}
                    >
                      {" "}
                      {item.languages}
                    </Text>
                  </View>
                  <View style={styles.info}>
                    <Text
                      style={{ fontSize: 16, opacity: 0.8, textAlign: "right" }}
                    >
                      מספר טלפון:
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        opacity: 0.8,
                        color: "#0099cc",
                        textAlign: "right",
                      }}
                    >
                      {" "}
                      {item.phone_number}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "right",
  },
  info: {
    flexDirection: "row-reverse",
    textAlign: "right",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: "60%",
    padding: 10,
    color: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "right",
  },
  list: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    flexDirection: "column",
    textAlign: "right",
    marginBottom: 20,
    backgroundColor: "ffff",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // borderRadius:70,
    // width: 70,
    // height:70,
  },
  backButton: {
    width: 10,
    height: 40,
    resizeMode: "contain",
    // alignSelf:'flex-start',
    // justifyContent:'flex-start',
    //position: 'absolute',
    paddingLeft: 100,
    marginTop: 20,
    marginLeft: "65%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 3,
    marginTop: "10%",
  },
});
export default ReadComponent;
