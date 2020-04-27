import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
 
export default function Heading({children, style, ...props}) {
  return (

        <Text {...props} style={[styles.text, style]}> 
            {children} 
        </Text>

    );
}
 
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});