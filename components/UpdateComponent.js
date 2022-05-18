import React, { Component } from 'react';
import { Button, StyleSheet, ScrollView, ActivityIndicator, View, TextInput ,Text} from 'react-native';
import { dataBase } from '../firebase';
import {Picker} from '@react-native-picker/picker';
import { collection, deleteDoc } from "firebase/firestore";
import { FlatList } from 'react-native';
import { list } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';

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
 
class UpdateComponent extends Component {
    constructor({navigation}) {
        
        super();
        //this.ref = dataBase.collection();
        this.state = {
          category: 'Cars',  
          isLoading: false,
          emptyList: [],
        };
      }
    
    async getList(){
        const ref = dataBase
        .collection(this.state.category);
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
      tmp.push({"id":doc.id,...doc.data()});
      
    });
    this.setState({
        emptyList: tmp,
      });
    console.log(this.state.emptyList);
    }
    async deleteItem(item){
        
       var docRef = dataBase.collection(this.state.category).doc(item.id);
       await docRef.delete().then(()=>this.getList()).catch(()=>console.log("bad"))
      
    }
    render() {
        return (
      <View>
            <Picker
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({
                    category: itemValue,
                  })
            }>
                {options.map((option, itemIndex) => (
                <Picker.Item key={itemIndex} value={option.value} label={option.label}></Picker.Item>
                ))}
        
            </Picker>
            <Button
            title='הצג רשימה'
            onPress={() =>this.getList()} 
            color="black"
          />
          <FlatList
          data={this.state.emptyList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150}}
          ListEmptyComponent={({ item, index }) => {
            return (
                <View key={index} style={styles.list}>
                        <Text>"אין תוצאות ..." </Text>

                    </View>
        )
          }}
          renderItem={({ item, index }) => {
            return (
                <View key={index} style={styles.list}>
                    <View style={styles.dataList}>
                        <Text>שם :{item.name} </Text>
                        <Text>כתובת:{item.address} </Text>
                        <Text>שפות:{item.languages}</Text>
                        <Text>טלפון :{item.phone_number}</Text>
                    </View>
                    <View>
                      <Button
                          title='מחיקה'
                          onPress={() =>this.deleteItem(item)} 
                          color="red"
                      />
                    </View>
                </View>
        )
          }}
        />

    </View>
        );
    }  
}
const styles = StyleSheet.create({
    button:{
      flex :1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
  
    },
    list:{
        flex:1,
        backgroundColor: '#ffff',
        padding: 20,
        flexDirection:"row-reverse",
        justifyContent:'space-between',
       
    },
    dataList:{

        flexDirection:'column'
    },
    delete:{
        width:45,
        height:45,
    }

})
export default UpdateComponent;