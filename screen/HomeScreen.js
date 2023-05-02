import { View, Text,FlatList,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function HomeScreen(props) {
  // console.warn("HomeScreen",props)
    const [data, setdata]= useState(undefined)
    const getdata=async()=> {
      try {
        const url="https://jsonplaceholder.typicode.com/posts"
        let result= await fetch(url)
        result= await result.json()
        setdata(result)
      }
      catch(err){
        console.warn(err.message)
      }
    }

    useEffect(()=> {
        getdata()

    },[])
    // console.warn("data",data)
  return (
    <View>
      <View>
        < Pressable onPress={()=>props.navigation.navigate("LinkingScreen")}>
          <Text>Go to linking screen</Text> 
        </Pressable>
      </View>
      {
        data?<FlatList 
        data={data} 
        renderItem={({item})=> <HomeCard 
        // props={props.navigation}
        id={item.id}
        userId={item.userId}
        title={item.title} 
        body={item.body}
        navigation={props.navigation}

        
        />
      }
        />:null
    
      }
    </View>
  )
}