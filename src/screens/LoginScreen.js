import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import LoginScreenButton from '../components/LoginScreenButton';
import LoginScreenRegButton from '../components/LoginScreenRegButton';
import QuickHomeButton from '../components/QuickHomeButton';
import Error from '../components/Error';
import {Context} from '../components/Store'
 
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useContext(Context);

  const loginObj = {
      email: email, 
      password: password
  }

  handleLoginSubmit = () => {
    fetch("http://10.0.0.113:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(loginObj)})
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        dispatch({type: "SET_CURRENT_USER", payload: response})
        navigation.navigate("MainStack")
      }
    })
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Heading style={styles.title}>Welcome Home</Heading>
        <Error error={" "} />
        <Input 
          style={styles.input} 
          placeholder={"Enter E-mail..."} 
          keyboardType={'email-address'} 
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)} value={email} 
        />
        <Input 
          style={styles.input} 
          placeholder={"Enter Password..."} 
          secureTextEntry 
          onChangeText={(text) => setPassword(text)} value={password} 
        />
        <LoginScreenButton title={"LOGIN"} style={styles.loginButton} onPress={handleLoginSubmit}/>
        <LoginScreenRegButton title={"Register"} style={styles.registerButton} onPress={() => {navigation.navigate('Registration')}} />
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
  },
  registerButton: {
    marginVertical: 10
  }
});