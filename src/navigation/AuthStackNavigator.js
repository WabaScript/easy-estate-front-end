import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SplashScreen from '../screens/SplashScreen'

const AuthStack = createStackNavigator()

const AuthStackNavigator = ({navigation}) => {

  return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name={"Splash"} component={SplashScreen} />
          <AuthStack.Screen name={"Login"} component={LoginScreen} />
          <AuthStack.Screen name={"Registration"} component={RegistrationScreen} />
      </AuthStack.Navigator>

  );
}
export default AuthStackNavigator