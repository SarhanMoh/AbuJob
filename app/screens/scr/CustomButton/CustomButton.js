import React from 'react'
import { View, Text ,StyleSheet , Pressable} from 'react-native'
const CustomButton = ({onPress , text , type}) => {
  return (
    <Pressable
        onPress={onPress}
        style={[styles.container,styles[`container_${type}`]]}>
     <Text style={[styles.text ,styles[`text_${type}`]] }>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
    container:{
     //   backgroundColor:"#3B71F3",
        width:'70%',
        marginVertical:5,
        padding:15,
        alignItems:'center',
        borderRadius:100,
    },
    container_PRIMARY:{
        backgroundColor:"#14AAF5",
    },
    container_TERITARY:{},
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_TERITARY:{
    color:'gray',
    },
    container_C:{
      backgroundColor:"#7ECC49",
  },
});
export default CustomButton;