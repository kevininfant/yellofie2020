import React, { useState, Children } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = (props) => {
  const onPress=()=>{
    props.onPress();

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    margin:15,
    overflow: 'hidden', 
    paddingBottom: 6,
    paddingLeft:3,
    paddingRight:2
  },
  button: {
    height:45,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 90,
        elevation: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  text:{
    fontWeight:"bold",
    color:"black",
    fontSize:18
  }
});

export default Button;
