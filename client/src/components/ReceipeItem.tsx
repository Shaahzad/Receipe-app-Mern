import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Receipe } from "../context/ReceipeContext"

interface ReceipeItemProps {
    receipe: Receipe
}
const ReceipeItem: React.FC<ReceipeItemProps> = ({receipe}) => {
    return (
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
           <Text style={styles.title}>{receipe.title}</Text>
           <Text style={styles.description} numberOfLines={2}>{receipe.description}</Text>
           <Text style={styles.difficulty}>{receipe.difficulty}</Text>
          </View>
          <TouchableOpacity style={styles.deleteButton}>
            <Text>Delete</Text>
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

    },
    title:{

    },
    description:{

    },
    difficulty:{

    },
    deleteButton:{
        
    }
})
export default ReceipeItem