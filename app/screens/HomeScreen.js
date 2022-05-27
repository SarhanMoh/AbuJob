import { AntDesign } from "@expo/vector-icons";
import React from "react";
import reactDom from "react-dom";
import { dataBase } from '../../firebase';

import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import Component from '../../components/newComponents'

const Options1 = Component.options;
//console.log(Options1);
const options = [
  {
    label: "רכב",

    value: "Cars",

    color: "#6495ED",

    icon: require("../assets/tempIcon.png"),
  },

  {
    label: "שיפוצים",

    value: "Renovations",

    color: "#007fff",

    icon: require("../assets/tempIcon.png"),
  },

  {
    label: "טיפול",

    value: "Treatment",

    color: "dodgerblue",

    icon: require("../assets/tempIcon.png"),
  },

  {
    label: "אמנות ומלאכת יד",

    value: "Arts",

    color: "#6495ED",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "קוסמטיקה",

    value: "cosmetics",

    color: "#007fff",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "תיקונים ומלאכות",

    value: "Repairs",

    color: "dodgerblue",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "חשמלאות",

    value: "Electricians",

    color: "#6495ED",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "הוראה",

    value: "Teaching",

    color: "#007fff",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "מוסיקה",

    value: "Music",

    color: "dodgerblue",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "שירותי מכלות",

    value: "Grocery",

    color: "#6495ED",

    icon: require("../assets/tempIcon.png"),
  },
  {
    label: "טכנאים",

    value: "Technicians",

    color: "#007fff",

    icon: require("../assets/tempIcon.png"),
  },
];
const recently = [
  {
    name: "עמותה ###י",

    key: 100,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "טיפול",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 99,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "רכב",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 98,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "שיפוצים",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 97,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "קןסמטיקה",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 96,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "חשמלאות",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 95,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "קןסמטיקה",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 94,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "טיפול",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 93,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "מוסיקה",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 92,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "מוסיקה",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 91,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "הוראה",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 90,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "חשמלאות",

    city: "ירושלים",
  },
  {
    name: "עמותה ###י",

    key: 89,

    profilePic: require("../assets/profileIcon.png"),

    catagory: "חשמלאות",

    city: "ירושלים",
  },
];
function all(){
  const ref = dataBase
  .collection(this.state.category);
  
}
const SPACING = 8,
  cellWidth = 250,
  cellHeight = 300;
const FULL_SIZE = cellWidth + SPACING * 2;

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [SearchValue, setSearchValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/blurImg.jpg")}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />
      <View>
        <View style={styles.Topper}>
          <View style={styles.searchBar}>
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
              placeholder="Search..."
              placeholderTextColor={"black"}
              value={SearchValue}
              onChangeText={(SearchValue) => setSearchValue(SearchValue)}
              style={{ color: "black", marginLeft: 5 }}
            />
          </View>
          <View style={styles.optButt}>
            <AntDesign
              name="menufold"
              size={34}
              color="#222"
              onPress={() => navigation.navigate("Options")}
            />
          </View>
        </View>
        <View style={{ height: 7 }}></View>
        <FlatList
          data={Options1}
          keyExtractor={(item) => item.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={FULL_SIZE}
          decelerationRate="fast"
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              onPress={()=> {
                const key = item.value
                navigation.navigate('Login', {key})
                
              }}
                style={{
                  width: cellWidth,
                  height: cellHeight,
                  borderRadius: 25,
                  margin: SPACING,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: item.color,
                    borderRadius: 25,
                  }}
                >
                  <Image source={item.icon} style={styles.cataIcon} />
                  <Text style={styles.catagoryTitle}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{ height: 7 }}></View>
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            alignSelf: "center",
            borderRadius: 15,
            backgroundColor: "#81daf5",
            padding: SPACING,
          }}
        >
          הצטרפו לאחרונה
        </Text>
        <FlatList
          data={recently}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            padding: SPACING,
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 100,
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: SPACING,
                  backgroundColor: "rgba(255,255,255,0.8)",
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
                <Image source={item.profilePic} style={styles.profileIcon} />
                <View style={{ flex: 1, right: SPACING, top: SPACING }}>
                  <Text style={styles.mainName}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.subName}>
                      {" "}
                      קטוגוריה: {item.catagory}
                    </Text>
                    <Text style={styles.subName}> עיר: {item.city}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  catagoryTitle: {
    fontWeight: "800",
    fontSize: 22,
    color: "white",
    bottom: SPACING * 2,
    right: SPACING * 2,
    position: "absolute",
  },
  cataIcon: {
    width: cellWidth * 0.7,
    height: cellWidth * 0.7,
    alignSelf: "flex-start",
    resizeMode: "contain",
    position: "absolute",
    top: SPACING * 2,
    left: SPACING * 2,
  },
  Topper: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    height: 30,
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
    marginTop: -10,
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
    margin: 10,
  },

  mainName: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    alignSelf: "flex-end",
  },

  subName: {
    fontSize: 12,
    color: "black",
  },

  menuContainer: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "flex-start",
    paddingTop: 80,
    paddingBottom: 30,
    paddingLeft: 30,
  },

  menu: {
    flex: 1,
    justifyContent: "space-between",
  },

  button: {
    fontSize: 34,
    lineHeight: 34 * 1.5,
  },

  buttonSmall: {
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});
