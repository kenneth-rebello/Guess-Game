import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import { Links } from '../utils/Links';
import { Colors } from '../utils/Colors';
import CustomButton from '../components/CustomButton';

const EndScreen = ({rounds, resetGame, number}) => {

    const [landscape, setLandscape] = useState(
        Dimensions.get('window').width>500 ? true : false
    )

    const updateLayout = () => {
        let width = Dimensions.get('window').width
        if(width>500) setLandscape(true)
        else setLandscape(false)
    }

    useEffect(()=>{
        Dimensions.addEventListener('change', updateLayout)

        return () => {
            Dimensions.removeEventListener('change', updateLayout)    
        }
    },[])

    return (
        landscape ? <ScrollView contentContainerStyle={styles.screenLS}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri:Links.gameOverImage}}
                    style={styles.imageLS}
                    resizeMode='stretch'
                />
            </View> 
            <View style={styles.halfScreenLS}>
                <Text style={styles.line}>Opponent took {rounds} rounds to guess your number</Text>
                <NumberContainer>{number}</NumberContainer>
                <CustomButton title="Play Again" 
                    onPress={resetGame}
                    color={Colors.success}
                /> 
            </View>
        </ScrollView> : <ScrollView contentContainerStyle={styles.screen}>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    screenLS:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },  
    halfScreenLS:{
        flex:1,
        flexDirection:'column',
        width:'50%',
        justifyContent:'space-around',
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
        margin:10
    },  
    image:{
        height:300,
        width:300,
        opacity:0.7
    },
    imageLS:{
        height:250,
        width:250,
        opacity:0.7
    }
})

export default EndScreen