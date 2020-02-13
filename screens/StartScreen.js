import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView, ScrollView } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import { Colors } from '../utils/Colors'
import NumberContainer from '../components/NumberContainer'
import { Fonts } from '../utils/Fonts'
import CustomButton from '../components/CustomButton'

const StartScreen = ({setNumber}) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selected, setSelected] = useState(0);
    let output

    const Changer = input => {
        setEnteredValue(input.replace(/[^0-9]/g, ''))
    }

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            Alert.alert('Error', 'Not a valind input',[{text:'OK', style:'cancel'}])
        }
        setConfirmed(true);
        setSelected(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    const resetHandler = () => {
        setConfirmed(false)
    }

    const startGame = () => {
        if(confirmed){
            setNumber(selected)
        }else{
            Alert.alert('Error', 'Invalid action');
        }
    }

    if(confirmed && !isNaN(selected)){
        output = (
            <Card style={styles.summary}>
                <Text style={styles.summaryText}>You selected</Text>
                    <NumberContainer>{selected}</NumberContainer>
                <CustomButton title="Start Game" color={Colors.success} onPress={()=>startGame()}/>
            </Card>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Start Game</Text>
                        <Card style={styles.inputContainer}>
                            <Text>Enter a number between 1 and 100</Text>
                            <Input style={styles.input} 
                                keyboardType='number-pad'
                                maxLength={2}
                                onChangeText={Changer}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <CustomButton title="Reset" onPress={()=>resetHandler()}
                                    color={Colors.secondary}
                                />
                                <CustomButton title="Confirm" 
                                    onPress={()=>confirmHandler()} 
                                    color={Colors.primary}
                                />
                            </View>
                        </Card>
                        {output}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:25,
        marginVertical:10,
        fontFamily: Fonts.title,
        color:Colors.success
    },
    inputContainer:{
        width:'80%',
        minWidth:300,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summary:{
        margin: 10,
        alignItems: 'center',
        width:180
    },  
    summaryText:{
        color: Colors.primary
    }
})

export default StartScreen