import React from "react";
import reactDom from "react-dom";
import { auth, dataBase } from "../../firebase";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

function AboutUs() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerSafe}>
      
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          
        }}
      >
        <AntDesign
          name="back"
          size={34}
          color="#222"
          style={{ right: "40%" }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.screenContainer}>
        <Text style={styles.text}>עמותת שכנות טובה (حسن الجوار)</Text>
        <Image
          style={styles.photo}
          source={require("../assets/abujobPhoto.jpg")}
        />
        <Text style={styles.textA}>
          {" "}
          “שכנות טובה” הוא פרויקט שכנים המבוסס על התנדבות והמפגיש את תושבי אבו
          תור היהודים והפלסטינים החיים לאורך קו התפר בין מערב ומזרח ירושלים.
          הפרויקט כולל יוזמות כגון שעורי עברית/ערבית, קבוצת כדורגל לבנים, פרויקט
          כלכלה מקומית בר-קיימא, פורום נשים, גן קהילתי אורגני ואירועים קהילתיים.
        </Text>
        <Text style={styles.textB}>
          حسن الجوار ”هو مشروع تطوعي يجمع اليهود والفلسطينيين على التطوع والجمع
          بين سكان أبو طور. يشتمل المشروع على مبادرات دولية عبرية / عربية ،
          ومجموعة من الطوب الأبيض ، ومشروع اقتصادي مستدام ، ومنتدى نسائي مجتمعي
          عضوي ، وفعاليات مجتمعية مجتمعية.
        </Text>

        {/* <View style={styles.buttonContainer}>
          {
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Visit our Page", "", [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Open!",
                    onPress: () =>
                      Linking.openURL(
                        "https://www.facebook.com/goodneighborsabutor/"
                      ),
                  },
                ]);
              }}
              style={[styles.button, styles.buttonOutLine]}
            >
              <Text style={styles.buttonOutLineText}>פייסבוק\فيس بوك</Text>
            </TouchableOpacity>
          }
        </View> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.5 : 0,
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    color: "white",
    paddingBottom: "10%",
    height:"80%",
  },
  bigLogoStyle: {
    resizeMode: "contain",
    width: 500,
    height: 100,
    padding: 50,
    //paddingTop:50,
    //   justifyContent: "space-evenly",
    //alignItems: 'flex-end',
  },
  text: {
    // padding: 20,
    //  marginTop: '-20%',
    paddingTop: "-200%",
    // paddingBottom:"10%",
    fontSize: 28,
    fontWeight: "800",
    color: "#2885A6",
    paddingBottom: "10%",
  },
  textA: {
    // flex:1,
    fontWeight: "700",
    fontSize: 17,
    width: "90%",
    // paddingBottom:"5%",
    // alignItems:"center",
    color: "#2885A6",
    justifyContent: "center",
    textAlign: "right",
  },
  photo: {
    resizeMode: "contain",
    width: 700,
    height: 200,
    bottom: 20,
  },
  textB: {
    // flex:1,
    paddingTop: "5%",
    fontWeight: "600",
    fontSize: 17,
    width: "90%",
    // paddingBottom:"10%",
    // borderBottomColor:"blue",
    // borderWidth:"3",
    // alignItems:"center",
    // color: '#C0C0C0',
    color: "#2885A6",
    //  textAlign: 'justify',
    justifyContent: "center",
    // borderColor:"#9873AC",
    textAlign: "right",
    // borderRadius:"50",
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
});
export default AboutUs;
