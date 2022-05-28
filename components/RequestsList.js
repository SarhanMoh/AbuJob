import React, { Component } from 'react';
import { StatusBar,Animated,Button,Image, StyleSheet,TouchableOpacity,ImageBackground ,ScrollView,FlatList,Easing, ActivityIndicator, View, TextInput ,Text, Pressable , SafeAreaView} from 'react-native';
import { dataBase } from '../firebase';
import { collection } from "firebase/firestore";

 
class RequestsList extends Component {
  
    constructor() {
        super();
        //this.ref = dataBase.collection();
        this.state = {
          category: 'Requests',  
          isLoading: false,
          emptyList: [],
        };
      }
      
    async getList(){
    
        const ref = dataBase
        .collection("Requests");
    const snapshot = await ref.get();
    let tmp = [];
    snapshot.forEach(doc => {
      tmp.push(doc.data());
      console.log(doc.data());
      
    });
    this.setState({
        emptyList: tmp,
      });
    console.log(this.state.emptyList);
    }
    render() {
     
        return (
          //<SafeAreaView style={styles.allContainer}>
          <View style={{flex:1 , backgroundColor:'#fff'}}>
          <ImageBackground
              source={require('../app/assets/back.png')}
              style={StyleSheet.absoluteFillObject}
              blurRadius={50}
              resizeMode="cover"
            />
           <TouchableOpacity onPress={()=>this.props.navigation.navigate("AdminHomePage")}>
                <Image
                style={styles.backButton}
                source={require('../app/assets/backButton.png')} 
        
                /> 
            </TouchableOpacity> 
          <FlatList
          // const scrollY = React.useRef(new Animated.value(0)).current;
          data={this.state.emptyList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 , padding: 20, paddingTop: StatusBar.currentHeight || 42}}
          ListHeaderComponent={
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
          }
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
                    <View style={styles.info}>
                    <Text style={{fontSize:22 , fontWeight: '700' ,textAlign:'right'}}>שם:</Text>
                    <Text style={{fontSize:22 , fontWeight: '700' ,textAlign:'right'}}> {item.name} </Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:18 , opacity: .7,textAlign:'right'}}>מספר עסק מורשה: </Text>
                    <Text style={{fontSize:18 , opacity: .7,textAlign:'right'}}> {item.businessNumber} </Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}>שם בעל העסק:</Text>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}> {item.ownerName}</Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}>שפות:</Text>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}> {item.languages}</Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}>מייל:</Text>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}> {item.email}</Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}>כתובת:</Text>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}> {item.address}</Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}>עיר:</Text>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}> {item.city}</Text>
                    </View>
                    <View style={styles.info}>
                    <Text style={{fontSize:16 , opacity: .8,textAlign:'right'}}>מספר טלפון:</Text>
                    <Text style={{fontSize:16 , opacity: .8 , color: '#0099cc',textAlign:'right'}}> {item.phone_number}</Text>
                    </View>
                </View>
        )
          }}
        />

            </View>
         // </SafeAreaView>
        );
    }  
}
const styles = StyleSheet.create({
  allContainer:{
    flex:1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight *1.5 : 0,
  },
    container:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    info:{
        flexDirection:'row-reverse',
        textAlign:'right',
        padding: 3,
    },
    button:{
    //marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
      marginTop:"10%",
      },
    list:{
        flex:1,
        backgroundColor: '#ffff',
        padding: 20,
        flexDirection: 'column',
        paddingTop: 20,
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
export default RequestsList;