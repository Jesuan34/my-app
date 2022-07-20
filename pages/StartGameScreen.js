import React, { useState } from 'react'
import { View, Text, StyleSheet , Button, TouchableWithoutFeedback, Keyboard, useWindowDimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import { NumberContainer } from '../components/NumberContainer'

const StartGameScreen = props => {

    const { width, height } = useWindowDimensions();

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handlerInputNumber = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''))
    }

    const handlerResetInput = () => {
        setConfirmed(false);
        setEnteredValue('')
    }

    const handlerConfirmInput = () => {
        let choseNumber = parseInt(enteredValue)
        if(choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.length < 1) return;
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('')
    }

    // const confirmedOutput = confirmed ? <Text>Numero elegido: {selectedNumber}</Text> : null

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Comienza el juego</Text>
                        <Card style={{...styles.inputContainer,  width: width * 0.8}}>
                            <Text>Elija un numero</Text>
                            <Input 
                                style={styles.input}
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='numeric'
                                maxLength={2}
                                value={enteredValue}
                                onChangeText={handlerInputNumber}
                            />
                            <View style={styles.buttonContainer}>
                                {enteredValue.length > 0 && (
                                    <>
                                        <Button title='Limpiar' onPress={() => handlerResetInput()} color={Colors.accent} style={{width: width * 0.4}} />
                                        <Button title='Confirmar' onPress={() => handlerConfirmInput()} color={Colors.primary} disabled={enteredValue.length < 2 ? true : false}/>
                                    </>
                                )}
                            </View>
                        </Card>
                        {confirmed && (
                            <Card style={styles.summaryContainer}>
                                <Text>Tu seleccion</Text>
                                <NumberContainer>{selectedNumber}</NumberContainer>
                                <Button title='Empezar Juego' onPress={() => props.onStartGame(selectedNumber)}/>
                            </Card>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'EduBold',
    },
    inputContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        width: '20%',
        textAlign: 'center',
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '60%',
        height: '30%'
    }
})

export default StartGameScreen