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

const SignUpAr = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFN] = useState("");
  // const [lastname, setLS] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const account = user.email;
        navigation.navigate("HomeAr", { account });
      }
    });
    return unsubscribe;
  });

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)

      .then((userCredentials) => {
        // addUser()
        // const user = userCredentials.user;
        // console.log("Registered with:", user.email);
        let db = dataBase.collection("Users");
        db.add({
          email: email,
          address: address,
          fullName: fullName,
          phone: phone,
        })
          .then((res) => {
            setEmail("");
            setAddress("");
            setFN("");
            // setLS("")
            setPassword("");
            setPhone("");

            navigation.navigate("HomeScreenAr", { account });
          })
          .catch((err) => {
            console.error("Error occured: ", err);

            isLoading: false;
          });
      })
      .then((res) => {})
      .catch((error) => {
        //alert(error.message)
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("البريد الالكتروني مستخدم بالفعل", [{ text: "جيد" }]);
            break;
          case "auth/wrong-password":
            alert("غير صحيح", "خطأ في البريد الالكتروني أو كلمة المرور", [
              { text: "جيد" },
            ]);
            break;
          case "auth/user-not-found":
            alert("غير صحيح", "الحساب غير موجود", [{ text: "جيد" }]);
            break;
          default:
            console.log(error);
            alert("غير صحيح", "خطأ في الاتصال", [{ text: "جيد" }]);
            break;
        }
      });
  };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      console.log("email", email);
      // this.setState({ email: text })
      setEmail(text);
      return false;
    } else {
      // this.setState({ email: text })
      setEmail(text);
      console.log("Email is Correct");
      console.log("email", email);
    }
  };
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
              source={require("../assets/good.png")}
            />
            <Text style={[styles.adminText]}>مرحبا بكم في حسن الجوار</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.lable}>الاسم الكامل:</Text>
            <TextInput
              placeholder="الاسم الكامل"
              placeholderTextColor="#899499"
              value={fullName}
              label="Email"
              onChangeText={(text) => setFN(text)}
              style={styles.input}
            />
            {/* <Text style={styles.lable}>שם משפחה:</Text>
              <TextInput
                placeholder="שם משפחה"
                placeholderTextColor="#899499"
                value={lastname}
                onChangeText={(text) => setLS(text)}
                style={styles.input}
              /> */}
            <Text style={styles.lable}>البريد الالكتروني:</Text>
            <TextInput
              placeholder="البريد الالكتروني"
              placeholderTextColor="#899499"
              onChangeText={(text) => validate(text)}
              value={email}
              style={styles.input}
            />
            <Text style={styles.lable}>كلمة المرور:</Text>
            <TextInput
              placeholder="كلمة المرور"
              placeholderTextColor="#899499"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
            <Text style={styles.lable}>العنوان:</Text>
            <TextInput
              placeholder="العنوان"
              placeholderTextColor="#899499"
              value={address}
              onChangeText={(text) => setAddress(text)}
              style={styles.input}
            />
            <Text style={styles.lable}>رقم الهاتف المحمول:</Text>
            <TextInput
              placeholder="رقم الهاتف المحمول"
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
              <Text style={styles.buttonOutLineText}>إنشاء حساب</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              <Text>بالانضمام, فإنك تؤكد موافقتك على</Text>
              <Text
                style={styles.link}
                onPress={() => {
                  Linking.openURL(
                    "https://pages.flycricket.io/abujob-abu-job-b/terms.html"
                  );
                }}
              >
                {" "}
                تعليمات الاستخدام |
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  Linking.openURL(
                    "https://pages.flycricket.io/abujob-abu-job-b/privacy.html"
                  );
                }}
              >
                سياسةالخصوصية{" "}
              </Text>
              <Text textAlign="right">الخاصة بنا</Text>
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("FirstPageAr")}
            >
              <Text style={styles.buttonSignIn}>
                هل لديك حساب؟ تسجيل الدحول
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpAr;

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
    fontSize: 20,
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
  text: {
    alignItems: "center",
    color: "gray",
    marginVertical: 30,
    textAlign: "right",
  },
  link: {
    color: "#AF38EB",
    textAlign: "right",
  },
  buttonSignIn: {
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "right",
  },
  lable: {
    color: "#2885A6",
    textAlign: "right",
    fontSize: 16,
    paddingTop: 5,
    fontWeight: "500",
    // padding:3,
    // paddingTop:3,
  },
});
//#0782f9 blue
