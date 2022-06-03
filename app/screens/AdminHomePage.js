import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Image,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

function AdminHomePage(props) {
  const { onPress, title = "Save" } = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerSafe}>
      <AntDesign
        name="back"
        size={34}
        color="#222"
        style={{ alignSelf: "flex-end", paddingRight: "4%" }}
        onPress={() => navigation.navigate("Home")}
      />

      <View style={styles.screenContainer}>
        <View>
        <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
          <Image
            style={styles.bigLogoStyle}
            source={require("../assets/AbuJobsBigLogo.jpeg")}
          />
        </View>
        {/* <TouchableOpacity style={styles.button1} onPress={onPress}>
            <Text style={styles.text}>משתמשים</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("BusinessOptions")}
        >
          <Text style={styles.text}>עסקים</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("RequestsList")}
        >
          <Text style={styles.text}>בקשות</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("ReportsOptions")}
        >
          <Text style={styles.text}>דיווחים</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
//#68A19B
const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.3 : 0,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    // padding: 16,
    // marginBottom: '40%',
    //marginTop: '20%',
    color: "white",
    paddingBottom: "20%",

    backgroundColor: "#fff",
  },
  bigLogoStyle: {
    resizeMode: "contain",
    width: 300,
    height: 150,
    padding: 50,
    //paddingTop:50,
    justifyContent: "space-evenly",
    //alignItems: 'flex-end',
  },

  button2: {
    backgroundColor: "#2885A6",
    width: "70%",
    justifyContent: "center",
    height: 60,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  button1: {
    backgroundColor: "#A8D173",
    width: "70%",
    justifyContent: "center",
    height: 60,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
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
  },
});

export default AdminHomePage;
