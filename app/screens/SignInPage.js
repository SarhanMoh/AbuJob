import {
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
// import { useNavigation } from '@react-navigation/native';
import { dataBase } from "../../firebase";
import { useAuth } from "../context/AuthContext";



const SignInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check , setCheck] = useState("");
   //contains user login data
   const [emptyList, setEmptyList] = React.useState([]);
   const [currentUser, setCurrentUser] = useState(null);
   //contains user personal data
   const [dataUser, setdataUser] = useState([]);
 
  useEffect(() => {
    console.log("check 4");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // const q = user
        // ? query(collection(dataBase, "Users"), where("uid", "==", user?.uid))
        // : "";
        // const querySnapshot = q ? await getDocs(q) : "";
        //setdataUser(querySnapshot ? querySnapshot.docs[0]?.data() : []);
        setCurrentUser(user);
        const account = user.email;
        //const data = dataUser;
        navigation.navigate("Home" , {account});
      }
    })
    return ()=> {
      unsubscribe;
    }
  },[]);
  async function getList(emailCheck) {
    console.log("check 3");
    let found =false;
    //console.log("checklmail",emailCheck);
    //console.log("entered");
    const ref = dataBase.collection("Users");
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach((doc) => {
      tmp.push(doc.data().email);
        });
        //console.log(found);
        setEmptyList(tmp);
        //console.log("emailCheck" , emailCheck);
        tmp.forEach((element)=>{
          //console.log(element);
          if(emailCheck.localeCompare(element)==0){
            found = true;
            //console.log(found);
            handleSignIn();
          }
          else {
            console.log("Searching");
          }
        })
        if(found=== false){
          Alert.alert("שגוי", "חשבון לא קיים", [{ text: "בסדר" }]);
        }
        // setEmptyList(tmp);
        // console.log("list",emptyList);
     return emptyList;
  }

  const handleSignIn = () => {
    console.log("check 2");
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
            Alert.alert("שגוי", "מייל או סיסמה לא נכונים", [{ text: "בסדר" }]);
            break;
          case "auth/user-not-found":
            Alert.alert("שגוי", "חשבון לא קיים", [{ text: "בסדר" }]);
            break;
          case "auth/too-many-requests":
              Alert.alert(
                "שגוי",
                "הגישה לחשבון זה הושבתה זמנית עקב ניסיונות התחברות רבים כושלים. אתה יכול לשחזר אותו מיד על ידי איפוס הסיסמה שלך או שאתה יכול לנסות שוב מאוחר יותר",
                [{ text: "בסדר" }]
              );
              break;
          default:
            console.log(error);
            Alert.alert("שגוי", "טעות בתקשורת", [{ text: "בסדר" }]);
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
        <Text style={[styles.adminText]}>ברוכים הבאים לשכונות טובה</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>מייל:</Text>
        <TextInput
          placeholder="מייל"
          placeholderTextColor="#899499"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.lable}>סיסמה:</Text>
        <TextInput
          placeholder="סיסמה"
          placeholderTextColor="#899499"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>

        </TouchableOpacity> */}
        <TouchableOpacity
          style={[styles.button, styles.buttonOutLine]}
          onPress={()=>{
            console.log("check 1");
            getList(email);
          }}
        >
          <Text
            style={styles.buttonOutLineText}
          >
            להתחבר
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text style={styles.buttonSignIn}>שכחת את הסיסמה?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
          <Text style={styles.buttonSignIn}>אין לך חשבון ? להירשם כאן</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInPage;

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
    fontSize: 25,
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
    textAlign:"right",
  },
  lable: {
    color: "#2885A6",
    textAlign: 'right',
    fontSize: 16,
    fontWeight: "bold",

    // padding:3,
    // paddingTop:3,
  },
});
