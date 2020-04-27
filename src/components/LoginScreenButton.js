import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
 
export default function LoginScreenButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text style={styles.text}> {title.toUpperCase()} </Text>
    </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "saddlebrown",
    width: "50%",
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    borderRadius: 10
  },
  text: {
      fontSize: 20,
      fontWeight: '700',
      color: 'white'
  }
});