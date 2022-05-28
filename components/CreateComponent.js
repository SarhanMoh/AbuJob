import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, View, TextInput ,Text,Pressable} from 'react-native';
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
      isLoading: false
    };
  }
  

  onValUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
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
      }).then((res) => {
        this.setState({
          name: '',
          job:'',
          address: '',
          languages:'',
          phone_number:'',
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
      <ScrollView style={styles.container}>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'שם מלא'}
              placeholderTextColor="#899499"
              value={this.state.name}
              onChangeText={(val) => this.onValUpdate(val, 'name')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'מקצוע/שירות מוצע'}
              placeholderTextColor="#899499"
              value={this.state.job}
              onChangeText={(val) => this.onValUpdate(val, 'job')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'כתובת'}
              placeholderTextColor="#899499"
              value={this.state.address}
              onChangeText={(val) => this.onValUpdate(val, 'address')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'שפות'}
              placeholderTextColor="#899499"
              value={this.state.languages}
              onChangeText={(val) => this.onValUpdate(val, 'languages')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'טלפון'}
              placeholderTextColor="#899499"
              value={this.state.phone_number}
              onChangeText={(val) => this.onValUpdate(val, 'phone_number')}
          />
        </View>

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

            >
                <Text style={styles.text}>יצירת חשבון</Text>
              </Pressable>
          </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },
  containerB:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  formEle: {
    flex: 1,
    padding: 5,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#4e4e4e',
    flexDirection: 'row-reverse'
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
    elevation: 3,
    backgroundColor: 'black',
    width:'60%',
    padding:10,  
    
    },
    text:{
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})

export default CreateComponent;