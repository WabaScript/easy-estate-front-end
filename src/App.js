import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './navigation/MainStackNavigator'
import AppTabNavigator from './navigation/AppTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigation/AuthStackNavigator';

const RootStack =createStackNavigator()

export default function App() {
    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
            <RootStack.Screen name={"MainStack"} component={MainStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
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
