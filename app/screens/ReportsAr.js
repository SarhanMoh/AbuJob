import React, { Component } from "react";
import {
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  View,
  TextInput,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { dataBase } from "../../firebase";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
//import ReportsAr from "../../../../ArPages/Screens/ReportsAr";

const options = [
  {
    label: "تقرير عام",

    value: "Report",
  },
  {
    label: "تقرير تقني",

    value: "technicalReport",
  },

  {
    label: "تقرير قاعدة البيانات",

    value: "businessReport",
  },
];
class ReportsAr extends Component {
  constructor() {
    super();
    // this.ref = dataBase.collection('glory');
    this.state = {
      category: "Report",
      name: "",
      email: "",
      report: "",
      phone_number: "",
      isLoading: false,
    };
  }

  onValUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  addReport() {
    let db = dataBase.collection(this.state.category);
    if (this.state.name === "") {
      alert("يرجى التسجيل هناك");
    } else if (this.state.report === "") {
      alert("يرجى كتابة وصف");
    } else if (this.state.email === "") {
      alert("يرجى تسجيل البريد الإلكتروني");
    } else if (this.state.phone_number === "") {
      alert("يرجى تسجيل رقم هاتف");
    } else if (
      this.state.phone_number.length > 10 ||
      this.state.phone_number.length < 9
    ) {
      alert(" يرجى تسجيل رقم الهاتف الصحيح  ");
    } else {
      this.setState({
        isLoading: true,
      });
      db.add({
        name: this.state.name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        report: this.state.report,
      })
        .then((res) => {
          this.setState({
            name: "",
            phone_number: "",
            email: "",
            report: "",
            isLoading: false,
          });
          this.props.navigation.navigate("HomeScreenAr");
        })
        .catch((err) => {
          console.error("Error Occured: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green" />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.containerBig}>
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
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            paddingBottom: 0,
            padding: 20,
            paddingTop: StatusBar.currentHeight || 42,
          }}
        >
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View>
              <Image
                style={styles.bigLogoStyle}
                source={require("../assets/good.png")}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.textInfo}>تم الإبلاغ عن الاسم</Text>
              <TextInput
                placeholder="تم الإبلاغ عن الاسم<"
                placeholderTextColor="#899499"
                value={this.state.name}
                textAlign="right"
                maxLength={30}
                onChangeText={(val) => this.onValUpdate(val, "name")}
                style={styles.input}
              />
              <Text style={styles.textInfo}>البريد الإلكتروني</Text>
              <TextInput
                placeholder="البريد الإلكتروني"
                placeholderTextColor="#899499"
                value={this.state.email}
                textAlign="right"
                maxLength={30}
                onChangeText={(val) => this.onValUpdate(val, "email")}
                style={styles.input}
              />
              <Text style={styles.textInfo}>رقم الهاتف</Text>
              <TextInput
                placeholder="رقم الهاتف"
                placeholderTextColor="#899499"
                value={this.state.phone_number}
                textAlign="right"
                maxLength={10}
                textAlignVertical="top"
                onChangeText={(val) => this.onValUpdate(val, "phone_number")}
                style={styles.input}
              />
              <Text style={styles.textInfo}>وصف التقرير</Text>
              <TextInput
                placeholder="وصف التقرير"
                placeholderTextColor="#899499"
                multiline={true}
                maxLength={200}
                numberOfLines={5}
                textAlign="right"
                value={this.state.report}
                onChangeText={(val) => this.onValUpdate(val, "report")}
                style={styles.input2}
              />
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.textInfo2}>نوع التقرير</Text>
          <Picker
            selectedValue={this.state.category}
            style ={{width:300, height : 150 ,alignContent:"center",alignSelf:"center" , marginTop:"20%"}}
            itemStyle={{height:150}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({
                category: itemValue,
              })
            }
          >
            {options.map((option, itemIndex) => (
              <Picker.Item
                key={itemIndex}
                value={option.value}
                label={option.label}
                style={{ flexDirection: "column-reverse" }}
              ></Picker.Item>
            ))}
            {/* <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" /> */}
          </Picker>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.addReport()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>إرسال</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerBig: {
    flex: 1,
    // backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#ffff",
    flexDirection: "column",
  },
  scrollView: {
    //backgroundColor: "#ffff",
    // marginHorizontal: 1,
    paddingBottom: 1,
  },
  inputContainer: {
    width: "80%",
    //justifyContent:'flex-end',
    // flexDirection:'row'
    // alignItems: 'flex-end',
    //justifyContent: 'center'
  },
  textInfo: {
    alignContent: "flex-end",
    paddingTop: 2,
    paddingBottom: 2,
    alignSelf: "flex-end",
    fontSize: 16,

    // flexDirection:'column-reverse'
  },
  textInfo2: {
    alignContent: "flex-end",
    paddingTop: 15,
    paddingBottom: 1,
    flex: 1,
    paddingRight: "12%",
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "bold",

    // flexDirection:'column-reverse'
  },
  input: {
    backgroundColor: "#ffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "#2885A6",
    borderWidth: 1,
    //alignSelf:'flex-end'

    // flexDirection:'row-reverse'
  },
  input2: {
    backgroundColor: "#ffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "#2885A6",
    borderWidth: 1,
    height: 100,

    //alignSelf:'flex-end'

    // flexDirection:'row-reverse'
  },
  buttonContainer: {
    //width:'60%',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
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
    fontSize: 25,
    fontWeight: "800",
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
});

export default ReportsAr;
