import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator'
import AppTabNavigator from './src/navigation/AppTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import Store from './src/actions/Store'
import { locHost } from './src/helpers/localhost'

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
