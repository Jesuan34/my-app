import { Modal, View, Text, Button, StyleSheet } from "react-native"


const modal = (props) => {

    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem } = props

    return (
        <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text>
                            Mi modal
                        </Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text>Estas seguro que desea borrar ?</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{itemSelected.value}</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
                        <Button onPress={() => onHandlerCompleteItem(itemSelected.id)} title='Completar' />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modalTitle: {
        backgroundColor: '#ccc',
        color: 'white',
        fontSize: 18
    },
    modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        marginTop: 15
    },
    modalItem: {
        fontSize: 30
    }
})

export default modal;
