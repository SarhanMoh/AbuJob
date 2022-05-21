import React, { Component } from 'react';
import { Button,StatusBar,Image,TouchableOpacity, KeyboardAvoidingView,StyleSheet,SafeAreaView , ScrollView, ActivityIndicator, View, TextInput ,Text,Pressable} from 'react-native';
import { dataBase } from '../../firebase';


class BusinessRegister extends Component {
  constructor() {
    super();
    // this.ref = dataBase.collection('glory');
    this.state = {
      category: 'Requests',  
      name: '',
      email:'',
      address: '',
      businessNumber:'',
      languages: '',
      city:'',
      phone_number: '',
      ownerName: '',
      isLoading: false
    };
  }
  

  onValUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  addRequests() {
    let db = dataBase.collection('Requests');
    if(this.state.name === ''){
      alert(' חייב  לרשום שם עסק ')
     }
     else if(this.state.businessNumber === ''){
      alert('חייב  לרשום מספר עסק מורשה ')
     }
    else if(this.state.ownerName === ''){
     alert('חייב  לרשום שם בעל העסק ')
    }
    else if(this.state.languages === ''){
      alert('חייב לרשום  שפות ')
     }
    else if(this.state.email === ''){
      alert('חייב לרשום מייל ')
     } 
     else if(this.state.address === ''){
        alert('חייב לרשום כתובת ')
       }
    else if(this.state.phone_number === ''){
        alert('חייב לרשום מספר טלפון ')
       }
    else if(this.state.city === ''){
        alert('חייב לרשום עיר ')
       }  
    else {
      this.setState({
        isLoading: true,
      });      
      db.add({
        name: this.state.name,
        email: this.state.email,
        languages: this.state.languages,
        phone_number: this.state.phone_number,
        ownerName: this.state.ownerName,
        address: this.state.address,
        city: this.state.city,
        businessNumber: this.state.businessNumber,
      }).then((res) => {
        this.setState({
          name: '',
          address: '',
          languages:'',
          phone_number:'',
          email:'',
          ownerName:'',
          city:'',
          businessNumber:'',
         isLoading: false,
        });
        this.props.navigation.navigate('ReadComponent')
      })
      .catch((err) => {
        console.error("Error occured: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }
 
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="green"/>
        </View>
      )
    }
    return (
     <SafeAreaView style={styles.containerBig}>
          <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={{ paddingBottom: 0 , padding: 20, paddingTop: StatusBar.currentHeight || 42}}

          >
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
              value={this.state.name}
              textAlign= "right"
    
              onChangeText={(val) => this.onValUpdate(val, 'name')}
              style={styles.input}
            />
            <Text style={styles.textInfo}>מספר עסק מורשה </Text>
            <TextInput
              placeholder='ע.מ'
              placeholderTextColor="#899499"
              value={this.state.businessNumber}
              textAlign= "right"
              onChangeText={(val) => this.onValUpdate(val, 'businessNumber')}
              style={styles.input}
            />
            <Text style={styles.textInfo}>שם בעל העסק</Text>
            <TextInput
              placeholder='שם  בעל העסק'
              placeholderTextColor="#899499"
              textAlign= "right"
              value={this.state.ownerName}
              onChangeText={(val) => this.onValUpdate(val, 'ownerName')}
              style={styles.input}
            />
              <Text style={styles.textInfo}>שפות דיבור</Text>
            <TextInput
              placeholder='שפות דיבור'
              placeholderTextColor="#899499"
              value={this.state.languages}
              textAlign= "right"
              onChangeText={(val) => this.onValUpdate(val, 'languages')}
              style={styles.input}
            />
            <Text style={styles.textInfo}>מייל</Text>
            <TextInput
              placeholder='מייל'
              placeholderTextColor="#899499"
              value={this.state.email}
              textAlign= "right"
              onChangeText={(val) => this.onValUpdate(val, 'email')}
              style={styles.input}
            />
            <Text style={styles.textInfo}>כתובת</Text>
            <TextInput
              placeholder='כתובת'
              placeholderTextColor="#899499"
              value={this.state.address}
              textAlign= "right"
              onChangeText={(val) => this.onValUpdate(val, 'address')}
              style={styles.input}
            />
            <Text style={styles.textInfo}>מספר טלפון</Text>
            <TextInput
              placeholder='מספר טלפון'
              placeholderTextColor="#899499"
              value={this.state.phone_number}
              textAlign= "right"
              onChangeText={(val) => this.onValUpdate(val, 'phone_number')}
              style={styles.input}
            />
            <Text style={styles.textInfo}>עיר</Text>
            <TextInput
              placeholder='עיר'
              placeholderTextColor="#899499"
              textAlign= "right"
              value={this.state.city}
              onChangeText={(val) => this.onValUpdate(val, 'city')}
              style={styles.input}
            />
          </View>
    
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() =>this.addRequests()}
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
          </ScrollView>
     </SafeAreaView>
      );
    } 
  }


  const styles = StyleSheet.create({
    containerBig:{
      flex:1,
    },
    container:{
      flex :1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
      flexDirection:'column'

    },
    scrollView: {
      backgroundColor: '#ffff',
      // marginHorizontal: 1,
      paddingBottom: 1,
      
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

export default BusinessRegister;