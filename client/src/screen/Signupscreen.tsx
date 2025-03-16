import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { RootStackParamsList } from "../navigation/RootNavigation";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";



type SignupscreenNavigationProps = NativeStackNavigationProp<RootStackParamsList, "Signupscreen">

interface SignupscreenProps {
    navigation: SignupscreenNavigationProps
}





const Signupscreen: React.FC<SignupscreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(AuthContext)
    const HandleSignup = async () => {
        if (email && password) {
            const success = await signUp(email, password)
            if (success) {
             Alert.alert("Sign Up Successful", "You have successfully signed up")
             navigation.navigate("Loginscreen")
            }

            else {
                Alert.alert("Sign Up Failed", "Please try again with a different email")
            }
        }
            else {
                Alert.alert("Invalid Input", "Please enter both email and password")
            }

    }


    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>Sign Up</Text>
            <TextInput style={styles.input} placeholder="Email" value={email}
                onChangeText={setEmail}
                keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input}
                value={password} onChangeText={setPassword}
                placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={HandleSignup}>
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Loginscreen")}>
                <Text style={styles.linktext}>Already have an account ? Log In</Text>
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

export default Signupscreen