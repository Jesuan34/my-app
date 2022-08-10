import { Button, StyleSheet, TextInput, View } from "react-native";


const AddItem = (props) => {
    const {onHandlerChangeItem, onHandlerAddItem, textItem} = props;

    return(
        <View style={styles.inputContainer}>
            <TextInput placeholder="Nuevo Item"
            style={styles.input}
            onChangeText={onHandlerChangeItem}
            textItem={textItem}
            />
            <Button title="ADD" onPress={onHandlerAddItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    }
});

export default AddItem;