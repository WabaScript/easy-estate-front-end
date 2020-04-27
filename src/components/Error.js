import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
 
export default function Error({error}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> {error} </Text>
    </View>

    );
}
 
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5
  },
  text: {
      color: 'red',
      fontWeight: "bold"

  }
});