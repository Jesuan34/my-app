import { Modal, View, Text, StyleSheet, Button } from 'react-native'


export default function CustomModal(props) {

    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem } = props

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
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
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
        },  
        modalView: {
        backgroundColor: 'white',
        width: '80%',
        height: '50%',
        borderRadius: 10,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        },
        modalTitle: {
        backgroundColor: '#ccc',
        color: 'white',
        fontSize: 18,
        },
        modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
        },
        modalButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
        },
        modalItem: {
        fontSize: 30
        }
})