import { View, Text,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HomeCard(props) {
  // console.warn("home scrren userid",props.userId)
  const nav=useNavigation()
  return (
    <View  style={styles.maincardbody}>
    <View>
    <Text style={styles.maincardtext}>{props.title}</Text>
      <Text>{props.body}</Text>
      {/* <Pressable onPress={()=>navigation.navigate("PostDetail",{userid:props.userId})}>
        <Text>Read more</Text>
      </Pressable> */}
      <Pressable onPress={()=>props.navigation.navigate("PostDetail",{userid:props.userId})}>
      <Text style={{color:"red"}}>Read more</Text>
      </Pressable>
    </View>

      
    </View>
  )
}

const styles= StyleSheet.create({
    maincardbody:{
        backgroundColor:"gray",
        margin:10,
    }
})