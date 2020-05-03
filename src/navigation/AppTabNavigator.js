import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base'
import NewListingScreen from '../screens/NewListingScreen'
import SearchScreen from '../screens/SearchScreen'
import HomeScreen from '../screens/HomeScreen'


const Tab = createBottomTabNavigator();


function AppTabNavigator({ navigation }) {
    return (
      <Tab.Navigator 
        initialRouteName='Home'
          animationEnabled={true}
          tabBarOptions={{
              activeTintColor: 'saddlebrown',
              inactiveTintColor: '#d1cece',
              showLabel: false,
              showIcon: true
          }}
        >
        <Tab.Screen name="New Post" component={NewListingScreen} 
            options={{ 
                tabBarIcon: ({color}) => (
                    <Icon type="Entypo" name="new-message" style={{color}} />
                ),
            }} 
        />
        <Tab.Screen name="Home" component={HomeScreen} 
            options={{ 
                tabBarIcon: ({color}) => (
                    <Icon type="Entypo" name="home" style={{color}} />
                ),
            }} 
        />
        <Tab.Screen name="Search" component={SearchScreen} 
            options={{ 
                tabBarIcon: ({color}) => (
                    <Icon type="AntDesign" name="search1" style={{color}} />
                ),
            }} 
        />
      </Tab.Navigator>
    );
  }

  export default AppTabNavigator;