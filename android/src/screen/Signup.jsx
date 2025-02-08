import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} >
      <View style={styles.headingcontainer}>
      <Text style={styles.heading}>Signup</Text>
      </View>
      <View style={styles.formcontainer}>
      <TextInput placeholder="Name" style={styles.textinput}/>
        <TextInput placeholder="Email" style={styles.textinput} keyboardType='email-address'/>
        <TextInput placeholder="Password" style={styles.textinput} secureTextEntry/>
        <TouchableOpacity style={styles.signupbtn}>
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.extratextcontainer}>
        <Text style={styles.extratext}>Already have an account?</Text>
        <TouchableOpacity>
        <Text style={styles.signlink}>Sign In</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingcontainer:{
    flex: 0.5 
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
    gap: 10,
    padding: 10,
    justifyContent: 'center'
  },  
  textinput:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    margin: 4
  },
  signupbtn:{
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  btntext:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20  
  },
  extratextcontainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  extratext:{
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },
signlink:{
  fontSize: 20,
  padding: 10
}

})