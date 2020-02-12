import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import { Links } from '../utils/Links';
import { Colors } from '../utils/Colors';
import CustomButton from '../components/CustomButton';

const EndScreen = ({rounds, resetGame, number}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:Links.gameOverImage}}
                    style={styles.image}
                    resizeMode='stretch'
                />
            </View>
            <Text style={styles.line}>Opponent took {rounds} rounds to guess your number</Text>
            <NumberContainer>{number}</NumberContainer>
            <CustomButton title="Play Again" 
                onPress={resetGame}
                color={Colors.success}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        color:Colors.primary,
        fontSize:20,
        textAlign:'center',
        paddingVertical:10
    },  
    imageContainer:{
        borderRadius: 150,
        borderColor:Colors.secondary,
        borderWidth:3,
        overflow:'hidden',
    },  
    image:{
        height:300,
        width:300,
        opacity:0.7
    }
})

export default EndScreen