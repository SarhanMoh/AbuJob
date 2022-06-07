import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  StatusBar,
  Alert,
  text,
  Modal,
  TouchableOpacity,
} from "react-native";
import CustomButton from "./scr/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { auth, dataBase } from "../../firebase";

//import Logo from './assets/AbuJobsLogo.jpeg'
const FirstPageAr = () => {
  const [modalOpen , setModalOpen] = useState(false);
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const guest = "guest";
  const pressHandler = () => {
    Alert.alert("اللغة/שפה", "", [
      { text: "עברית", onPress: () => console.log("שפה עברית") },
      { text: "العربية", onPress: () => console.log("اللغة العربية") },
    ]);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() =>setModalOpen(true)}>
            {/* <Text style={styles.lanButton} > Ar/He </Text> */}
            <Image
              resizeMode="contain"
              source={require("../assets/lang.png")}
              style={styles.lanButton}
            />
            <Modal
            transparent={true}
            visible={modalOpen}
            >
            <View style={{backgroundColor:"#000000aa",flex:1}}>
                <View style={{backgroundColor:"white",margin:50,padding:40,borderRadius:10,}}>
                <View style={styles.optButt}>
                <AntDesign
              name="close"
              size={34}
              color="#222"
              onPress={() =>setModalOpen(false) }
            />
                </View>
                <View style={styles.modalContainer}>
                <Text style={styles.tranText}>أختار لغة | בחר שפה</Text>
                <View style={styles.buttonsCont}>
                <TouchableOpacity style={styles.buttonLan}
                onPress={()=> {navigation.navigate("FirstPageAr"), setModalOpen(false),auth.signOut();}}>
                <Text style={styles.textlan}>اللغة العربية</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonLan2}
                 onPress={()=> {navigation.navigate("FirstPage")
                 ,setModalOpen(false) ,auth.signOut();}}>
                <Text style={styles.textlan}>שפה עברית</Text>
                </TouchableOpacity>
                </View>
                </View>
                
                </View>
            </View>
            </Modal>
          </TouchableOpacity>
        </View>
        <View style={styles.root}>
          {
            <Image
              source={require("../assets/good.png")}
              style={[styles.logo, { height: height * 0.1 }]}
            />
          }
          <CustomButton
            text="تسجيل دخول"
            onPress={() => navigation.navigate("SignInAr")}
            type="PRIMARY"
          />
          <CustomButton
            text="الدخول كضيف"
            onPress={() => navigation.navigate("HomeAr", { guest })}
            type="PRIMARY"
          />
          <Text style={styles.text}> لا يوجد لديك حساب ؟ انضم الأن </Text>
          <CustomButton
            text="التسجيل"
            onPress={() => navigation.navigate("SignUpAr")}
            type="C"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
  },
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    paddingTop: 200,
    resizeMode: "contain",
    width: "100%",
    maxWidth: 600,
    maxHeight: 600,
  },
  buttonLan:{
    padding:10,
    borderRadius:5,
    borderWidth:1,
    marginRight:"10%",
    marginTop:"10%",
    backgroundColor:"red",
    color:"white",
  },
  modalContainer:{
    alignSelf:"center",
    
  },
  buttonsCont:{
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
    alignSelf:"center",
    justifyContent:"center",
    //  padding:10,
    // margin:10,
    //marginBottom:"5%"
  },
  optButt: {
    width: 35,
    height: 35,
    borderRadius: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonLan2:{
    padding:10,
    borderRadius:5,
    borderWidth:1,
    marginTop:"10%",
    backgroundColor:"blue",
    
  },
  text: {
    paddingTop: 30,
    fontWeight: "bold",
    color: "gray",
  },
  tranText:{
    fontSize:24,
    fontWeight:"600",
  },
  textlan:{
    color:"white",
    fontSize:16,
    fontWeight:"600",
    alignItems:"center",
    alignContent:"center",
    alignSelf:"center",
    justifyContent:"center",
  },
  lanButton: {
    // borderColor :"black",
    // borderWidth : 2,
    // fontSize: 16,
    marginTop: 20,
    alignItems: "flex-start",
    width: "15%",
    height: 40,
    justifyContent: "center",
    marginLeft: "2%",
    // backgroundColor: "black"
    //justifyContent: 'flex-start',
  },
});
export default FirstPageAr;
