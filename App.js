import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput } from 'react-native';

import AdminHomePage from './app/screens/AdminHomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateComponent from './components/CreateComponent';
import ReadComponent from './components/ReadComponent';
import UpdateComponent from './components/UpdateComponent';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import BusinessRegister from './app/screens/BusinessRegister';
import RequestsList from './components/RequestsList';
import BusinessOptions from './app/screens/BusinessOptions';
import OptionsDrawer from './app/screens/OptionsDrawer';
// import Categories from './app/screens/Categories';
import SignUp from './app/screens/SignUp';
import FirstPage from './app/screens/FirstPage';
import ForgetPass from './app/screens/ForgetPass';
import SignInPage from './app/screens/SignInPage'

const Stack = createNativeStackNavigator();
// 
export default function App() {                
  return (
    <NavigationContainer>
    {/* <Stack.Navigator> */}
     
      {/* <Stack.Screen options={{headerShown: false}} name="Categories" component={Categories} />  */}
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }
      }
      initialRouteName={"FirstPage"}
      >
      <Stack.Screen 
        name="CreateComponent" 
        component={CreateComponent} 
        options={{ title: 'יצירת חשבון', headerShown: false }}
      />
      <Stack.Screen 
        name="ReadComponent" 
        component={ReadComponent} 
        options={{ title: 'List' , headerShown: false}}
      />
      <Stack.Screen 
        name="BusinessOptions" 
        component={BusinessOptions} 
         options={{ title: 'אופציות של המסדים', headerShown: false }}
      />
      <Stack.Screen 
       name="UpdateComponent" 
       component={UpdateComponent} 
       options={{ title: 'Update' , headerShown: false}}
      />
      <Stack.Screen 
       name="RequestsList" 
       component={RequestsList} 
       options={{ title: 'ReqList' , headerShown: false}}
      />
      
      <Stack.Screen options={{headerShown: false}} name="BusinessReg" component={BusinessRegister} /> 
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> 
      <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Options" component={OptionsDrawer} /> 
      <Stack.Screen options={{headerShown: false}} name="AdminHomePage" component={AdminHomePage} /> 
      <Stack.Screen   options={{headerShown: false}} name='FirstPage' component={FirstPage} /> 
      <Stack.Screen   options={{headerShown: false}} name='SignIn' component={SignInPage} />
      <Stack.Screen   options={{headerShown: false}} name='SignUP' component={SignUp} />
      <Stack.Screen   options={{headerShown: false}} name='ForgetPassword' component={ForgetPass} />
      </Stack.Navigator>
  </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
