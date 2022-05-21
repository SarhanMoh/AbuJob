import React,{useState}from 'react'
import { View, Text , Image , StyleSheet , useWindowDimensions , Pressable} from 'react-native'
import CustomButton from './scr/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
//import Logo from './assets/AbuJobsLogo.jpeg'
const FirstPage = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const onSignInPressed = () =>
    {
     navigation.navigate('SignInPage')
    };
    const onEnteryPressed = () =>
    {
      navigation.navigate('Home')
    };
    const onSignUpPressed = () =>
    {
      navigation.navigate('SignUp')
    };
  return (
    
    <View style = {styles.root}>
     { <Image source={require("../assets/AbuJobsLogo.jpeg")} style={[styles.logo , {height : height * 0.1}]} /> }
     <CustomButton text="להתחבר" onPress={onSignInPressed} type="PRIMARY"/>
     <CustomButton text="להיכנס כאורח" onPress={onEnteryPressed} type="PRIMARY"/>
     <Text style={styles.text}> אין לך חשבון ? להירשם כאן </Text>
      <CustomButton text="הירשם" onPress={onSignUpPressed} type="C"/>
    </View>
  )
}
const styles = StyleSheet.create({
    root:
    {
    alignItems : 'center',
    padding: 20,
    },
    logo:
    {
      paddingTop:200,
      resizeMode:'contain',
        width: '70%',
         maxWidth:500,
        maxHeight: 400,
    },
    text:{
        paddingTop:30,
        fontWeight:'bold',
        color:'gray',
    }
});
export default FirstPage;