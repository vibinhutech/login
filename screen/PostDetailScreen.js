import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function PostDetailScreen(props) {

  console.warn(props.route.params)
  const params= props.route.params||{} 
  // const {userid}=props.route.params 
  const {userid}=params
  
  // const {userid}= route.params
  console.warn(" post detail screen userid",userid)
 const [detail,setdetail]=useState(undefined)
  const getspecificuser=async()=>{
    try {
  if(userid){
   let url=`https://jsonplaceholder.typicode.com/posts/${userid}`
 let result= await fetch(url) 
result=await result.json() 
  console.warn("result",result)
  setdetail(result)
  }
}
catch(err){
  console.warn(err.message)
}

}

 useEffect (()=> {
  getspecificuser()

},[])
console.warn("post detail",detail)
  return (
    <View style={styles.detailcontainer}>
      <Text style={{fontSize:20}}>Detail</Text>
      <Text style={styles.detailtext}>{detail?.title}</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  detailcontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    


  },
  detailtext:{
    textAlign:"center",
    marginLeft:20,
    marginRight:20,
   
  }
})