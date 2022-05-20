import { KeyboardAvoidingView ,Image,StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
import {dataBase} from '../../firebase';
const LoginScreen = ({navigation}) => {
  const[email, setEmail]= useState('')
  const[name, setName]= useState('')
  const[businessNumber,setBusinessNumber]=useState('')
  const[address , SetAddress]=useState('')
  const[phone_number, SetPhoneNumber]=useState('')
  const[city,setCity]=useState('')
  const[ownerName, setOwnerName]= useState('')
  const[languages , setLanguages]= useState('')

   
  //const navigation = useNavigation()
//   useEffect(() =>{
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user){
//         navigation.navigate("AdminHomePage")
//       }
//     })
//     return unsubscribe
//   })


 async function addRequest(user) {
    let db = dataBase.collection('Requests');
      db.add({
        name: this.name,
        email: this.email,
        languages: this.languages,
        phone_number: this.phone_number,
        ownerName: this.ownerName,
        address: this.address,
        city: this.city,
        businessNumber: this.businessNumber,
       // uid:user.uid,
      }).then((res) => {
        // this.setState({
        //   Setname: '',
        //   Setaddress: '',
        //   languages:'',
        //   phone_number:'',
        //   email:'',
        //   ownerName:'',
        //   city:'',
        //   businessNumber:'',
        //  // isLoading: false,
        // });
        this.props.navigation.navigate('Home')
      })
      .catch((err) => {
        console.error("Error occured: ", err);
        this.setState({
          isLoading: false,
        });
      });
    
  }
 

    return (
    <KeyboardAvoidingView style={styles.container}
    behavior="padding">
      <View>
        <Image
          style={styles.bigLogoStyle} 
          source={require('../assets/AbuJobsBigLogo.jpeg')} />
        {/* <Text style ={[styles.adminText,]}>Welcome Admin</Text> */}

      </View>
      <View style={styles.inputContainer}> 
        <Text style={styles.textInfo}>שם עסק</Text>
        <TextInput
          placeholder='שם עסק'
          placeholderTextColor="#899499"
          value={name}
          textAlign= "right"

          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <Text style={styles.textInfo}>מספר עסק מורשה </Text>
        <TextInput
          placeholder='ע.מ'
          placeholderTextColor="#899499"
          value={businessNumber}
          textAlign= "right"

          onChangeText={text => setBusinessNumber(text)}
          style={styles.input}
        />
        <Text style={styles.textInfo}>שם  בעל העסק</Text>
        <TextInput
          placeholder='שם  בעל העסק'
          placeholderTextColor="#899499"
          value={ownerName}
          textAlign= "right"

          onChangeText={text => setOwnerName(text)}
          style={styles.input}
        />
          <Text style={styles.textInfo}>שפות דיבור</Text>
        <TextInput
          placeholder='שפות דיבור'
          placeholderTextColor="#899499"
          value={languages}
          textAlign= "right"

          onChangeText={text => setLanguages(text)}
          style={styles.input}
        />
        
        <Text style={styles.textInfo}>מייל</Text>
        <TextInput
          placeholder='מייל'
          placeholderTextColor="#899499"
          value={email}
          textAlign= "right"

          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.textInfo}>כתובת</Text>
        <TextInput
          placeholder='כתובת'
          placeholderTextColor="#899499"
          value={address}
          textAlign= "right"

          onChangeText={text => SetAddress(text)}
          style={styles.input}
        />
        <Text style={styles.textInfo}>מספר טלפון</Text>
        <TextInput
          placeholder='מספר טלפון'
          placeholderTextColor="#899499"
          value={phone_number}
          textAlign= "right"
          onChangeText={text => SetPhoneNumber(text)}
          style={styles.input}
        />
        <Text style={styles.textInfo}>עיר</Text>
        <TextInput
          placeholder='עיר'
          placeholderTextColor="#899499"
          textAlign= "right"
          value={city}
          onChangeText={text => setCity(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={addRequest}
          style={styles.button}
        >
            <Text style={styles.buttonText}>שלח</Text>

        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button , styles.buttonOutLine]}
        >
            <Text style={styles.buttonOutLineText}>Register</Text>

        </TouchableOpacity> */}

      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    flexDirection:'column'
  },
  inputContainer:{
    width: '80%',
    //justifyContent:'flex-end',
    // flexDirection:'row'
   // alignItems: 'flex-end',
    //justifyContent: 'center'
},
  textInfo:{
    alignContent: "flex-end",
    paddingTop: 2,
    paddingBottom:2,
    alignSelf:'flex-end',
    fontSize: 16

    // flexDirection:'column-reverse'
  },
  input: {
    backgroundColor: '#ffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: '#2885A6',
    borderWidth: 1,
    //alignSelf:'flex-end'

    // flexDirection:'row-reverse'
  },
  buttonContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 40,
      marginBottom:20,
  },
  button: {
    backgroundColor: '#A8D173',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',

  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutLine:{
    backgroundColor : 'white',
    marginTop: 10,
    borderColor: '#2885A6',
    borderWidth: 3,
  },
  buttonOutLineText:{
    color: '#2885A6',
    fontWeight: '700',
    fontSize: 16,
  },
  adminText:{
    padding: '20%',
    marginTop: '-20%',
    fontSize: 25,
    fontWeight: '800',
    color: '#2885A6',
  },
  bigLogoStyle:{
    resizeMode:'contain',
    width:300,
    height: 150,
    padding : 20,
    
    justifyContent: 'center',
    alignItems: 'center',
  }

})
//#0782f9 blue 