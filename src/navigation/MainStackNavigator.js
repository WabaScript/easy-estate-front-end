import React, { Component, useContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, AsyncStorage } from 'react-native'
import { Icon } from 'native-base'
import AppTabMain from '../screens/AppTabMain'
import ProfileScreen from '../screens/ProfileScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Context} from '../actions/Store'

const MainStack = createStackNavigator()

function MainStackNavigator({ navigation }) {

  const [state, dispatch] = useContext(Context)

  const handleLogout = () => {
    AsyncStorage.removeItem("storedUserId")
    dispatch({type: "SET_CURRENT_USER", payload: null})
      alert("You have been logged out!")
      navigation.navigate("Login")
  }

  return (
      <MainStack.Navigator initialRouteName='AppTabMain'>
        <MainStack.Screen 
            name='AppTabMain' 
            component={AppTabMain}
            headerBackTitle="🏠"  
            options={({navigation}) => ({ 
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                      <Icon type="AntDesign" name="home" style={{paddingLeft:10}} />
                    </TouchableOpacity>
                ),
                headerTitle: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('AuthStack')}>
                    <Text>Easy🏠Estate</Text>
                  </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                        <Icon type="AntDesign" name="user" style={{paddingRight:10}} />
                    </TouchableOpacity>
                )
            })} 
        />
        <MainStack.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{ headerTransparent:true, title: null, headerBackTitle: "🏠",
              headerRight: () => (
                <TouchableOpacity onPress={handleLogout}>
                    <Icon type="AntDesign" name="logout" style={{paddingRight:10}} />
                </TouchableOpacity>
            )}}
        />
      </MainStack.Navigator>
  )
}
export default MainStackNavigator