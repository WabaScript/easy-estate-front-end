import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
 
export default function RegionButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    width: "100%",
    padding: 15,
    borderRadius: 10
  },
  placeholder: {
      color: '#a1a1a1'
  }
});