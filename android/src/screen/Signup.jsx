import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <SafeAreaView>
      <View style={styles.headingcontainer}>
      <Text style={styles.heading}>Signup</Text>
      </View>
      <View style={styles.formcontainer}>
      <TextInput placeholder="Name" style={styles.textinput}/>
        <TextInput placeholder="Email" style={styles.textinput}/>
        <TextInput placeholder="Password" style={styles.textinput}/>
        <TouchableOpacity style={styles.signupbtn}>
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.extratextcontainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity>
        <Text>SignIn</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  headingcontainer:{
    flex:1,
    backgroundColor: 'green',
    
  },
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formcontainer:{
    flex:1,
    backgroundColor: 'green',
    gap: 10,
  },  
  textinput:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10
  },
  signupbtn:{
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10
  },
  btntext:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20  
  },
  extratextcontainer:{
    flex:1,
    backgroundColor: 'green'
  },

})