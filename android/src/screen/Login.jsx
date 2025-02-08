import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.formcontainer}>
        <TextInput style={styles.textinput} placeholder='Email' keyboardType='email-address'/>
        <TextInput style={styles.textinput} placeholder='Password' secureTextEntry/>
        <TouchableOpacity style={styles.loginbtn}>
            <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
     <View>
        <Text>Don't have an Account ?</Text>
     </View>
     <TouchableOpacity>
        <Text>Sign Up</Text>
     </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: 'red'
},
headingcontainer:{
    flex: 0.5,
    backgroundColor: 'green'
},
heading:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginTop: 50
},
formcontainer:{
    flex:1,
    backgroundColor: 'yellow',
    padding: 10,
    justifyContent: 'center',
    gap: 10,
},
textinput:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    margin: 4
},
loginbtn:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    margin: 4
},
btntext:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
}
})