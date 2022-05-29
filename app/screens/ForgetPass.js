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

const SignInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("AdminHomePage");
      }
    });
    return unsubscribe;
  });

  const handleSignIn = () => {
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
  //  async function addUser(user) {
  //     let db = dataBase.collection("Users");
  //       db.add({
  //         email: user.email,
  //         uid:user.uid,
  //         First_name: this.state.name,
  //         Last_Name: this.state.name,
  //         address: this.state.address,
  //         languages: this.state.languages,
  //         phone_number: this.state.phone_number,
  //       }).then((res) => {
  //         this.setState({
  //           name: '',
  //           address: '',
  //           languages:'',
  //           phone_number:'',
  //           isLoading: false,
  //         });
  //         this.props.navigation.navigate('SignInPage')
  //       })
  //       .catch((err) => {
  //         console.error("Error occured: ", err);
  //         this.setState({
  //           isLoading: false,
  //         });
  //       });

  //   }
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
          source={require("../assets/AbuJobsBigLogo.jpeg")}
        />
        <Text style={[styles.adminText]}>ברוכים הבאים לשכונות טובה</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>הזן כתובת אימייל</Text>
        <TextInput
          placeholder="מייל"
          placeholderTextColor="#899499"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonSignIn}>חזרה כדי להיכנס</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignIn}
          style={[styles.button, styles.buttonOutLine]}
        >
          <Text
            style={styles.buttonOutLineText}
            onPress={() => navigation.goBack()}
          >
            לשלוח
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          אנו נשלח קישור לכתובת האימייל שלך כדי להיכנס שוב
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
  },
  text: {
    padding: 5,
    color: "#2885A6",
    fontWeight: "900",
    marginVertical: 5,
  },
  buttonSignIn: {
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
