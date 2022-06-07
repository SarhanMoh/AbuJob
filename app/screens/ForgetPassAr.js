

import {
    KeyboardAvoidingView,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  // import CustomButton from  './scr/CustomButton/CustomButton'
  import { auth } from "../../firebase";
  // import { useNavigation } from '@react-navigation/native';
  import { dataBase } from "../../firebase";
  
  const ForgetPassAr = ({ navigation }) => {
    const [email, setEmail] = useState("");
    
    const resetPassword = () => {
      
        auth
        .sendPasswordResetEmail(email)
        .then(()=>{
          alert( "أُرسل لك بريدًا إلكترونيًا");
        })
       .catch ((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert("غير صحيح", "البريد الالكتروني غير صحيح", [{ text: "جيد" }]);
            break;
          case "auth/user-not-found":
            alert("غير صحيح", "لم يتم العثور على المستخدم", [{ text: "جيد" }]);
            break;
          // default:
          //   alert("3שגיאה", "שגיאה בקליתה", [{ text: "جيد" }]);
          //   break;
        }
      });
    };
  
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={require("../assets/back.png")}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
          blurRadius={25}
        />
        <View>
          <Image
            style={styles.bigLogoStyle}
            source={require("../assets/good.png")}
          />
          <Text style={[styles.adminText]}>مرحبا بكم في حسن الجوار</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text1}>ادخل عنوان البريد الإلكتروني</Text>
          <TextInput
            placeholder=" البريد الالكتروني"
            placeholderTextColor="#899499"
            fontSize= "16"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.buttonSignIn}>العودة لتسجيل الدخول</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resetPassword}
            style={[styles.button, styles.buttonOutLine]}
          >
            <Text
              style={styles.buttonOutLineText}
              onPress={() => navigation.navigate("SignIn")}
            >
              للإرسال
            </Text>
          </TouchableOpacity>
          <Text style={styles.text}>
     سنرسل رابطًا إلى عنوان بريدك الإلكتروني لتسجيل الدخول مرة أخرى
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.buttonSignIn}>لا تملك حساب ؟ سجل هنا</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default ForgetPassAr;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffff",
    },
    inputContainer: {
      width: "80%",
    },
    input: {
      backgroundColor: "#ffff",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      height: 45,
      borderColor: "#2885A6",
      borderWidth: 1,
      textAlign: "right",
    },
    buttonContainer: {
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    button: {
      backgroundColor: "#A8D173",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    buttonOutLine: {
      backgroundColor: "white",
      marginTop: 10,
      borderColor: "#2885A6",
      borderWidth: 3,
    },
    buttonOutLineText: {
      color: "#2885A6",
      fontWeight: "700",
      fontSize: 16,
    },
    adminText: {
      padding: 10,
      //  marginTop: '-20%',
      fontSize: 28,
      fontWeight: "800",
      color: "#2885A6",
    },
    bigLogoStyle: {
      resizeMode: "contain",
      width: 300,
      height: 150,
      // padding : 20,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonSignIn: {
      color: "gray",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 20,
      fontWeight: "500",
      padding: 20,
    },
    text: {
      padding: 5,
      color: "#2885A6",
      fontWeight: "900",
      marginVertical: 5,
      textAlign: "right",
    },
    buttonSignIn: {
      color: "gray",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 20,
      fontWeight: "600",
    },
    text1:{
      //padding: 5,
      paddingTop: 15,
      fontSize : 16,
      color: "#2885A6",
      fontWeight: "900",
      marginVertical: 5,
      textAlign: "right",
    }
  });
  