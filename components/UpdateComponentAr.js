import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { dataBase } from "../firebase";
import { Picker } from "@react-native-picker/picker";
import { collection, deleteDoc } from "firebase/firestore";
import { FlatList } from "react-native";
import { list } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
//import UpdateComponentAr from "../../../ArPages/components/UpdateComponentAr";

const options = [
  
  {
    label: "خدمات السيارات",
    
    value: "CarsAr",
  },
  
  {
    label: "المطاعم",

    value: "CateringAr",
  },
  {
    label: "الترميمات وصيانة البيت",

    value: "RenovationsAr",
  },

  {
    label: "علاج",

    value: "TreatmentAr",
  },

  {
    label: "الفنون و الحرف اليدوية",

    value: "ArtsAr",
  },
  {
    label: "مستحضرات التجميل",

    value: "cosmeticsAr",
  },
  {
    label: "التصليحات والحرف",

    value: "RepairsAr",
  },
  {
    label: "كهربائيات",

    value: "ElectriciansAr",
  },
  {
    label: "تعليم",

    value: "TeachingAr",
  },

  {
    label: "موسيقى",

    value: "MusicAr",
  },

  {
    label: "خدمات البقالة",

    value: "GroceryAr",
  },

  {
    label: "فنين",

    value: "TechniciansAr",
  },

  {
    label: "اللياقة البدنية واليوجا",

    value: "FitnessAr",
  },

  {
    label: "مختلف",

    value: "VariousAr",
  },
  {
    label: "שירותי רכב",

    value: "Cars",
  },
  {
    label: "קייטרינג",

    value: "Catering",
  },
  {
    label: "שיפוצים",

    value: "Renovations",
  },
  {
    label: "טיפול",

    value: "Treatment",
  },
  {
    label: "אמנות ומלאכת יד",

    value: "Arts",
  },
  {
    label: "קוסמטיקה",

    value: "cosmetics",
  },
  {
    label: "תיקונים ומלאכות",

    value: "Repairs",
  },
  {
    label: "חשמלאות",

    value: "Electricians",
  },
  {
    label: "הוראה",

    value: "Teaching",
  },
  {
    label: "מוסיקה",

    value: "Music",
  },
  {
    label: "שירותי מכלות",

    value: "Grocery",
  },
  {
    label: "טכנאים",

    value: "Technicians",
  },
  {
    label: "כושר ואימון פיזי",

    value: "Fitness",
  },
  {
    label: "שונות",

    value: "Various",
  },
  {
    label: "כולם בעברית",

    value: "AllHe",
  },
  {
    label: "الجميع بالعربي",

    value: "All",
  },
];
class UpdateComponentAr extends Component {
  constructor({ navigation }) {
    super();
    //this.ref = dataBase.collection();
    this.state = {
      category: "CarsAr",
      isLoading: false,
      emptyList: [],
    };
  }
  handlerPress(item) {
    Alert.alert("حذف النشاط التجاري", "هل أنت متأكد أنك تريد حذف النشاط التجاري؟", [
      { text: "نعم", onPress: () => this.deleteItem(item) },
      { text: "إلغاء", style: "إلغاء" },
    ]);
  }
  async getList() {
    const ref = dataBase.collection(this.state.category);
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      tmp.push({ id: doc.id, ...doc.data() });
    });
    this.setState({
      emptyList: tmp,
    });
    console.log(this.state.emptyList);
  }
  
  async deleteItem(item) {
    var docRef = dataBase.collection(this.state.category).doc(item.id);

    await docRef
      .delete()
      .then(() => this.getList())
      .catch(() => console.log("bad"));
  }
  render() {
    return (
      <SafeAreaView style={styles.containerSafe}>
        <ImageBackground
          source={require("../app/assets/back.png")}
          style={StyleSheet.absoluteFillObject}
          blurRadius={50}
          resizeMode="cover"
        />
        <View style={{ flex: 1 }}>
          <AntDesign
            name="back"
            size={34}
            color="#222"
            style={{ alignSelf: "flex-end", paddingRight: "4%" }}
            onPress={() => this.props.navigation.navigate("BusinessOptionsAr")}
          />
          <Text
            style={{
              alignSelf: "center",
              marginBottom: "-15%",
              paddingTop: "5%",
              fontSize: 24,
              fontWeight: "600",
              textDecorationColor: "black",
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            اختر فئة
          </Text>
          <Picker
            selectedValue={this.state.category}
            style={{
              width: 300,
              height: 150,
              alignContent: "center",
              alignSelf: "center",
              marginTop: "20%",
            }}
            itemStyle={{ height: 150 }}
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
              ></Picker.Item>
            ))}
          </Picker>
          <View style={styles.container}>
            <Pressable
              style={styles.button2}
              onPress={() => this.getList()}
              title="عرض القائمة"
            >
              <Text style={styles.text}>عرض القائمة</Text>
            </Pressable>
          </View>
          <FlatList
            data={this.state.emptyList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            
            renderItem={({ item, index }) => {
              return (
                <View key={index} style={styles.list}>
                  <View style={styles.dataList}>
                    <Text style={styles.keys}>الاسم :{item.name} </Text>
                    <Text style={styles.keys}>العمل :{item.job} </Text>
                    <Text style={styles.keys}>العنوان:{item.address} </Text>
                    <Text style={styles.keys}>اللغات:{item.languages}</Text>
                    <Text style={styles.keys}>رقم الهاتف :{item.phone_number}</Text>
                    <Text style={styles.keys}>المحتوى :{item.description}</Text>
                    <Text style={styles.keys}>التقييم :{item.rating}</Text>
                  </View>

                  <View>
                    <Pressable
                      style={styles.button3}
                      onPress={() => this.handlerPress(item)}
                      title="حذف"
                    >
                      <Text style={styles.text3}>حذف</Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    //textAlign: "right",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "black",
  },
  button3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    color: "black",
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
    //paddingLeft: 30,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 4,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: "60%",
    padding: 10,
    color: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "right",
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "right",
  },
  text3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
  list: {
    flex: 1,
    //backgroundColor: '#ffff',
    padding: 25,
    marginVertical: 5,
    //marginLeft:10,
    marginHorizontal: 5,
    //paddingBottom: 50,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    borderColor: "black",
    borderWidth: 1,
    //textAlign: "right",
  },
  dataList: {
    textAlign: "right",
    flexDirection: "column",
    marginRight: "10%",
  },
  delete: {
    width: 45,
    height: 45,
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
    marginTop: "10%",
  },
  keys: {
    textAlign: "right",
    alignItems: "flex-end",
    paddingLeft: "30%",
    fontSize: 16,
    paddingVertical: 5,
  },
});
export default UpdateComponentAr;
