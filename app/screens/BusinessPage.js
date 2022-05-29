import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
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
  Linking,
  ImageBackground,
} from "react-native";

const SPACING = 8,
  cellWidth = 250,
  cellHeight = 300;
const FULL_SIZE = cellWidth + SPACING * 2;

const cSection = [
  { Comment: "הערה כאן" },
  { Comment: "הערה כאן" },
  { Comment: "הערה כאן" },
  { Comment: "הערה כאן" },
  { Comment: "הערה כאן" },
  { Comment: "הערה כאן" },
  { Comment: "הערה כאן" },
];

const dialCall = (number) => {
  let phoneNumber = "";
  if (Platform.OS === "android") {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }
  Linking.openURL(phoneNumber);
};

export default function BusinessPage({ route, navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [SearchValue, setSearchValue] = React.useState("");
  const { name, city, pic, category, address, phone, rate, job } = route.params;
  function checkLogin() {}
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
              name="back"
              size={34}
              color="#222"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "flex-start" }}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "95%",
            height: "26%",
            flexDirection: "row",
            borderRadius: 50,
            borderBottomLeftRadius: 0,
            shadowColor: "black",
            shadowOpacity: 1,
            shadowOffset: { width: 2, height: 2 },
            elevation: 50,
            alignSelf: "center",
          }}
        >
          <Image source={pic} style={styles.profileIcon} />
          <View
            style={{
              flex: 1,
              right: SPACING,
              top: SPACING,
              alignItems: "center",
            }}
          >
            <Text style={styles.mainName}>{name}</Text>
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Text style={styles.subName}> עיר: {city}</Text>
              <Text style={styles.subName}> קטוגוריה: {category}</Text>
              <Text style={styles.subName}> כתובת: {address}</Text>
              <TouchableOpacity
                style={{ borderColor: "black", borderBottomWidth: 1 }}
                onPress={() => dialCall(phone)}
              >
                <Text style={styles.subName}> תלפון: {phone}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            top: SPACING,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "15%",
          }}
        >
          <View
            style={{
              height: cellHeight * 0.3,
              width: "50%",
              borderWidth: 1,
              borderColor: "rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: 30,
              margin: SPACING * 2,
            }}
          >
            <AirbnbRating
              count={5}
              reviews={["Very Bad", "Bad", "OK", "Good", "Very Good"]}
              defaultRating={rate}
              size={25}
              isDisabled={true}
            />
          </View>
          <TouchableOpacity
            style={styles.rateButton}
            onPress={() => checkLogin()}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                alignSelf: "center",
              }}
            >
              Rate
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                alignSelf: "flex-end",
                right: 10,
              }}
            >
              Us!
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: "blue",
              fontSize: 25,
              fontWeight: "700",
              alignSelf: "flex-end",
              right: SPACING,
            }}
          >
            תיאור עלינו:
          </Text>
          <View style={styles.Description}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                alignSelf: "flex-end",
                margin: SPACING,
              }}
            >
              {job}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: "blue",
              fontSize: 25,
              fontWeight: "700",
              alignSelf: "flex-end",
              right: SPACING,
            }}
          >
            הערות:
          </Text>
          <FlatList
            data={cSection}
            height={140}
            width={"90%"}
            backgroundColor={"rgba(255, 255, 255, 0.6)"}
            borderColor={"blue"}
            borderWidth={0.5}
            borderRadius={30}
            alignSelf={"center"}
            scrollIndicatorInsets={false}
            contentContainerStyle={{
              padding: SPACING,
            }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    height: 50,
                    width: "90%",
                    backgroundColor: "#81daf5",
                    alignSelf: "center",
                    borderRadius: 30,
                    margin: SPACING,
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={{ color: "black", right: SPACING, fontSize: 18 }}
                  >
                    {item.Comment}
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginRight: SPACING * 2,
            marginTop: SPACING,
          }}
        >
          <View style={{ margin: SPACING * 0.5, flexDirection: "row-reverse" }}>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              תאריך הצטרפות :
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              {" Date Here"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Reports")}
            style={{ margin: SPACING * 0.5 }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
                borderColor: "red",
                borderWidth: 0.8,
                borderRadius: 15,
                padding: 3,
              }}
            >
              להגיש תלונה
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    height: "8%",
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
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 90,
    borderColor: "gray",
    borderWidth: 2,
    backgroundColor: "#b8e2f2",
    margin: 15,
  },
  mainName: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
    paddingTop: SPACING,
  },

  subName: {
    fontSize: 18,
    color: "white",
    alignSelf: "flex-end",
  },
  rateButton: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "rgba(50, 255, 30, 0.7)",
    justifyContent: "center",
  },
  Description: {
    width: "90%",
    height: 100,
    borderWidth: 2,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderColor: "blue",
    alignSelf: "center",
  },
});
