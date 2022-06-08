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
  cellWidth = 250,
  cellHeight = 300;
const FULL_SIZE = cellWidth + SPACING * 2;

export default function SearchList({ route, navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [SearchValue, setSearchValue] = React.useState("");
  const [emptyList, setEmptyList] = React.useState([]);

  const { listData, account,} = route.params;
  console.log("accepted2", account);
  console.log("list",listData);

//   async function getList(sorting = "alphabet") {
//     //console.log("entered");
//     const ref = dataBase.collection(key);
//     const snapshot = await ref.get();
//     let tmp = [];
//     snapshot.forEach((doc) => {
//       //console.log(doc.id, '=>', doc.data());
//       tmp.push({id_id: doc.id, ...doc.data()});
//     });
//     setEmptyList(
//       tmp.sort(function (a, b) {
//         if (sorting === "alphabet") {
//           return a.name.localeCompare(b.name);
//         } else if (sorting === "rating") {
//           return b.rate - a.rate;
//         } else {
//           return b.rate - a.rate;
//         }
//       })
//     );
//     //console.log(tmp);
//   }
//   useEffect(() => {
//     getList();
//   }, []);
  //console.log(emptyList);
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
          {/* <View style={styles.searchBar}>
            <TouchableHighlight
              style={styles.searchIcon}
              onPress={() => console.log("Search for " + SearchValue)}
            >
              <Image
                style={styles.searchImg}
                source={require("../assets/searchIcon.png")}
              />
            </TouchableHighlight>
            <TextInput
              placeholder="חפש את ..."
              placeholderTextColor={"black"}
              value={SearchValue}
              onChangeText={(SearchValue) => setSearchValue(SearchValue)}
              style={{
                color: "black",
                marginLeft: 5,
                fontSize: 16,
                width: "80%",
                textAlign: "right",
              }}
            />
          </View> */}
          <View style={styles.optButt}>
            <AntDesign
              name="back"
              size={34}
              color="#222"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View style={{ height: 10 }} />
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
            <View></View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "700",
              }}
            >
              {/* קטוגוריה: {label} */}
            </Text>
          </View>
          <View style={{ height: 1, backgroundColor: "#81daf5" }}></View>
        </View>
      </View>
      {emptyList.length > 0 ? (
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
                    const pic = item.profilePic;
                    // const category = label;
                    const address = item.address;
                    const phone = item.phone_number;
                    const rate = item.rate;
                    const job = item.job;
                    const id = item;
                    const id_pure = item.id_id;
                    console.log('keykey',id);
                    console.log("dsd",id_pure);
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
                    //   ,key
                      id,
                      id_pure,
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
    height: "11%",
    justifyContent: "flex-start",
  },
  Topper: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    height: 40,
    flexDirection: "row",
    backgroundColor: "#81daf5",
    borderRadius: 30,
  },

  searchIcon: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#81daf5",
    borderRadius: 50,
    alignSelf: "flex-start",
    marginTop: -5,
  },
  searchImg: {
    width: 47,
    height: 47,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  optButt: {
    width: 35,
    height: 35,
    borderRadius: 30,
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
