import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootStackParamsList } from "../navigation/RootNavigation";
import { TextInput } from "react-native-gesture-handler";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

type LoginscreenNavigationProp = NativeStackNavigationProp<RootStackParamsList, 'Loginscreen'>

interface LoginscreenProps {
    navigation: LoginscreenNavigationProp
}

const Loginscreen: React.FC<LoginscreenProps> = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn} = useContext(AuthContext)
    const HandleLogin = async()=>{
      if(email && password){
        const result = await signIn(email, password)
        if(result){
          navigation.navigate("Home")
        }else{
          Alert.alert("Login Failed", "Please try again with a different email")
        }
      }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>Log In</Text>
            <TextInput style={styles.input} placeholder="Email" value={email}
                onChangeText={setEmail}
                keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input}
                value={password} onChangeText={setPassword}
                placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={HandleLogin}>
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Signupscreen")}>
                <Text style={styles.linktext}>New here? Sign Up</Text>
            </TouchableOpacity>
        </View> 
           );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    headertext: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    button: {
        width: "100%",
        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10
    },
    btntext: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    linktext: {
        marginTop: 10,
        color: "blue"
    }
})

export default Loginscreen