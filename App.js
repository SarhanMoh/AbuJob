import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , SafeAreaView } from 'react-native';
//import AdminHomePage from './app/screens/AdminHomePage';
import SignInPage from './app/screens/SignInPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AdminHomePage from './app/screens/AdminHomePage';
import SignUp from './app/screens/SignUp';
import FirstPage from './app/screens/FirstPage';
import ForgetPass from './app/screens/ForgetPass';
import Home from './app/screens/Home';
const Stack = createStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator>
           <Stack.Screen   options={{headerShown: false}} name='FirstPage' component={FirstPage} /> 
           <Stack.Screen   options={{headerShown: false}} name='SignIn' component={SignInPage} />
           <Stack.Screen   options={{headerShown: false}} name='SignUP' component={SignUp} />
           <Stack.Screen   options={{headerShown: false}} name='ForgetPassword' component={ForgetPass} />
           <Stack.Screen   options={{headerShown: false}} name='Home' component={Home} />
       </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDAF3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
