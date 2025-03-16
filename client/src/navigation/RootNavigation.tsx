import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import Loginscreen from "../screen/Loginscreen"
import Signupscreen from "../screen/Signupscreen"
import Homescreen from "../screen/Home"
import ReceipeDetailsScreen from "../screen/ReceipeDetailsScreen"
import { useNavigation } from "@react-navigation/native"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"

export type RootStackParamsList = {
    Home : undefined,
    Loginscreen : undefined,
    Signupscreen : undefined,
    ReceipeDetailsScreen : {ReceipeId : string}
}

const Stack = createNativeStackNavigator<RootStackParamsList>()
type NavigationProp = NativeStackNavigationProp<RootStackParamsList>
const RootNavigation : React.FC = ()=>{
const navigation = useNavigation<NavigationProp>()
const {isAuthenticated, isLoading} = useContext(AuthContext)

useEffect(()=>{
if(!isLoading){
    if(isAuthenticated){
        navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        })
    }else{
        navigation.reset({
            index: 0,
            routes: [{name: "Loginscreen"}]
        })
    }
}
},[isAuthenticated, isLoading, navigation])
return <Stack.Navigator initialRouteName="Loginscreen">
<Stack.Screen name="Loginscreen" component={Loginscreen} options={{headerShown: false}}/>
<Stack.Screen name="Signupscreen" component={Signupscreen} options={{headerShown: false}}/>
<Stack.Screen name="Home" component={Homescreen} options={{headerShown: false}}/>
<Stack.Screen name="ReceipeDetailsScreen" component={ReceipeDetailsScreen}/>
</Stack.Navigator>
}

export default RootNavigation