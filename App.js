import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import AdminHomePage from "./app/screens/AdminHomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateComponent from "./components/CreateComponent";
import ReadComponent from "./components/ReadComponent";
import ReportsRead from "./components/ReportsRead";
import UpdateComponent from "./components/UpdateComponent";
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import BusinessRegister from "./app/screens/BusinessRegister";
import RequestsList from "./components/RequestsList";
import BusinessOptions from "./app/screens/BusinessOptions";
import ReportsOptions from "./app/screens/ReportsOptions";
import OptionsDrawer from "./app/screens/OptionsDrawer";
import SignUp from "./app/screens/SignUp";
import FirstPage from "./app/screens/FirstPage";
import ForgetPass from "./app/screens/ForgetPass";
import SignInPage from "./app/screens/SignInPage";
import CategoryPage from "./app/screens/CategoryPage";
import BusinessPage from "./app/screens/BusinessPage";
import AuthContext, { useAuth } from "./app/context/AuthContext";
import Reports from "./app/screens/Reports";
import RatingPage from "./app/screens/RatingPage";
import BusinessList from "./app/screens/BusinessList";
import AllCategoryPage from "./app/screens/AllCategoryPage";
import FlashMessage from "react-native-flash-message";
const Stack = createNativeStackNavigator();
import FirstPageAr from "./app/screens/FirstPageAr";
import SignInPageAr from "./app/screens/SignInPageAr";
import SignUpAr from "./app/screens/SignUpAr";
import AdminHomePageAr from "./app/screens/AdminHomePageAr";
import BusinessOptionsAr from "./app/screens/BusinessOptionsAr";
import BusinessPageAr from "./app/screens/BusinessPageAr";
import BusinessRegisterAr from "./app/screens/BusinessRegisterAr";
import CategoryPageAr from "./app/screens/CategoryPageAr";
import ForgetPassAr from "./app/screens/ForgetPassAr";
import HomeScreenAr from "./app/screens/HomeScreenAr";
import LoginScreenAr from "./app/screens/LoginScreenAr";
import OptionsDrawerAr from "./app/screens/OptionsDrawerAr";
import ReportsAr from "./app/screens/ReportsAr";
import ReportsOptionsAr from "./app/screens/ReportsOptionsAr";
import CreateComponentAr from "./components/CreateComponentAr";
//import newComponentAr from "./components/newComponentAr";
import ReadComponentAr from "./components/ReadComponentAr";
import ReportsReadAr from "./components/ReportsReadAr";
import RequestsListAr from "./components/RequestsListAr";
//import SaveAr from "./components/SaveAr";
//import newsaveAr from  "./components/newsaveAr";
import RatingPageAr from "./app/screens/RatingPageAr";
import UpdateComponentAr from "./components/UpdateComponentAr";
import AllCategoryPageAr from "./app/screens/AllCategoryPageAr";
import SearchList from "./app/screens/SearchList";
import SearchListAr from "./app/screens/SearchListAr";
// import SearchDropDown from "./app/screens/SearchDropDown";
// import Testing from "./app/screens/Testing";
//
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}

      {/* <Stack.Screen options={{headerShown: false}} name="Categories" component={Categories} />  */}
      <AuthContext>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          initialRouteName={"FirstPage"}
        >
          <Stack.Screen
            name="CreateComponent"
            component={CreateComponent}
            options={{ title: "יצירת חשבון", headerShown: false }}
          />
          <Stack.Screen
            name="SearchListAr"
            component={SearchListAr}
            options={{ title: "بحث عن اعمال", headerShown: false }}
          />
         
          {/* <Stack.Screen
            name="Testing"
            component={Testing}
            options={{ title: "יצירת חשבון", headerShown: false }}
          />
          <Stack.Screen
            name="SearchDropDown"
            component={SearchDropDown}
            options={{ title: "יצירת חשבון", headerShown: false }}
          /> */}
          <Stack.Screen
            name="SearchList"
            component={SearchList}
            options={{ title: "יצירת חשבון", headerShown: false }}
          />
          <Stack.Screen
            name="CreateComponentAr"
            component={CreateComponentAr}
            options={{ title: "יצירת חשבון", headerShown: false }}
          />
          <Stack.Screen
            name="BusinessList"
            component={BusinessList}
            options={{ title: "יצירת חשבון", headerShown: false }}
          />
          <Stack.Screen
            name="RatingPage"
            component={RatingPage}
            options={{ title: "דירוג ", headerShown: false }}
          />
          <Stack.Screen
            name="RatingPageAr"
            component={RatingPageAr}
            options={{ title: "דירוג ", headerShown: false }}
          />
          <Stack.Screen
            name="Reports"
            component={Reports}
            options={{ title: "דיווחים", headerShown: false }}
          />
          <Stack.Screen
            name="ReportsAr"
            component={ReportsAr}
            options={{ title: "דיווחים", headerShown: false }}
          />
          <Stack.Screen
            name="ReadComponent"
            component={ReadComponent}
            options={{ title: "List", headerShown: false }}
          />
          <Stack.Screen
            name="ReadComponentAr"
            component={ReadComponentAr}
            options={{ title: "List", headerShown: false }}
          />
          <Stack.Screen
            name="ReportsRead"
            component={ReportsRead}
            options={{ title: "List", headerShown: false }}
          />
          <Stack.Screen
            name="ReportsReadAr"
            component={ReportsReadAr}
            options={{ title: "List", headerShown: false }}
          />
          <Stack.Screen
            name="BusinessOptions"
            component={BusinessOptions}
            options={{ title: "אופציות של המסדים", headerShown: false }}
          />
          <Stack.Screen
            name="BusinessOptionsAr"
            component={BusinessOptionsAr}
            options={{ title: "אופציות של המסדים", headerShown: false }}
          />
          <Stack.Screen
            name="ReportsOptions"
            component={ReportsOptions}
            options={{ title: "דיווחים ", headerShown: false }}
          />
          <Stack.Screen
            name="ReportsOptionsAr"
            component={ReportsOptionsAr}
            options={{ title: "דיווחים ", headerShown: false }}
          />
          <Stack.Screen
            name="UpdateComponent"
            component={UpdateComponent}
            options={{ title: "Update", headerShown: false }}
          />
          <Stack.Screen
            name="UpdateComponentAr"
            component={UpdateComponentAr}
            options={{ title: "Update", headerShown: false }}
          />
          <Stack.Screen
            name="RequestsList"
            component={RequestsList}
            options={{ title: "ReqList", headerShown: false }}
          />
          <Stack.Screen
            name="RequestsListAr"
            component={RequestsListAr}
            options={{ title: "ReqList", headerShown: false }}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="BusinessReg"
            component={BusinessRegister}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BusinessRegAr"
            component={BusinessRegisterAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="LoginAr"
            component={LoginScreenAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeAr"
            component={HomeScreenAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AllCategoryPage"
            component={AllCategoryPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AllCategoryPageAr"
            component={AllCategoryPageAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Options"
            component={OptionsDrawer}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="OptionsAr"
            component={OptionsDrawerAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Category"
            component={CategoryPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CategoryAr"
            component={CategoryPageAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BusinessPage"
            component={BusinessPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BusinessPageAr"
            component={BusinessPageAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminHomePage"
            component={AdminHomePage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AdminHomePageAr"
            component={AdminHomePageAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="FirstPage"
            component={FirstPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="FirstPageAr"
            component={FirstPageAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignIn"
            component={SignInPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignInAr"
            component={SignInPageAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SignUpAr"
            component={SignUpAr}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ForgetPassword"
            component={ForgetPass}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ForgetPasswordAr"
            component={ForgetPassAr}
          />
        </Stack.Navigator>
      </AuthContext>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
