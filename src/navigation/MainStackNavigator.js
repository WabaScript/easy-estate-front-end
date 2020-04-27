import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
import { Icon } from 'native-base'
import AppTabMain from '../screens/AppTabMain'
import ProfileScreen from '../screens/ProfileScreen'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MainStack = createStackNavigator()

function MainStackNavigator({ navigation }) {
  return (
      <MainStack.Navigator initialRouteName='AppTabMain'>
        <MainStack.Screen 
            name='AppTabMain' 
            component={AppTabMain}
            headerBackTitle="🏠"  
            options={({navigation}) => ({ 
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                      <Icon type="FontAwesome" name="home" style={{paddingLeft:10}} />
                    </TouchableOpacity>
                ),
                headerTitle: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('AuthStack')}>
                    <Text>Easy🏠Estate</Text>
                  </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                        <Icon type="Octicons" name="person" style={{paddingRight:10}} />
                    </TouchableOpacity>
                )
            })} 
        />
        <MainStack.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{ title: 'Current User', headerBackTitle: "🏠" }}
        />
      </MainStack.Navigator>
  )
}
export default MainStackNavigator