import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React ,{useEffect, useState}from 'react'

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export default function ProfileScreen(props) {
  const [email, setemail]=useState("")
  const getauth= async()=> {
    let authuser= await auth().currentUser
    console.warn("authuser", authuser)
    setemail(authuser.email)
  }
  console.log("email",email)

  // const logouthandler=async()=> {
  //   try{
  //        await GoogleSignin.revokeAccess();
  //        await auth().signOut();
     
  //     props.navigation.navigate("Login")
     
    // if(authlogout){
    //   props.navigation.navigate("login")
    // }
    // }
  //   catch(error){
  //     console.log(error)
  //   }

  // }
  
useEffect(()=>{
  getauth()
  
})

  return (
    
    <View style={styles.emailcontent}>
      <Text style={{color:"red"}}>Email: {email}</Text>
      <TouchableOpacity onPress={()=>props.navigation.navigate("HomeScreen")}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
       {/* <TouchableOpacity onPress={logouthandler}>
        <Text>logout</Text> 
      </TouchableOpacity>  */}
  
    </View>
  
    

  
   
  )
}


const styles=StyleSheet.create({
  emailcontent:{
    flex:1,
    textAlign:"center", 
    justifyContent:"center",
    alignItems:"center",
  }
})