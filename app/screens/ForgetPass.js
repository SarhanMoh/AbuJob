import React,{useState}from 'react'
import { View, Text , Image , StyleSheet , useWindowDimensions , Pressable} from 'react-native'
import CustomInPut from './scr/CustomInPut'
import CustomButton from './scr/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
//import Logo from './assets/AbuJobsLogo.jpeg'
const ForgetPass = () => {
   const navigations= useNavigation();
    const {height} = useWindowDimensions();
    const [Email,setEmail] = useState('');
    const onSignInPressed = () =>
    {
      navigations.navigate('SignInPage')
    };
    const onAPressed = () =>
    {
      navigations.navigate('SignInPage')
    };

  return (
    
    <View style = {styles.root}>
    {<Image source={require("../assets/AbuJobsLogo.jpeg")} style={[styles.logo , {height : height * 0.1}]} /> }
   <Text style={styles.text}>הזן כתובת אימייל</Text>
   <CustomInPut placeholder="אימייל" value={Email} setValue={setEmail} />
   <CustomButton text="חזרה כדי להיכנס" onPress={onAPressed} type="TERITARY"/>
   {/* <CustomInPut placeholder="סיסמה" value={Password} setValue={setPass} secureTextEntry={true}/> */}
   <CustomButton text="לִשְׁלוֹחַ" onPress={onSignInPressed} type="PRIMARY"/>
   <Text style={styles.text}>אנו נשלח קישור לכתובת האימייל שלך כדי להיכנס שוב</Text>
   <CustomButton text="אין לך חשבון ? להירשם כאן" onPress={onAPressed} type="TERITARY"/>
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
        width: '90%',
        maxWidth:500,
       maxHeight: 400,
    },
    text:{
     padding:5,
    color:'black',
    fontWeight:"900",
    marginVertical:5,
    }
});
export default ForgetPass;