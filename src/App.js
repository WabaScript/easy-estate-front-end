import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigator'
import AppTabNavigator from './navigation/AppTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import Store from './actions/Store'

const RootStack =createStackNavigator()

export default function App() {
    return (
      <Store>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
            <RootStack.Screen name={"MainStack"} component={MainStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
      </Store>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
