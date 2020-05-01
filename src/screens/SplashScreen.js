import React, { Component, useContext, useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import {Context} from '../actions/Store'
import QuickHomeButton from '../components/QuickHomeButton'


function SplashScreen({navigation}) {

  const [state, dispatch] = useContext(Context);

  const AutoSignIn = () => {
    let storedUserId = AsyncStorage.getItem("storedUserId")
      storedUserId.then(id => {
        fetch(`http://10.0.0.113:3000/auto_login`, {
          headers: {
            "Authorization": parseInt(id)
          }
        })
        .then(response => response.json())
        .then(response => {
          if (response.errors){
            alert(response.errors)
          } else {
              dispatch({ type: 'SET_CURRENT_USER', payload: response })
          }
        })
      })
  }

  useEffect(() => {
    AutoSignIn()
  }, []);

    return (
        <>
        {state.currentUser ? navigation.navigate('MainStack') : navigation.navigate('Login')}
        <View style={styles.container}>
            <Text>I'm Splashy!</Text>
            <QuickHomeButton title={"Quick Home View"} onPress={() => {navigation.navigate('MainStack')}}/>
        </View>
        </>
    );
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});