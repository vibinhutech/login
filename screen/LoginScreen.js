import React,{useState} from 'react'
import {View, Text, StyleSheet,TouchableOpacity,Image} from "react-native"
import { Badge, Stack } from "@react-native-material/core";
 import { TextInput,Button  } from "@react-native-material/core";
//  import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



 const LoginScreen= (props) => {
  const nav=useNavigation()
 const [firstname, setfirstname]=useState("") 
  const[lastname, setlastname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const [focus, setfocus]=useState(false)

  const [hidepassowrd, sethidepassword]=useState(true)

  const [errorstatus,seterrorstatus]=useState(false)
  const [errormsg, seterrormsg]=useState(false)

  const custom= focus?styles.textInput:styles.textInputFocus

  const showpasswordhandler=()=> {
    // console.warn("password handler pressed")
    sethidepassword((prev)=>!prev)
  }

  const Submithandler=async()=> {
    try {
    const data= {
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password,
    }
    const username= data.firstname
    const useremail= data.email
    // console.warn("data",data)
  
    if(!data.firstname=="" && !data.lastname=="" && !data.email=="" && !data.password=="" ){
      const isusercreated=await auth().createUserWithEmailAndPassword(email,password)
      console.log("isusercreated",isusercreated)
      if(isusercreated){
        // props.navigation.navigate("Signin") 
        props.navigation.navigate("Signin") 

        seterrorstatus(false)
      }
      const response= await database().ref(`user/${username}`).set(data)
      console.log("response",response)
        // props.navigation.navigate("Splash", {username:username, useremail:useremail})
    }
    else {
        // console.warn("enter all details")
        seterrorstatus(true)
        


    }
  }
  catch(err){
    console.log(err) 
    seterrormsg(err.message)
        

        

  }
  }
  return (
    <View style={{margin:35}}>
      <View>
        <Image source={require('../images/left.png')} style={styles.arrowimage}/>

      </View>
      
      <View>
        <Text style={styles.textContent}>Your Fries  </Text>
        <Text style={styles.textContent}>deserve better.</Text>
        <Text style={styles.textSub}>Join TomataBasil now. it's free!</Text>
      </View>

      <View>
        <TextInput
         variant="outlined" 
         label="FIRST NAME" 
         style={{margin:16}} 
        //  value={firstname}
         onChangeText={(text)=>setfirstname(text)}
        //  textContentType='string'
        onFocus={()=>setfocus(true)}
      
         />
        <TextInput 
        variant="outlined"
         label="LAST NAME" 
         style={{ margin: 16}} 
        //  value={lastname}
         onChangeText={(text)=>setlastname(text)}
        //  textContentType='string'
         />
        <TextInput 
        variant="outlined" 
        label="EMAIL"
         style={{ margin: 16}} 
        //  textContentType='email'
         value={email}
         onChangeText={(text)=>setemail(text)}
         />
         <View>
         <TextInput 
        variant="outlined" 
        label="PASSWORD"
         style={{ margin: 16}}
         secureTextEntry={hidepassowrd}
         textContentType='password'
         onChangeText={(text)=>setpassword(text)}
          value={password}
          trailing={
         
          hidepassowrd?(<TouchableOpacity onPress={showpasswordhandler} >
             <Image 
             style={styles.imagestyle}
              source={require('../images/eye.png')} />
             </TouchableOpacity>):
              (
                <TouchableOpacity onPress={showpasswordhandler}>
                  <Image
                  style={styles.imagestyle}
                  source={require('../images/closed-eyes.png')} 
                  />
                </TouchableOpacity>
              )
         }
         />
        
         </View>
        
        <View>
        <Button 
        title="Sign up" 
        style={styles.button}  
        onPress={Submithandler}
        />
        </View>
       
      </View>
      <View >
        <TouchableOpacity onPress={()=>props.navigation.navigate("Signin")}>
          <Text style={styles.siginTextMain}>Already have an account,<Text style={styles.siginsub}> Sign In</Text></Text>
        </TouchableOpacity>
      </View>
      <View >
        {errorstatus && <Text style={styles.errortext}>All fields mandatory</Text>}
      </View>
      <View>
        {
          errormsg?(<Text style={{color:"red", textAlign:"center",marginTop:10}}>{errormsg}</Text>):null
        } 
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  textContent:{
    color:"red",
    fontSize:28,
    fontWeight:"bold",
    marginLeft:10,
  }, 
  textSub:{
      fontSize:18,
      marginLeft:10,
  },
  button:{
    backgroundColor:"red",
    width:'90%',
    marginLeft:14,
    height:40,
    textAlign:"center",
    alignItems:"center",
    fontSize:18,
  },
  imagestyle: {
    height:20,
    width:20,
  }, 
  errortext: {
    color:"red",
    fontSize:20,
    marginTop:10,
    textAlign:"center",

  }, 
  arrowimage:{
    height:40,
    width:40,
    marginLeft:8,
    
  },
 siginTextMain: {
  textAlign:"center",
  color:"black",
  fontSize:17,
  marginTop:10


 },
 siginsub:{
  color:"red",
  fontSize:20

 }



  // textInput: {
  //   // backgroundColor:"white",
  //   borderColor:"black",
  //   margin: 16,
  //   underlineColorAndroid:"transparent",
  //   borderWidth:0.5,
    
  // },
  // textInputFocus:{
  //   borderColor:"red",
  //   margin: 16,
  //   underlineColorAndroid:"transparent",
  //   borderWidth:0.5,
  // }

}
)



    
  
export default LoginScreen;
