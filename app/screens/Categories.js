import { StyleSheet, Text, View ,Button,FlatList,SafeAreaView,TextInput} from 'react-native'
import React, { Component } from 'react'
import {addBusiness, getBusiness} from '../api/CategoriesApi';
//import {ListItem , Divider} from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import { render } from 'react-dom';
class Categories extends Component {
    category = [
        'arts' , 'cars' , 'catering' , 'electricians' , 'fitness',
        'grocery','music','renovations','repair', 'technicians', 'treatment',
        'various','cosmetics','teaching'
    ]

    state = {
        businessList: [],
        currentBusiness: null,
    }
    onBusinessAdded = (business)=>{
        console.log("business Added");
        console.log(business);
    }
   
    onBusinessReceived = (businessList)=>{
        console.log(businessList);
        this.setState(prevState => ({
            businessList: prevState.businessList = businessList
        }));
    }
    componentDidMount () {

        getBusiness(this.onBusinessReceived);
    }

    
    render(){
    return (
        <SafeAreaView>
          <View style={styles.row}>
            <TextInput 
            style={styles.input}
            placeholder="Add Business"
            value={this.state.currentBusiness}
            onChangeText ={(text) => this.setState(prevState =>({
                currentBusiness: prevState.currentBusiness = text
            } 
            ))
        }/>
        <Button 
        title ='Submit'
        style={styles.button}
        onPress={()=>
        addBusiness({
            name: this.state.currentBusiness,
            category: this.category[Math.floor(Math.random()*this.category.length)]
        },
        this.onBusinessAdded
        )
        }
        />
        </View>
        <FlatList
            data={this.state.businessList}

        ></FlatList>   
 
        </SafeAreaView>
    );
    }
}

export default Categories;

const styles = StyleSheet.create({});