import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { auth, dataBase } from "../../firebase";
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
import { signOut } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

function AdminHomePageAr(props) {
  const { onPress, title = "Save" } = props;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerSafe}>
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

      <View style={styles.screenContainer}>
        <View>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => {
              auth.signOut();
              // logout
              console.log("logout", auth);
              navigation.navigate("FirstPageAr");
            }}
          >
            <Text style={styles.text3}>تسجيل الخروج</Text>
          </TouchableOpacity>
          <Image
            style={styles.bigLogoStyle}
            source={require("../assets/good.png")}
          />
        </View>
        {/* <TouchableOpacity style={styles.button1} onPress={onPress}>
            <Text style={styles.text}>משתמשים</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("BusinessOptionsAr")}
        >
          <Text style={styles.text}>الأعمال</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("RequestsListAr")}
        >
          <Text style={styles.text}>الطلبات</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("ReportsOptionsAr")}
        >
          <Text style={styles.text}>التقارير</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
//#68A19B
const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
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
  text3: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  button3: {
    backgroundColor: "red",
    width: 100,
    justifyContent: "center",
    height: 30,
    alignItems: "center",
    //paddingVertical: 12,
    //paddingHorizontal: 1,
    borderRadius: 4,
    elevation: 3,
  },
});

export default AdminHomePageAr;
