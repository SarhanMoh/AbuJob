import { AntDesign } from "@expo/vector-icons";
import { connectStorageEmulator } from "firebase/storage";
import React from "react";
import reactDom from "react-dom";
import { auth, dataBase } from "../../firebase";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Alert,
  Platform,
  Linking,
  StatusBar,
  Dimensions,
} from "react-native";
import { signOut } from "firebase/auth";
import { routes, colors, links } from "./utils";
const { width, height } = Dimensions.get("screen");

const ButtonNav = ({ onPress, label, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style}>{label}</Text>
    </TouchableOpacity>
  );
};
const logout = async () => {
  await auth.signOut();
  return () => {
    auth.signOut(auth);
  };
};
const CustomDrawer = ({ onPress, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menuContainer}>
        <AntDesign
          name="close"
          size={34}
          color="white"
          onPress={onPress}
          style={{
            position: "absolute",
            top: 40,
            right: 20,
          }}
        />
        <View style={styles.menu}>
          <View>
            {routes.map((route, index) => {
              return (
                <ButtonNav
                  label={route}
                  key={route}
                  onPress={() => {
                    if (index === 0) {
                      navigation.navigate("AboutUs");
                    } else if (index === 1) {
                      navigation.navigate("BusinessReg");
                    } else if (index === 2) {
                      navigation.navigate("SignIn");
                    } else if (index === 3) {
                      logout();
                      console.log("logout", auth);
                      navigation.navigate("Login");
                    } else if (index === 4) {
                      navigation.navigate("Reports", { account });
                    } else if (index === 5) {
                      Alert.alert("כנס לדף הפיסבוק שלנו ! ", "", [
                        { text: "בטל", style: "cancel" },
                        {
                          text: "להיכנס!",
                          onPress: () =>
                            Linking.openURL(
                              "https://www.facebook.com/goodneighborsabutor/"
                            ),
                        },
                      ]);
                    }
                  }}
                  style={[styles.button, { color: colors[index] }]}
                />
              );
            })}
          </View>
          <View>
            {links.map((link, index) => {
              return (
                <ButtonNav
                  label={link}
                  key={link}
                  onPress={() => {
                    if (index === 0) {
                      logout();
                      navigation.navigate("FirstPage");
                    }
                  }}
                  style={[
                    styles.buttonSmall,
                    { color: colors[index + routes.length + 1] },
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default function OptionsDrawer({ navigation, route }) {
  const { account } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#222",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <CustomDrawer
        navigation={navigation}
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "flex-end",
    paddingRight: "10%",
    paddingTop: 80,
    paddingBottom: 30,
  },

  menu: {
    flex: 1,
    justifyContent: "space-between",
  },

  button: {
    fontSize: 34,
    textAlign: "right",
    lineHeight: 34 * 1.5,
  },

  buttonSmall: {
    fontSize: 16,
    textAlign: "right",
    lineHeight: 16 * 1.5,
  },
});
