import React from 'react'
import { View, Text , TextInput , StyleSheet} from 'react-native'
const CustomInPut = ({value , setValue , placeholder , secureTextEntry}) => {
  return (
    <View style = {styles.contanier}>
      <TextInput
       value={value}
       onChangeText={setValue}
       placeholder={placeholder} 
       placeholderTextColor="#899499"
       cstyle={styles.input} 
       secureTextEntry={secureTextEntry}
       />
    </View>
  )
};
const styles = StyleSheet.create({
contanier:{
  backgroundColor:'#F4F6FA',
  width : '80%',
  borderColor:'#884DFF',
  borderWidth:2,
  borderRadius:100,
  paddingHorizontal:15,
  marginVertical :5,
  height:30,
 // justifyContent:'center',
  flexDirection:"row-reverse",
 // alignItems:'center',
},
input : {},
});

export default CustomInPut;