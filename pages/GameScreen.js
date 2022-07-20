import React, {useEffect, useState, useRef} from 'react'
import { View, Text, Button, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import { NumberContainer } from '../components/NumberContainer'
import Card  from '../components/Card'

const GameScreen = props => {

    const { width, height } = useWindowDimensions();
    const { userOption, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState()
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const generateRandomBetween = (min, max, userChoice) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        let randomNumber = Math.floor(Math.random() * (max - min) + min)
        if(randomNumber === userChoice) {
            return generateRandomBetween(min, max, userChoice)
        } else {
            return setCurrentGuess(randomNumber)
        }
    }

    const handlerNextGuess = direction => {
        if(
            (direction === 'lower' && currentGuess < userOption ) ||
            (direction === 'greater' && currentGuess > userOption)
        ) {
            return Alert.alert('No mientas!', 'Tu sabes que no es verdad...!', [
                {text: 'Intentar de nuevo', style: 'cancel'}
            ])
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }

        generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setRounds(current => current + 1)
    }

    useEffect(() => {
        generateRandomBetween(1, 100, props.userOption)
    }, [])

    useEffect(() => {
        if (currentGuess == userOption) onGameOver(rounds)
    }, [currentGuess, userOption, onGameOver])

    return (
        <View style={styles.screen}>
            <Text>La suposicion del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={{...styles.buttonContainer, marginTop: height > 600 ? 20 : 10}}>
                <Button title='Menor' onPress={() => handlerNextGuess('lower')} />
                <Button title='Mayor' onPress={() => handlerNextGuess('greater')} />
            </Card>
        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})

export default GameScreen