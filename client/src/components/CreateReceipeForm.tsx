import { Picker } from "@react-native-picker/picker"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"



interface createreceipeFormProps {
onCancel: () => void
}


const CreateReceipeForm: React.FC<createreceipeFormProps> = ({onCancel}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Receipe</Text>
            <TextInput style={styles.input} placeholder="Receipe Title" />
            <TextInput style={[styles.input, styles.TextArea]} placeholder="Receipe Description" />
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Difficulty</Text>
                <Picker style={styles.picker}>
                    <Picker.Item label="Easy" value="easy" />
                    <Picker.Item label="Medium" value="medium" />
                    <Picker.Item label="Hard" value="Hard" />
                </Picker>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onCancel} style={[styles.button, styles.cancelButton]}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.submitButton]}>
                    <Text style={styles.buttonText}>Create Receipe</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
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
    TextArea:{
        height: 100,
        textAlignVertical: 'top'
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    label: {
        fontSize: 16,
        marginRight: 8
    },
    picker: {
        flex: 1,
        height: 40
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
     flex: 1,
     padding: 16,
     borderRadius: 4,
     alignItems: 'center'
    },
    cancelButton: {
     backgroundColor: '#ccc',
     marginRight: 8
    },
    submitButton: {
     backgroundColor: '#007aff',
    },
    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
    },


})

export default CreateReceipeForm