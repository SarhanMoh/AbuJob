import React from 'react'
import { View,Text,TextInput,StyleSheet} from 'react-native'
const CustomInPut = props =>{
const {value , setValue , placeholder , secureTextEntry , lable , error}  = props;
  return (
    <>
    <View style = {{flexDirection:'row', justifyContent:'space-between' , marginBottom:5}} >
     <Text style={{fontSize:'blod'}}>{lable}</Text>
    {error ?(<Text style={{color:'red',fontSize:16}}>{error}</Text>) :null}
    </View>
      <TextInput tyle = {styles.contanier}
       value={value}
       onChangeText={setValue}
       placeholder={placeholder} 
       placeholderTextColor="#899499"
       cstyle={styles.input} 
       secureTextEntry={secureTextEntry}
       />
    </>
  )
};
const styles = StyleSheet.create({
contanier:{
//   backgroundColor:'#ffff',
//   width : '80%',
//   borderColor:'#2885A6',
//   borderWidth:1,
//   // borderRadius:100,
//   paddingHorizontal:15,
//   paddingVertical:10,
//   marginTop:5,
//   height:40,
//  // justifyContent:'center',
//   flexDirection:"row-reverse",
 // alignItems:'center',
    backgroundColor: '#ffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    textAlign: 'right',
    borderColor: '#2885A6',
    borderWidth: 1,
},
input : {},
});

export default CustomInPut;