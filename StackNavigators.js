import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';
import { ActivityIndicator } from 'react-native';

export default function StackNavigators() {
  const deeplinking= {
    prefixes: ['https://demoapp.com','demoApp://'],
    config: {
      screens:{
      Login:{path:'LoginPath'},
      Home:{path:'HomePath'},
      Sigin:{path:'Sigin'},
    }
      },
    }
  
  return (
    <NavigationContainer 
    linking={deeplinking}
    fallback={<ActivityIndicator color="blue" size="large" />}
    
    >
<MyStack />
    </NavigationContainer>
  )
}