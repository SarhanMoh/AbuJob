import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StatusBar,
  Animated,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Easing,
  ActivityIndicator,
  View,
  TextInput,
  Text,
  Pressable,
  SafeAreaView,
} from "react-native";
import { dataBase } from "../firebase";
import { Picker } from "@react-native-picker/picker";
import { collection } from "firebase/firestore";

const options = [
  {
    label: "דוח כללי",

    value: "Report",
  },
  {
    label: "דוח טכני",

    value: "technicalReport",
  },

  {
    label: "דוח על מסד",

    value: "businessReport",
  },
];

class ReportsRead extends Component {
  constructor() {
    super();
    //this.ref = dataBase.collection();
    this.state = {
      category: "Report",
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
            onPress={() => this.props.navigation.navigate("ReportsOptions")}
          />
          <Text
            style={{
              alignSelf: "center",
              marginBottom: "-20%",
              paddingTop: "5%",
              fontSize: 24,
              fontWeight: "600",
              textDecorationColor: "black",
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            בחר קטוגוריה
          </Text>
          <Picker
            selectedValue={this.state.category}
            style={{
              width: 300,
              height: 150,
              alignContent: "center",
              alignSelf: "center",
              marginTop: "20%",
            }}
            itemStyle={{ height: 150 }}
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
                      מייל:
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        opacity: 0.7,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      {item.email}{" "}
                    </Text>
                  </View>
                  <View style={styles.info}>
                    <Text
                      style={{ fontSize: 16, opacity: 0.8, textAlign: "right" }}
                    >
                      טלפון:
                    </Text>
                    <Text
                      style={{ fontSize: 16, opacity: 0.8, textAlign: "right" }}
                    >
                      {" "}
                      {item.phone_number}
                    </Text>
                  </View>
                  <View style={styles.info}>
                    <Text
                      style={{ fontSize: 16, opacity: 0.8, textAlign: "right" }}
                    >
                      תיאור הדוח:
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
                      {item.report}
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
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
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
export default ReportsRead;
