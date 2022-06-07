import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import SignInPage from "./SignInPage";
import { dataBase } from "../../firebase";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FlashMessage, showMessage } from "react-native-flash-message";

import {
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { options, recently } from "../../components/newComponentsAr";

const SPACING = 8,
  cellWidth = 250,
  cellHeight = 300;
const FULL_SIZE = cellWidth + SPACING * 2;
let messageHasShown = false;
export default function HomeScreenAr({ route, navigation }) {
  // const [category , setCategory] = useState('')
  // let emptyList = []
  // async function getList(){
  //   const ref = dataBase
  //   .collection(this.state.category);
  //   const snapshot = await ref.get();
  //   let tmp = [];
  //   snapshot.forEach(doc => {
  //   //console.log(doc.id, '=>', doc.data());
  //   tmp.push(doc.data());

  //   });
  //   this.setState({
  //     emptyList: tmp,
  //   });
  //   console.log(this.state.emptyList);

  // }
  const { account } = route.params;

  //console.log("accepted ", account);
  //console.log(data);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [SearchValue, setSearchValue] = React.useState("");
  const [RecentlyList, setRecentlyList] = React.useState([]);
  const [searchCategory,setSearchCategory]=React.useState([]);

  async function getSearchValue(SearchValue) {
    console.log(SearchValue);
    messageHasShown = false;
    const ref = dataBase.collection(SearchValue);
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach((doc) => {
      tmp.push(doc.data());
      console.log(tmp);
      setSearchQuery(tmp);
    });
  }

  //--------------------------Recently code---------------------------------
  async function getList(sorting = "alphabet") {
    //console.log("entered");
    const ref = dataBase.collection("All");
    const snapshot = await ref.get();
    let tmp = [];
    let counter = 0;
    snapshot.forEach((doc) => {
      //console.log(doc.id, '=>', doc.data());
      if (counter < 13) {
        tmp.push(doc.data());
        counter++;
      }
    });
    setRecentlyList(tmp);
    //console.log(tmp);
  }
  useEffect(() => {
    getList();
  }, []);

  //------------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/back.png")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        blurRadius={25}
      />
      <View>
        <View style={styles.Topper}>
          <View style={styles.searchBar}>
            <TouchableHighlight
              style={styles.searchIcon}
              onPress={() => {
                getSearchValue(SearchValue);
                console.log(searchQuery);
              }}
            >
              <Image
                style={styles.searchImg}
                source={require("../assets/searchIcon.png")}
              />
            </TouchableHighlight>
            <TextInput
              placeholder="البحث عن ..."
              placeholderTextColor={"black"}
              value={SearchValue}
              onChangeText={(SearchValue)=>{
                let tmp = searchCategory.filter((a)=>a.name.includes(SearchValue));
                  setSearchValue(SearchValue);
                  if (messageHasShown === false) {
                    showMessage({
                      position: "center",
                      duration: 3000,
                      message: "الرجاء تحديد فئة قبل البحث!",
                      type: "defualt",
                      titleStyle: { fontWeight: "800", fontSize: 16 },
                    });
                    messageHasShown = true;
                  }
                }}
                style={{
                  color: "black",
                  fontSize: 16,
                  marginRight: 5,
                  width: "55%",
                  textAlign: "right",
                }}
            />
            <SelectDropdown
              data={options}
              onSelect={(selectedItem) => {
                searchCategory = selectedItem.value;
              }}
              defaultValueByIndex={0}
              buttonTextStyle={{ color: "white" }}
              buttonStyle={{
                backgroundColor: "rgba(64, 64, 64, 1)",
                borderRadius: 30,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderWidth: 0.5,
                width: "30%",
                height: "100%",
              }}
              buttonTextAfterSelection={(selectedItem) => {
                return selectedItem.label;
              }}
              dropdownStyle={{ width: "40%" }}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"white"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"left"}
              rowTextForSelection={(item, index) => {
                return item.label;
              }}
            />
          </View>
          <View style={styles.optButt}>
            <AntDesign
              name="menufold"
              size={34}
              color="#222"
              onPress={() => navigation.navigate("OptionsAr", { account })}
            />
          </View>
        </View>
        <View style={{ height: 7 }}></View>
        <FlatList
          data={options}
          keyExtractor={(item) => item.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={FULL_SIZE}
          decelerationRate="fast"
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  const label = item.label;
                  const key = item.value;
                  const iconPic = item.icon;
                  navigation.navigate("CategoryAr", {
                    label,
                    key,
                    account,
                    iconPic,
                  });
                }}
                style={{
                  width: cellWidth,
                  height: cellHeight,
                  borderRadius: 25,
                  margin: SPACING,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: item.color,
                    borderRadius: 25,
                  }}
                >
                  <Image source={item.icon} style={styles.cataIcon} />
                  <Text style={styles.catagoryTitle}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={{ height: 40, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AllCategoryPageAr", { account })}
            style={{
              backgroundColor: "rgba(220,220,220, 0.9)",
              width: "95%",
              height: "80%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "800", color: "black" }}>
            عرض كل الفئات
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            alignSelf: "center",
            borderRadius: 15,
            backgroundColor: "#81daf5",
            padding: SPACING,
          }}
        >
          انضم مؤخرًا
        </Text>
        {RecentlyList.length > 0 ? (
          <FlatList
            data={RecentlyList}
            keyExtractor={(item) => `${item.phone_number}`}
            contentContainerStyle={{
              padding: SPACING,
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 100,
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: SPACING,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 16,
                    shadowColor: "black",
                    shadowOpacity: 0.15,
                    shadowOffset: { width: 2, height: 2 },
                    elevation: 50,
                    shadowRadius: 10,
                  }}
                >
                  <Image
                    source={require("../assets/profileIcon.png")}
                    style={styles.profileIcon}
                  />
                  <View style={{ flex: 1, right: SPACING, top: SPACING }}>
                    <Text style={styles.mainName}>{item.name}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.subName}>
                        {" "}
                        الفئة: {item.categoryAll}
                      </Text>
                      <Text style={styles.subName}> المدينة: {item.city}</Text>
                    </View>
                    <View style={{ height: "10%" }}></View>
                    <View style={{ alignItems: "center", maxWidth: "80%" }}>
                      <Text style={styles.subName}>العمل: {item.job}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View style={{ alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  catagoryTitle: {
    fontWeight: "800",
    fontSize: 22,
    color: "white",
    bottom: SPACING * 2,
    right: SPACING * 2,
    position: "absolute",
  },
  cataIcon: {
    width: cellWidth * 0.65,
    height: cellWidth * 0.65,
    alignSelf: "flex-start",
    justifyContent: "center",
    top: SPACING * 2,
    left: SPACING * 1,
  },
  Topper: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    width: "80%",
    height: 40,
    flexDirection: "row",
    backgroundColor: "#81daf5",
    borderRadius: 30,
  },

  searchIcon: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#81daf5",
    borderRadius: 50,
    alignSelf: "flex-start",
    marginTop: -5,
  },
  searchImg: {
    width: 47,
    height: 47,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  optButt: {
    width: 35,
    height: 35,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 30,
    borderColor: "gray",
    borderWidth: 2,
    margin: 10,
  },

  mainName: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    alignSelf: "flex-end",
  },

  subName: {
    fontSize: 12,
    color: "black",
  },

  menuContainer: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "flex-start",
    paddingTop: 80,
    paddingBottom: 30,
    paddingLeft: 30,
  },

  menu: {
    flex: 1,
    justifyContent: "space-between",
  },

  button: {
    fontSize: 34,
    lineHeight: 34 * 1.5,
  },

  buttonSmall: {
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});
