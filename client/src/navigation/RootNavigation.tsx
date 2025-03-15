import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Loginscreen from "../screen/Loginscreen"
import Signupscreen from "../screen/Signupscreen"
import Homescreen from "../screen/Home"
import ReceipeDetailsScreen from "../screen/ReceipeDetailsScreen"

export type RootStackParamsList = {
    Home : undefined,
    Loginscreen : undefined,
    Signupscreen : undefined,
    ReceipeDetailsScreen : {ReceipeId : string}
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const RootNavigation : React.FC = ()=>{
return <Stack.Navigator initialRouteName="Loginscreen">
<Stack.Screen name="Loginscreen" component={Loginscreen} options={{headerShown: false}}/>
<Stack.Screen name="Signupscreen" component={Signupscreen} options={{headerShown: false}}/>
<Stack.Screen name="Home" component={Homescreen} options={{headerShown: false}}/>
<Stack.Screen name="ReceipeDetailsScreen" component={ReceipeDetailsScreen}/>
</Stack.Navigator>
}

export default RootNavigation