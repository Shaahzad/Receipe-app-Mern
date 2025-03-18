import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Receipe } from "../context/ReceipeContext"

interface ReceipeItemProps {
    receipe: Receipe;
    onPressReceipeItem:()=>void
}
const ReceipeItem: React.FC<ReceipeItemProps> = ({receipe, onPressReceipeItem}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPressReceipeItem}>
          <View style={styles.cardContent}>
           <Text style={styles.title}>{receipe.title}</Text>
           <Text style={styles.description} numberOfLines={2}>{receipe.description}</Text>
           <Text style={styles.difficulty}>{receipe.difficulty}</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton} >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card:{
     backgroundColor: 'white',
     borderRadius: 8,
     padding: 16,
     marginHorizontal: 16,
     marginVertical: 8,
     shadowColor: '#000',
     shadowOffset:{
      width: 0,
      height: 2  
     },
     shadowOpacity: 0.1,
     shadowRadius: 4,
     elevation: 5
    },
    cardContent:{
    flex: 1
    },
    title:{
     fontSize: 18,
     fontWeight: 'bold',
     marginBottom: 8
    },
    description:{
     fontSize: 15,
     color: '#666',
     marginBottom: 10
    },
    difficulty:{
        fontSize: 12,
        color: '#007afd',
        fontWeight: 'bold'
       },
    deleteButton:{
     position: 'absolute',
     top: 35,
     right: 10,
     backgroundColor: '#070706',
     paddingHorizontal: 16,
     paddingVertical: 8,
     borderRadius: 4
    },
    deleteButtonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
    }

})
export default ReceipeItem