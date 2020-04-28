import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView, Keyboard, KeyboardAvoidingView, Switch, FlatList} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import LoginScreenRegButton from '../components/LoginScreenRegButton';
import QuickHomeButton from '../components/QuickHomeButton';
import Error from '../components/Error';
 
export default function RegistrationScreen({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [proPic, setProPic] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [realtor, setRealtor] = useState(false);

    const toggleSwitch = () => setRealtor(prevState => !prevState);

    const handleSubmit = () => {
        const newUserPost = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: {
               first_name: firstName,
               last_name: lastName,
               email: email,
               password: password,
               pro_pic: proPic,
               city: city,
               state: state,
               realtor: realtor
            }})
        }
        fetch(`http://10.0.0.113:3000/api/v1/users`, newUserPost)
            .then((response) => response.json())
            .then((json) => alert("Thank You for Registering!"))
            .catch((error) => console.error(error))
    }


  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView >
        <KeyboardAvoidingView contentContainerStyle={styles.container}
                keyboardVerticalOffset={10} behavior={"position"}>
        <View style={styles.container}>
        <Heading style={styles.title}>Please Sign Up</Heading>
        <Error error={" "} />
        </View>
        <Input 
            style={styles.input} 
            placeholder={"Enter First Name ..."} 
            onChangeText={(text) => setFirstName(text)} value={firstName}
        />
        <Input 
            style={styles.input} 
            placeholder={"Enter Last Name ..."} 
            onChangeText={(text) => setLastName(text)} value={lastName}
        />
        <Input 
            style={styles.input} 
            placeholder={"Enter E-mail..."} 
            onChangeText={(text) => setEmail(text)} value={email}
            keyboardType={'email-address'} 
        />
        <Input 
            style={styles.input} 
            placeholder={"Enter Password..."}
            onChangeText={(text) => setPassword(text)} value={password}
            secureTextEntry
        />
        <Input 
            style={styles.input} 
            placeholder={"Enter City"} 
            onChangeText={(text) => setCity(text)} value={city}
            keyboardType={'email-address'} 
        />
        <Input 
            style={styles.input} 
            placeholder={"Enter State ..."} 
            onChangeText={(text) => setState(text)} value={state}
            keyboardType={'email-address'} 
        />
        <Input 
            style={styles.input} 
            placeholder={"Insert Profile Image Link..."} 
            onChangeText={(text) => setProPic(text)} value={proPic}
            keyboardType={'email-address'} 
        />
        <View style={styles.realtorBool}>
            <Text >Realtor?</Text>
            <Switch
                label={"Realtor?"}
                trackColor={{ false: "#767577", true: "#8f4c00" }}
                thumbColor={realtor ? "#94ff57" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={realtor}
                />
        </View>
        <LoginScreenRegButton title={"Register"} style={styles.loginButton} onPress={() => {handleSubmit(); navigation.navigate('Login')}} />
        <QuickHomeButton title={"Return To Login"} onPress={() => {navigation.goBack()}}/>
    </KeyboardAvoidingView>
    </ScrollView>
    </TouchableWithoutFeedback>
    );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 20,
    alignItems: 'center',
    justifyContent: "center"
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
  realtorBool: {
    flexDirection: 'row',
    backgroundColor: "lightgrey",
    width: '100%',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 10
  },
});