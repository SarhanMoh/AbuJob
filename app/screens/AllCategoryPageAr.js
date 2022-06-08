import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import SignInPage from "./SignInPage";
import { dataBase } from "../../firebase";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import { options, recently } from "../../components/newComponentsAr";
import { State } from "react-native-gesture-handler";
import { isLoaded, isLoading } from "expo-font";

const SPACING = 8,
  cellWidth = 250,
  cellHeight = 300;
const FULL_SIZE = cellWidth + SPACING * 2;

export default function AllCategoryPageAr({ route, navigation }) {
  const { account } = route.params;

  return isLoaded ? (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <View style={styles.Topper}>
        <View style={{ width: "25%" }}></View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "700",
          }}
        >
          جميع الفئات:
        </Text>
        <View style={{ width: "15%" }}></View>
        <AntDesign
          name="back"
          size={34}
          color="#222"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ height: 1, backgroundColor: "#81daf5" }}></View>
      <View style={{ height: 7 }}></View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={options}
          numColumns={2}
          paddingLeft={SPACING}
          keyExtractor={(item) => item.value}
          showsVerticalScrollIndicator={false}
          snapToInterval={FULL_SIZE}
          decelerationRate="fast"
          style={{}}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  const label = item.label;
                  const key = item.value;
                  const iconPic = item.icon;
                  navigation.navigate("CategoryAr", {
                    label,
                    key,
                    account,
                    iconPic,
                  });
                }}
                style={{
                  width: "45%",
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
      </View>
    </SafeAreaView>
  ) : (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  catagoryTitle: {
    fontWeight: "800",
    fontSize: 23,
    maxWidth: "90%",
    color: "white",
    textAlign: "right",
    bottom: SPACING * 2,
    right: SPACING * 1.5,
    padding: SPACING,
    alignSelf: "flex-end",
    position: "absolute",
  },
  cataIcon: {
    width: cellWidth * 0.5,
    height: cellWidth * 0.5,
    alignSelf: "flex-start",
    justifyContent: "center",
    top: SPACING * 2,
    left: SPACING * 1,
  },
  Topper: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
});
