import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import LoginScreenButton from '../components/LoginScreenButton';
import QuickHomeButton from '../components/QuickHomeButton';
import Error from '../components/Error';
 
export default function LoginScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Heading style={styles.title}>Welcome Home</Heading>
        <Error error={" "} />
        <Input style={styles.input} placeholder={"Enter E-mail..."} keyboardType={'email-address'}/>
        <Input style={styles.input} placeholder={"Enter Password..."} secureTextEntry/>
        <LoginScreenButton title={"LOGIN"} style={styles.loginButton} onPress={() => {}}/>
        <QuickHomeButton title={"Quick Home View"} onPress={() => {navigation.navigate('MainStack')}}/>
    </View>
    </TouchableWithoutFeedback>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20
  },
  input: {
      marginVertical: 10
  },
  loginButton: {
      marginVertical: 10
  }
});