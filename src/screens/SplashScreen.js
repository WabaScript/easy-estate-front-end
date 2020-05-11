import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage, Image } from "react-native";
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
          console.log(response.errors)
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
            <Text>I'm a Splash Screen!</Text>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10 }} >
              <Image source={require('../../assets/houseIcon2.gif')} style={{width: 50, height: 50}}/>
            </View>
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