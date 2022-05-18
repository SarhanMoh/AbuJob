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
// import Categories from './app/screens/Categories';


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
      initialRouteName={"ReadComponent"}
      >
      <Stack.Screen 
        name="CreateComponent" 
        component={CreateComponent} 
        options={{ title: 'יצירת חשבון' }}
      />
      <Stack.Screen 
        name="ReadComponent" 
        component={ReadComponent} 
        options={{ title: 'List' }}
        

      />
      <Stack.Screen 
       name="UpdateComponent" 
       component={UpdateComponent} 
       options={{ title: 'Update' }}
      />
       { <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} /> }
      { <Stack.Screen name="Home" component={HomeScreen} /> }
      { <Stack.Screen options={{headerShown: false}} name="AdminHomePage" component={AdminHomePage} /> }
    </Stack.Navigator>
    {/* </Stack.Navigator> */}
  </NavigationContainer>
    );
    // <AdminHomePage></AdminHomePage>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
