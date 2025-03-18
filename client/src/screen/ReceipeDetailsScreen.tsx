import { RouteProp } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native"
import { RootStackParamsList } from "../navigation/RootNavigation";
import { useContext, useEffect, useState } from "react";
import { Receipe, ReceipeContext } from "../context/ReceipeContext";
import { FooterComponent } from "react-native-screens/lib/typescript/components/ScreenFooter";
import { ScrollView } from "react-native-gesture-handler";



type ReceipeDetailsScreenRouteProp = RouteProp<RootStackParamsList, 'ReceipeDetailsScreen'>

interface ReceipeDetailsScreenProp{
    route: ReceipeDetailsScreenRouteProp
}

const ReceipeDetailsScreen: React.FC<ReceipeDetailsScreenProp> = ({route}) => {
    const [receipeDetails, setReceipeDetails] = useState<Receipe | null>(null)
    const {ReceipeId} = route.params
    const {fetchsingleReceipe} = useContext(ReceipeContext)

    useEffect(()=>{
      const fetchReceipe = async()=>{
          const fetchedReceipe = await fetchsingleReceipe(ReceipeId)
          setReceipeDetails(fetchedReceipe)
      }
      fetchReceipe()
    },[ReceipeId])


    if(!receipeDetails){
        return <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <ScrollView style={styles.container}>
            <Text>{receipeDetails?.title}</Text>
            <Text>{receipeDetails?.description}</Text>
            <Text>{receipeDetails?.difficulty}</Text>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
    }
})

export default ReceipeDetailsScreen