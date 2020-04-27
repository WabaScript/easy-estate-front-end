import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
 
export default function Input({style, ...props}) {
  
    return <TextInput {...props} style={[styles.input, style]} />
}
 
const styles = StyleSheet.create({
  input: {
    backgroundColor: "lightgrey",
    width: '100%',
    padding: 15,
    borderRadius: 10
  },
});