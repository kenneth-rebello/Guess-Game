import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { Colors } from '../utils/Colors';

const makeGuess = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max-min) + min);
    if(random === exclude){
        return makeGuess(min, max, exclude);
    }else{
        return random
    }
}

const GameScreen = ({choice, numberOfRounds}) => {

    const lowerBound = useRef(0)
    const higherBound = useRef(99)
    const initialGuess = makeGuess(1,100,choice)

    const [guess, setGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess])

    useEffect(()=>{
        if(guess===choice){
            numberOfRounds(pastGuesses.length)
        }
    },[guess])

    const nextGuess = direction => {

        if(direction==="+"){
            if(choice < guess){
                Alert.alert('Don\'t lie', 'You can\'t fool me', [{text:'Sorry', style:'cancel'}])
                return
            }else{
                lowerBound.current = guess
            }
        }else{
            if(choice > guess){
                Alert.alert('Don\'t lie', 'You can\'t fool me', [{text:'Sorry', style:'cancel'}])
                return
            }else{
                higherBound.current = guess
            }
        }
        let newGuess = makeGuess(lowerBound.current+1, higherBound.current, guess)
        setGuess(newGuess)
        setPastGuesses(currentGuesses => [newGuess, ...currentGuesses])
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{guess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <CustomButton title="-" onPress={()=>nextGuess('-')} color={Colors.faint}/>
                <CustomButton title="+" onPress={()=>nextGuess('+')} color={Colors.faint}/>
            </Card>
            <ScrollView contentContainerStyle={styles.listContainer}>
                {pastGuesses.map((oneGuess, idx) => <View key={idx} style={styles.listItem}>
                    <Text style={styles.listText}>Guess #{pastGuesses.length-idx}</Text>
                    <Text style={styles.listText}>{oneGuess}</Text>
                </View>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15,
        width:300,
        maxWidth:'80%'
    },
    listContainer:{
        paddingVertical:10
    },  
    listItem:{
        borderWidth:2,
        borderColor:Colors.success,
        marginVertical: 10,
        minWidth: '65%',
        flexDirection:'row',
        justifyContent:'space-around',
        borderRadius:10
    },
    listText:{
        fontSize:20,
        color: Colors.success
    }
})


export default GameScreen