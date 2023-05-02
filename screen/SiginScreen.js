import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from "@react-native-material/core";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,

} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';


// import Google from 'react-native-vector-icons/google';
import { Icon } from '@react-native-material/core';




export default function SiginScreen(props) {
  // GoogleSignin.configure({
  //   WebclientID:'644269947005-44lckb6manqas0is2qte0jm9pfepkd4j.apps.googleusercontent.com'
  // })

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [hidepass, sethidepass] = useState(true)
  const [errormsg, seterrormsg] = useState("")
  const [checkfield, setcheckfield] = useState(false)
  const showpassword = () => {
    sethidepass((prev) => !prev)
  }
  const loginhandler = async () => {
    // console.warn("login",email)
    // console.warn("login", password)
    try {
      console.warn("login", email)
      console.warn("login", password)

      if (!email == "" && !password == "") {
        const isuser = await auth().signInWithEmailAndPassword(email, password)

        console.warn("isuser", isuser)

        // navigation.navigate("Home")
        props.navigation.navigate("ProfileScreen")
      }
      else {
        setcheckfield(true)
      }
    }
    catch (err) {
      console.warn("error msg", err.message)
      seterrormsg(err.message)
    }





  }

  const googlesignin = async () => {
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken)

    const res = auth().signInWithCredential(googleCredential)

    res.then((user) => {
      // console.warn(user.additionalUserInfo.profile)
      const email = user.additionalUserInfo.profile.email
      const name = user.additionalUserInfo.profile.name
      console.warn("name", name)
      if (user) {
        // navigation.navigate("Home")
        props.navigation.navigate("ProfileScreen")
      }

    })
      .catch((error) => {
        console.warn(error)
      }
      )
    //     const accesstoken= await (await GoogleSignin.getTokens()).accessToken
    // console.warn("accesstoken",accesstoken)
    // const GoogleSignin=await GoogleSignin.hasPlayServices(); 
    // const {accessToken, idToken} = await GoogleSignin.signIn();
    // console.warn(accessToken)




  }

  useEffect(() => {

    GoogleSignin.configure({
      scopes: ['email'], 
      webClientId:
        '644269947005-vj5ftjfvqddnic2745la33r1p6umo6vu.apps.googleusercontent.com', 
      offlineAccess: true, 
    });
  })

  return (
    <View style={styles.loginmain}>
      <View style>
        <TextInput
          label='Email'
          variant='outlined'
          onChangeText={(text) => setemail(text)}


        />

        <TextInput
          label='Password'
          variant='outlined'
          style={{ marginTop: 10 }}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry={hidepass}
          trailing={
            hidepass ? (
              <TouchableOpacity onPress={showpassword}>
                <Image style={styles.passwordicon} source={require("../images/closed-eyes.png")} />
              </TouchableOpacity>
            ) :
              (
                <TouchableOpacity onPress={showpassword}>
                  <Image style={styles.passwordicon} source={require("../images/eye.png")} />
                </TouchableOpacity>
              )

          }

        />

        <Button
          title="Login"
          style={{ marginTop: 10 }}
          onPress={loginhandler}
        >



        </Button>



        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>
              Create an account
              <Text style={{ color: "red", fontSize: 18 }}> Sign Up</Text>
            </Text>

          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ textAlign: "center", marginTop: 10 }}>{errormsg ? errormsg : null}</Text>
        </View>
        <View>
          {checkfield && <Text style={{ color: "red", textAlign: "center" }}>All field are required</Text>}
        </View>


      </View>
      <View style={styles.buttoncontainer}>
        <Text>
        <GoogleSigninButton
  style={{ width: 192, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={googlesignin}
  // disabled={this.state.isSigninInProgress}
/>;

        </Text>
   
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  loginmain: {
    flex: 1,
    margin: 24,
    justifyContent: "center"



  },
  passwordicon: {
    height: 20,
    width: 20


  },
  buttoncontainer: {
    flex:1,
    alignItems:"center"
  }
  
 


})