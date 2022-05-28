import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView,ImageBackground, ActivityIndicator,TouchableOpacity, View,StatusBar, TextInput ,Text,Pressable, SafeAreaView ,Image} from 'react-native';
import { dataBase } from '../firebase';
import {Picker} from '@react-native-picker/picker';
const listCollection=[];

const options = [

    {
  
      label: "רכב",
  
      value: "Cars",
  
    },
  
    {
  
      label: "שיפוצים",
  
      value: "Renovations",
  
    },
  
    {
  
      label: "טיפול",
  
      value: "Treatment",
  
    },
  
    {
  
      label: "אמנות ומלאכת יד",
  
      value: "Arts",
  
    },
    {
  
      label: "קוסמטיקה",
  
      value: "cosmetics",
  
    },
    {
  
      label: "תיקונים ומלאכות",
  
      value: "Repairs",
  
    },
    {
  
      label: "חשמלאות",
  
      value: "Electricians",
  
    },
    {
  
      label: "הוראה",
  
      value: "Teaching",
  
    },
    {
  
      label: "מוסיקה",
  
      value: "Music",
  
    },
    {
  
      label: "שירותי מכלות",
  
      value: "Grocery",
  
    },
    {
  
      label: "טכנאים",
  
      value: "Technicians",
  
    },
    {
  
      label: "כושר ואימון פיזי",
  
      value: "Fitness",
  
    },
    {
  
      label: "שונות",
  
      value: "Various",
  
    },
    {
  
      label: "קייטרינג",
  
      value: "Catering",
  
    },

  
  ];
class CreateComponent extends Component {
  constructor() {
    super();
    // this.ref = dataBase.collection('glory');
    this.state = {
      category: 'Cars',  
      name: '',
      address: '',
      languages: '',
      phone_number: '',
      description: '',
      rating: 0,
      isLoading: false
    };
  }
  

  onValUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  // validate = (text) => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   if (reg.test(text) === false) {
  //     console.log("Email is Not Correct");
  //     this.setState({ email: text })
  //     return false;
  //   }
  //   else {
  //     this.setState({ email: text })
  //     console.log("Email is Correct");
  //   }
  // }
  addBusiness() {
    let db = dataBase.collection(this.state.category);
    if(this.state.name === ''){
      alert('חייב  לרשום שם ')
     }
     else if(this.state.job === ''){
      alert('חייב  לרשום מקצוע ')
     }
    else if(this.state.address === ''){
     alert('חייב  לרשום כתובת ')
    }
    else if(this.state.languages === ''){
      alert('חייב לרשום  שפות ')
     }
    else if(this.state.phone_number === ''){
      alert('חייב לרשום מספר טלפון ')
     }
    else if(this.state.phone_number.length > 10 ||this.state.phone_number.length <9 ){
      alert(' חייב לרשום מספר טלפון נכון ')
     }
    else {
      this.setState({
        isLoading: true,
      });      
      db.add({
        name: this.state.name,
        job: this.state.job,
        address: this.state.address,
        languages: this.state.languages,
        phone_number: this.state.phone_number,
        description: this.state.description,
        rating: this.state.rating,
      }).then((res) => {
        this.setState({
          name: '',
          job:'',
          address: '',
          languages:'',
          phone_number:'',
          description: '',
          rating: 0,
          isLoading: false,
        });
        this.props.navigation.navigate('CreateComponent')
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
      <SafeAreaView style={styles.containerBig}
      scrollIndicatorInsets={false}>
        <ImageBackground
              source={require('../app/assets/back.png')}
              style={StyleSheet.absoluteFillObject}
              blurRadius={50}
              resizeMode="cover"
            />
      <ScrollView style={styles.container}
      >
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("BusinessOptions")}>
        <Image
        style={styles.backButton}
        source={require('../app/assets/backButton.png')} 
        
        />
        
      </TouchableOpacity>
      <View>
            <Image
              style={styles.bigLogoStyle} 
              source={require('../app/assets/AbuJobsBigLogo.jpeg')} />
            {/* <Text style ={[styles.adminText,]}>Welcome Admin</Text> */}
    
          </View>
        <View style={styles.inputContainer}>
        <Text style={styles.textInfo}>שם מלא</Text>
          <TextInput
              placeholder={'שם מלא'}
              placeholderTextColor="#899499"
              value={this.state.name}
              maxLength={30}
              onChangeText={(val) => this.onValUpdate(val, 'name')}
              style={styles.input}
              textAlign= "right"

          />
        
        <Text style={styles.textInfo}> מקצוע/שירות מוצע</Text>
          <TextInput
              placeholder={'מקצוע/שירות מוצע'}
              placeholderTextColor="#899499"
              value={this.state.job}
              maxLength={30}
              onChangeText={(val) => this.onValUpdate(val, 'job')}
              style={styles.input}
              textAlign= "right"

          />
       
       <Text style={styles.textInfo}>כתובת</Text>
          <TextInput
              placeholder={'כתובת'}
              placeholderTextColor="#899499"
              value={this.state.address}
              maxLength={50}
              onChangeText={(val) => this.onValUpdate(val, 'address')}
              style={styles.input}
              textAlign= "right"

          />
        
        <Text style={styles.textInfo}>שפות</Text>
          <TextInput
              placeholder={'שפות'}
              placeholderTextColor="#899499"
              value={this.state.languages}
              maxLength={30}
              onChangeText={(val) => this.onValUpdate(val, 'languages')}
              style={styles.input}
              textAlign= "right"

          />
       
       <Text style={styles.textInfo}>טלפון</Text>
          <TextInput
              placeholder={'טלפון'}
              placeholderTextColor="#899499"
              value={this.state.phone_number}
              onChangeText={(val) => this.onValUpdate(val, 'phone_number')}
              style={styles.input}
              textAlign= "right"
              maxLength={10}

          />
          <Text style={styles.textInfo}>תוכן</Text>
          <TextInput
              placeholder={'תוכן'}
              placeholderTextColor="#899499"
              value={this.state.description}
              multiline={true}
              maxLength={200}
              numberOfLines={5}
              onChangeText={(val) => this.onValUpdate(val, 'description')}
              style={styles.input}
              textAlign= "right"
          />
          <Text style={styles.textInfo}>דירוג</Text>
          <TextInput
              placeholder={'דירוג'}
              placeholderTextColor="#899499"
              value={this.state.rating.toString()}
              keyboardType='numeric'
              onChangeText={(val) => this.onValUpdate(val, 'rating')}
              style={styles.input}
              textAlign= "right"

          />
       

        <Picker
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({
                    category: itemValue,
                  })
            }>
                {options.map((option , itemIndex) => (
                <Picker.Item key={itemIndex} value={option.value} label={option.label} style={{flexDirection:'column-reverse'}}></Picker.Item>
                ))}
            {/* <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" /> */}
            </Picker>
            <View style={styles.containerB}>
              <Pressable style ={styles.button} 
            onPress={() =>this.addBusiness()} 
            // color="#000"
            // backgroundColor='#000'
            // borderColor= "#000"
            title='יצירת חשבון'
            textAlign= "right"

            >
                <Text style={styles.text}>יצירת חשבון</Text>
              </Pressable>
          </View>
          </View> 
      </ScrollView>
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerBig:{
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 1.5 : 0,
  },
  container: {
    flex: 1,
    //padding: 20,
    paddingBottom: 1,

   marginHorizontal: 20,
    // flexGrow: 50,
  },
  textInfo:{
    alignContent: "flex-end",
    paddingTop: 2,
    paddingBottom:2,
    alignSelf:'flex-end',
    fontSize: 16

    // flexDirection:'column-reverse'
  },
  containerB:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    width: '100%',
    height: 64,
    //justifyContent:'flex-end',
    // flexDirection:'row'
   // alignItems: 'flex-end',
    //justifyContent: 'center'
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
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    //elevation: 3,
    backgroundColor: '#2885A6',
    width:'80%',
    padding:10,  
    
    },
    text:{
      fontSize: 16,
      //lineHeight: 21,
      fontWeight: 'bold',
      //letterSpacing: 0.25,
      color: 'white',
    },
    bigLogoStyle:{
      resizeMode:'contain',
      width:300,
      height: 150,
      padding : 20,
      
      justifyContent: 'center',
      alignItems: 'center',
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
      }
})

export default CreateComponent;