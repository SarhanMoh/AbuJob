import {
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
// import { useNavigation } from '@react-navigation/native';
import { dataBase } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyList, setEmptyList] = React.useState([]);
  const [check , setCheck] = useState("");
  //setCheck("false");
  // const { key } = route.params;
  // console.log(key)

  //const navigation = useNavigation()
  useEffect(() => {
    setCheck("false");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("AdminHomePageAr");
      }
    });
    return unsubscribe;
  });
  async function getList(emailCheck) {
    let found =false;
    console.log("checklmail",emailCheck);
    //console.log("entered");
    const ref = dataBase.collection("Admins");
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach((doc) => {
      tmp.push(doc.data().email);
        });
        console.log(found);
        setEmptyList(tmp);
        console.log("emailCheck" , emailCheck);
        tmp.forEach((element)=>{
          console.log(element);
          if(emailCheck.localeCompare(element)==0){
            found = true;
            console.log(found);
            handleLogin();
          }
          else {
            console.log("Searching");
          }
        })
        if(found=== false){
          Alert.alert("غير صحيح", "الدخول مسموح فقط للمسؤولين", [{ text: "صحيح" }]);
        }

  }

  const handleLogin = () => {
    console.log("empty",emptyList);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged In", user.email);
        setPassword("")
        setEmail("")
        //addUser(user);
      })
      .catch((error) => {
        //alert(error.message)
        switch (error.code) {
          // case "auth/email-already-in-use":
          //   alert("מייל כבר קיים", [{ text: "בסדר" }]);
          //   break;
          case "auth/wrong-password":
            Alert.alert("غير صحيح", "بريد إلكتروني أو كلمة مرور غير صحيحة", [{ text: "صحيح" }]);
            break;
          case "auth/user-not-found":
            Alert.alert("غير صحيح", "الحساب غير موجود", [{ text: "صحيح" }]);
            break;
          case "auth/too-many-requests":
              Alert.alert(
                "غير صحيح",
                "تم تعطيل الوصول إلى هذا الحساب مؤقتًا بسبب العديد من محاولات تسجيل الدخول الفاشلة. يمكنك استعادتها على الفور عن طريق إعادة تعيين كلمة مرورك أو يمكنك المحاولة مرة أخرى لاحقًا",
                [{ text: "صحيح" }]
              );
              break;
          default:
            console.log(error);
            Alert.alert("غير صحيح", "خطأ في الاتصال", [{ text: "صحيح" }]);
            break;
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
        <Text style={[styles.adminText]}>مرحبًا بالمسؤول</Text>
      </View>
      <View style={styles.inputContainer}>
      <Text style = {styles.text}>البريد الالكتروني:</Text>
        <TextInput
          placeholder="البريد الالكتروني"
          placeholderTextColor="#899499"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Text style ={styles.text}>كلمة المرور:</Text>
        <TextInput
          placeholder="كلمة المرور"
          placeholderTextColor="#899499"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={()=>getList(email) }style={styles.button}>
          <Text style={styles.buttonText}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "#2885A6",
    borderWidth: 1,
    textAlign: "right",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  
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
    padding: "20%",
    marginTop: "-20%",
    marginBottom: "-10%",
    fontSize: 28,
    fontWeight: "900",
    color: "#2885A6",
  },
  bigLogoStyle: {
    resizeMode: "contain",
    width: 300,
    height: 150,
    padding: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  text:{
  color: "#2885A6",
    textAlign: 'right',
    fontSize: 16,
    fontWeight: "bold",
  }
});
//#0782f9 blue
