import { useContext } from "react";
import { Alert, Button, Text, View } from "react-native"
import { AuthContext } from "../context/AuthContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigation/RootNavigation";


type HomescreenNavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">

interface HomescreenProps {
    navigation: HomescreenNavigationProps
}


const Homescreen: React.FC<HomescreenProps> = ({navigation}) => {
    const {signOut} = useContext(AuthContext)
    const Handlelogout = async()=>{
        Alert.alert("Logout","Are you sure you want to logout?",
            [{text:"Cancel", style: "cancel"},{text:"Logout",onPress: async()=>{
                await signOut()
                navigation.replace("Loginscreen")
            }}])
    }
    return (
        <View>
            <Text>Homescreen</Text>
            <Button title="Logout" onPress={() => {Handlelogout}}/>
        </View>
    );

}

export default Homescreen