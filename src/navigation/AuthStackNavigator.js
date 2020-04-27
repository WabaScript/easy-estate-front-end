import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Icon } from 'native-base'
import AppTabMain from '../screens/AppTabMain'
import ProfileScreen from '../screens/ProfileScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LoginScreen from '../screens/LoginScreen'

const AuthStack = createStackNavigator()

const AuthStackNavigator = ({navigation}) => {
  return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name={"Login"} component={LoginScreen} />
          {/* <AuthStack.Screen name={"Registration"} component={***} /> */}
      </AuthStack.Navigator>

  );
}
export default AuthStackNavigator