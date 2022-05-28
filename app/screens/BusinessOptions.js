import React from "react";
import { View, Button,Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

function BusinessOptions(props) {
const { onPress, title = 'Save' } = props;
const navigation = useNavigation()
  return (
    <View style={styles.screenContainer}>
       <TouchableOpacity onPress={()=>navigation.navigate("AdminHomePage")}>
        <Image
        style={styles.backButton}
        source={require('../assets/backButton.png')} 
        
        />  
      </TouchableOpacity>
      <View>
        <Image
          style={styles.bigLogoStyle} 
          source={require('../assets/AbuJobsBigLogo.jpeg')} />
      </View>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("CreateComponent")}>
            <Text style={styles.text}>הוספת מסד</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("ReadComponent")}>
            <Text style={styles.text}>רשימת מסדים</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("UpdateComponent")}>
            <Text style={styles.text}>מחיקת מסד</Text>
        </TouchableOpacity>
    </View>
  );
};
//#68A19B
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    // padding: 16,
   // marginBottom: '40%',
    //marginTop: '20%',
    color: 'white',
    paddingBottom: "20%",
    
    backgroundColor: '#fff'
  },
  button2: {
   backgroundColor:"#2885A6",
   width: '70%',
   justifyContent:'center',
   height:60,
   alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  button1: {
   backgroundColor:"#A8D173",
   width: '70%',
   justifyContent:'center',
   height:60,
   alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
    alignItems:'center',
  },
  
  backButton:{
    width:10,
    height:40,
    resizeMode:"contain",
    // alignSelf:'flex-start',
    // justifyContent:'flex-start',
    //position: 'absolute',
    paddingLeft: 100,
    marginTop:20,
    marginLeft: "65%",
    borderRadius:10,
    borderColor:'black',
    borderWidth:3,
    },
    bigLogoStyle:{
      resizeMode:'contain',
      width:300,
      height: 150,
      padding : 50,
      //paddingTop:50,
      justifyContent: 'space-between',
      //alignItems: 'flex-end',
    },
});

export default BusinessOptions;