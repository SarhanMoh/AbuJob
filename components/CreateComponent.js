import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, View, TextInput ,Text} from 'react-native';
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
     alert('Name is required.')
    } else {
      this.setState({
        isLoading: true,
      });      
      db.add({
        name: this.state.name,
        address: this.state.address,
        languages: this.state.languages,
        phone_number: this.state.phone_number,
      }).then((res) => {
        this.setState({
          name: '',
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
              value={this.state.name}
              onChangeText={(val) => this.onValUpdate(val, 'name')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'כתובת'}
              value={this.state.address}
              onChangeText={(val) => this.onValUpdate(val, 'address')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'שפות'}
              value={this.state.languages}
              onChangeText={(val) => this.onValUpdate(val, 'languages')}
          />
        </View>
        <View style={styles.formEle}>
          <TextInput
              placeholder={'טלפון'}
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
                <Picker.Item key={itemIndex} value={option.value} label={option.label}></Picker.Item>
                ))}
            {/* <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" /> */}
            </Picker>
        <View style={styles.button}>
          <Button
            title='יצירת חשבון'
            onPress={() => this.addBusiness()} 
            color="black"
          />
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  formEle: {
    flex: 1,
    padding: 5,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#4e4e4e',
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default CreateComponent;