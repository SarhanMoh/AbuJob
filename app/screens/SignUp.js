import React,{useState}from 'react'
import { View, Text , Image , StyleSheet , useWindowDimensions , Pressable} from 'react-native'
import CustomInPut from './scr/CustomInPut'
import CustomButton from './scr/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
//import Logo from './assets/AbuJobsLogo.jpeg'
const SignUp = () => {
    const {height} = useWindowDimensions();
    const [Name,setName] = useState('');
    const [LastName,setLN] = useState('');
    const [Email,setEmail] = useState('');
    const [Homeadd,setHomeadd] = useState('');
    const [Phone,setPhoe] = useState('');
    const navigation = useNavigation();
    const onRegisterPressed = () =>
    {
      navigation.navigate('Home')
    };
    const onAPressed = () =>
    {
      navigation.navigate('SignInPage')
    };
    const onTPressed = () =>
    {
      navigation.navigate('Home')
    };
    const onPpPressed = () =>
    {
      navigation.navigate('Home')
    };
  return (
    
    <View style = {styles.root}>
    { <Image source={require("../assets/AbuJobsLogo.jpeg")} style={[styles.logo , {height : height * 0.1}]} /> }
    { <Text style = {styles.texte}>הירשם ל שכונות טובה</Text> }
   <CustomInPut placeholder="שם פרטי" value={Name} setValue={setName} />
   <CustomInPut placeholder="שם המשפחה" value={LastName} setValue={setLN} />
   <CustomInPut placeholder="אימייל" value={Email} setValue={setEmail} />
   <CustomInPut placeholder="כתובת" value={Homeadd} setValue={setHomeadd} />
   <CustomInPut placeholder="מס' טלפון" value={Phone} setValue={setPhoe}/>
   <CustomButton text="להירשם" onPress={onRegisterPressed} type="PRIMARY"/>
    <Text style={styles.text}>על ידי רישום, אתה מאשר שאתה מסכים
     <Text style={styles.link} onPress={onTPressed}> לתנאי השימוש
     </Text> ו<Text style = {styles.link} onPress={onPpPressed}> מדיניות פרטיות</Text> 
     <Text> שלנו</Text>
     </Text>
     <CustomButton text="יש לך חשבון? היכנס" onPress={onAPressed} type="TERITARY"/>
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
    title:
    {
      fontSize:24,
     fontWeight:'bold',
     color:'black',
     margin:10,
    },
    text:{
        color:'gray',
        marginVertical:10,
    },
    link:{
     color:'#AF38EB' 
    },
    texte:{
    padding:5,
    color:'black',
    fontWeight:"900",
    marginVertical:5,
    },
  box:
  {

  }
});
export default SignUp;