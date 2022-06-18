import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { AirbnbRating } from "react-native-ratings";
import { dataBase } from "../../firebase";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
import { options, recently } from "../../components/newComponents";

const SPACING = 8,
  cellWidth = 250;

export default function SearchList({ route, navigation }) {
  const iconPic = require("../assets/searchIcon.png");
  const { ListJob: listJob, account: account } = route.params;
  const [emptyList, setEmptyList] = React.useState([]);


  async function getList(sorting = "alphabet") {
    //console.log("entered");

    let tmp = [];
    listJob.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      tmp.push({ id_id: doc.id, ...doc });
    });
    console.log(tmp);
    setEmptyList(
      tmp.sort(function (a, b) {
        if (sorting === "alphabet") {
          return a.name.localeCompare(b.name);
        } else if (sorting === "rating") {
          return b.rate - a.rate;
        } else {
          return b.rate - a.rate;
        }
      })
    );
    //console.log(tmp);
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <View style={styles.Header}>
        <View style={styles.Topper}>
          <View style={styles.optButt}>
            <AntDesign
              name="back"
              size={34}
              color="#222"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View style={{}} />
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <SelectDropdown
              data={["א'ב", "דרוג"]}
              onSelect={(selectedItem) => {
                if (selectedItem == "א'ב") {
                  getList("alphabet");
                } else if (selectedItem == "דרוג") {
                  getList("rating");
                }
              }}
              defaultValueByIndex={0}
              buttonStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: 30,
                borderWidth: 0.5,
                width: "30%",
                height: "98%",
              }}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"left"}
            />
            <View width={"40%"}></View>
          </View>
          <View style={{ height: 1, backgroundColor: "#81daf5" }}></View>
        </View>
      </View>
      {listJob.length > 0 ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={emptyList}
            keyExtractor={(item) => `${item.phone_number}`}
            contentContainerStyle={{
              padding: SPACING,
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    const name = item.name;
                    const city = item.city;
                    const pic = require("../assets/searchIcon.png");
                    const category = item.category;
                    const address = item.address;
                    const phone = item.phone_number;
                    const rate = item.rate;
                    const job = item.job;
                    const id = item.id_id;
                    const id_pure = item.id_id;
                    const date = item.date;
                    const key = item.category;
                  
                    navigation.navigate("BusinessPage", {
                      name,
                      city,
                      pic,
                      category,
                      address,
                      phone,
                      rate,
                      job,
                      account,
                      key,
                      id,
                      id_pure,
                      date,
                      
                    });
                  }}
                  style={{
                    height: 100,
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: SPACING,
                    backgroundColor: "rgba(0, 150, 255, 0.6)",
                    borderRadius: 16,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0,
                    shadowRadius: 20,
                  }}
                >
                  <Image source={iconPic} style={styles.profileIcon} />
                  <AirbnbRating
                    defaultRating={item.rate}
                    showRating={false}
                    ratingCount={5}
                    size={20}
                    isDisabled={true}
                    ratingContainerStyle={{
                      justifyContent: "flex-end",
                      paddingBottom: SPACING,
                    }}
                  />
                  <View style={{ flex: 1, right: SPACING, top: SPACING }}>
                    <Text style={styles.mainName}>{item.name}</Text>
                    <View
                      style={{
                        flexDirection: "row-reverse",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.subName}> עיר: {item.city}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
  Header: {
    height: "7%",
    justifyContent: "flex-start",
  },
  Topper: {
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  optButt: {
    width: 35,
    height: 35,
    borderRadius: 30,
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 2,
    backgroundColor: "white",
    margin: 10,
  },
  mainName: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    alignSelf: "flex-end",
  },

  subName: {
    fontSize: 15,
    color: "black",
  },
});
