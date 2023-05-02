import { View, Text,Pressable,Linking } from 'react-native'
import React from 'react'

export default function LinkingScreen() {
const Url_A="demoApp://LoginPath"
const Url_B="demoApp://Sigin"
  return (
    <View>
     <Pressable onPress={()=>Linking.openURL(Url_A)}>
        <Text>Login </Text>
     </Pressable>
     <Pressable onPress={()=>Linking.openURL(Url_B)}>
        <Text>Sigin in</Text>
     </Pressable>
    </View>
  )
}