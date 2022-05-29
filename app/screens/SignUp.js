import {
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";

// import { useNavigation } from '@react-navigation/native';
import { dataBase } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
// import { number } from 'yup';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFS] = useState("");
  const [lastname, setLS] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  });

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
        addUser(user);
      })
      .catch((error) => {
        //alert(error.message)
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("מייל כבר קיים", [{ text: "בסדר" }]);
            break;
          case "auth/wrong-password":
            alert("שגוי", "מייל או סיסמה לא נכונים", [{ text: "בסדר" }]);
            break;
          case "auth/user-not-found":
            alert("שגוי", "חשבון לא קיים", [{ text: "בסדר" }]);
            break;
          default:
            console.log(error);
            alert("שגוי", "טעות בתקשורת", [{ text: "בסדר" }]);
            break;
        }
      });
  };
  async function addUser(user) {
    let db = dataBase.collection("Users");
    db.add({
      email: user.email,
      uid: user.uid,
      First_name: this.state.name,
      Last_Name: this.state.name,
      address: this.state.address,
      languages: this.state.languages,
      phone_number: this.state.phone_number,
    })
      .then((res) => {
        this.setState({
          name: "",
          address: "",
          languages: "",
          phone_number: "",
          isLoading: false,
        });
        this.props.navigation.navigate("SignInPage");
      })
      .catch((err) => {
        console.error("Error occured: ", err);
        this.setState({
          isLoading: false,
        });
      });
  }
  //   const handleLogin = ()=>{
  //     auth
  //       .signInWithEmailAndPassword(email , password)
  //       .then(userCredentials => {
  //         const user = userCredentials.user;
  //         console.log('Logged in with:', user.email);
  //         console.log(dataBase.collection('Admins').doc('first').get());
  //     })
  //       .catch(error =>alert(error.message))
  //   }

  return (
    <SafeAreaView style={styles.containerSafe}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <Image
              style={styles.bigLogoStyle}
              source={require("../assets/AbuJobsBigLogo.jpeg")}
            />
            <Text style={[styles.adminText]}>ברוכים הבאים לשכנות טובה</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.lable}>שם פרטי:</Text>
            <TextInput
              placeholder="שם פרטי"
              placeholderTextColor="#899499"
              value={firstname}
              label="Email"
              onChangeText={(text) => setFS(text)}
              style={styles.input}
            />
            <Text style={styles.lable}>שם משפחה:</Text>
            <TextInput
              placeholder="שם משפחה"
              placeholderTextColor="#899499"
              value={lastname}
              onChangeText={(text) => setLS(text)}
              style={styles.input}
            />
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
            <Text style={styles.lable}>כתובת:</Text>
            <TextInput
              placeholder="כתובת"
              placeholderTextColor="#899499"
              value={address}
              onChangeText={(text) => setAddress(text)}
              style={styles.input}
            />
            <Text style={styles.lable}>מספר טלפון:</Text>
            <TextInput
              placeholder="מספר טלפון"
              placeholderTextColor="#899499"
              value={phone}
              onChangeText={(Number) => setPhone(Number)}
              style={styles.input}
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
              onPress={handleSignUp}
              style={[styles.button, styles.buttonOutLine]}
            >
              <Text style={styles.buttonOutLineText}>להירשם</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              על ידי רישום, אתה מאשר שאתה מסכים
              <Text style={styles.link}> לתנאי השימוש</Text> ו
              <Text style={styles.link}> מדיניות פרטיות</Text>
              <Text> שלנו</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("FirstPage")}>
              <Text style={styles.buttonSignIn}>יש לך חשבון ? להיכנס</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    textAlign: "right",
    borderColor: "#2885A6",
    borderWidth: 1,
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
    backgroundColor: "#2885A6",
    borderWidth: 3,
  },
  buttonOutLineText: {
    color: "white",
    backgroundColor: "#2885A6",
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
  text: {
    alignItems: "center",
    color: "gray",
    marginVertical: 30,
  },
  link: {
    color: "#AF38EB",
  },
  buttonSignIn: {
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  lable: {
    color: "#2885A6",
    // padding:3,
    // paddingTop:3,
  },
});
//#0782f9 blue
