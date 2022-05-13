import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

function AdminHomePage(props) {
const { onPress, title = 'Save' } = props;
  return (
    <View style={styles.screenContainer}>
        <TouchableOpacity style={styles.button1} onPress={onPress}>
            <Text style={styles.text}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}>
            <Text style={styles.text}>Businesses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={onPress}>
            <Text style={styles.text}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}>
            <Text style={styles.text}>Reports</Text>
        </TouchableOpacity>
    </View>
  );
};
//#68A19B
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    // padding: 16,
    marginBottom: '40%',
    marginTop: '40%',
    color: 'white',
  },
  button2: {
   backgroundColor:"#B5D9D7",
   width: '70%',
   justifyContent:'center',
   height:60,
   alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  button1: {
   backgroundColor:"#68A19B",
   width: '70%',
   justifyContent:'center',
   height:60,
   alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
    alignItems:'center',
  },
});

export default AdminHomePage;