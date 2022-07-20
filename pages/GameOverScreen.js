import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Image, useWindowDimensions, Dimensions } from 'react-native'
import Card from '../components/Card'

const GameOverScreen = props => {

    const [isPortrait, setIsPortrait] = useState(false)

    const onPortrait = () => {
        const dim = useWindowDimensions()
        return dim.height >= dim.width;
    };

    const statePortrait = () => setIsPortrait(onPortrait())

    useEffect(() => {
        Dimensions.addEventListener('change', statePortrait).remove()
    })
    console.log(isPortrait, 'soy portait')
    return (
        <View style={isPortrait ? styles.screen : styles.screenId}>
            <Image style={isPortrait ? styles.image : styles.imageId} source={require('../assets/imgs/gameover.png')} />
            <Card style={styles.resultContainer}>
                <Text>Intentos: {props.rounds}</Text>
                <Text>El numero era: {props.choice}</Text>
            </Card>
            <Button title='Nuevo Juego' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    screenId: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    resultContainer: {
        marginBottom: 30,
        padding: 20,
        width: '20%',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: 300,
    },
    imageId: {
        width: '50%',
        height: 300
    }
})

export default GameOverScreen