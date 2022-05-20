// import React, { Component } from 'react';
import { StatusBar,Animated,Button,Image, StyleSheet, ScrollView,FlatList,Easing, ActivityIndicator, View, TextInput ,Text, Pressable} from 'react-native';
import { dataBase } from '../firebase';
import {Picker} from '@react-native-picker/picker';
import { collection } from "firebase/firestore";
import { useState } from 'react';

const IMG ='https://i.pinimg.com/564x/df/94/ab/df94abacc141db8944c42cbf88f32f38.jpg';
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
 
const  ReadComponent =()=>  {
  const [category , setCategory]= useState("")
    constructor() {
        super();
        //this.ref = dataBase.collection();
        this.state = {
          category: 'Cars',  
          isLoading: false,
          emptyList: [],
        };
      }
      
    async function getList(){
        const ref = dataBase
        .collection(this.state.category);
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
      tmp.push(doc.data());
      
    });
    this.setState({
        emptyList: tmp,
      });
    console.log(this.state.emptyList);
    };
  // componentDidMount(){
  //   const scrollY= React.useRef(new Animated.Value(0)).current;
  // }
    render() {
     // const scrollY= React.useRef(new Animated.Value(0)).current;

        return (
          <View style={{flex:1 , backgroundColor:'#fff'}}>
            <Image
              source={{uri:IMG}}
              style={StyleSheet.absoluteFillObject}
              blurRadius={80}
            
            />
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
            <View style={styles.container}>
            <Pressable style ={styles.button} 
            onPress={() =>this.getList()} 
            // color="#000"
            // backgroundColor='#000'
            // borderColor= "#000"
            title='הצג רשימה'

          >
            <Text style={styles.text}>הצג רשימה</Text>
          </Pressable>
          </View>
          {/* <ImageBackground
            source={{uri: IMG}}
            resizeMode="cover"
            style={{StyleSheet.absoluteFillObject}}
          /> */}
        
          
          <Animated.FlatList
          // const scrollY = React.useRef(new Animated.value(0)).current;
          data={this.state.emptyList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 , padding: 20, paddingTop: StatusBar.currentHeight || 42}}
          // onScroll ={Animated.event (
          //   [{ nativeEvent : {contentOffset:{y:''}}}],
          //   {useNativeDriver:true}
            
          //   )}
          renderItem={({ item, index }) => {
            return ( //:שם 
            //:כתובת
            //:שפות
            //:טלפון
                <View key={index} style={{flexDirection:'column' , padding:20,marginBottom:20,backgroundColor:'rgba(255,255,255,0.8)', borderRadius:14,
                      shadowColor: "#000",
                      shadowOffset:{
                          width:0,
                          height:10
                      },
                      shadowOpacity: 1,
                      shadowRadius:20,
                
                }}>
                    <Text style={{fontSize:22 , fontWeight: '700'}}> {item.name} </Text>
                    <Text style={{fontSize:18 , opacity: .7}}> {item.address} </Text>
                    <Text style={{fontSize:16 , opacity: .8}}> {item.languages}</Text>
                    <Text style={{fontSize:16 , opacity: .8 , color: '#0099cc'}}> {item.phone_number}</Text>
                </View>
        )
          }}
        />

          </View>
        );
    }  
}
const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      justifyContent: 'center',
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
    list:{
        flex:1,
        backgroundColor: '#ffff',
        padding: 20,
        flexDirection: 'column',
        marginBottom:20,
        backgroundColor: 'ffff',
        borderRadius:12,
        shadowColor:"black",
        shadowOffset:{
          width:0,
          height: 10,
        },
        shadowOpacity:.3,
        shadowRadius:20,
        // borderRadius:70,
        // width: 70,
        // height:70,
    },

})
export default ReadComponent;