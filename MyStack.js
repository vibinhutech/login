import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SiginScreen from './screen/SiginScreen';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import PostDetailScreen from './screen/PostDetailScreen';
import LinkingScreen from './screen/LinkingScreen';
import ProfileScreen from './screen/ProfileScreen';
const Stack = createNativeStackNavigator();
export default function MyStack() {

  return (
   
    <Stack.Navigator>
        <Stack.Screen 
        name='Login'
        component={LoginScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name='Signin' 
        component={SiginScreen} 
        options={{headerShown:false}}
        />
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{headerShown:false}}
        /> 
        <Stack.Screen 
        name="PostDetail"
        component={PostDetailScreen}
        options={{headerShown:false}}

        />
        <Stack.Screen 
        name="LinkingScreen" 
        component={LinkingScreen} 
        />
        <Stack.Screen 
        name="ProfileScreen" 
        component={ProfileScreen} 
        />
        

       
    </Stack.Navigator>
  )
}