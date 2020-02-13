import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../utils/Colors'

const NumberContainer = (props) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberContainer:{
        borderWidth: 2,
        borderColor: Colors.secondary,
        borderRadius: 10,
        marginVertical: 10,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        width:60,
        alignSelf:'center',
        marginHorizontal:20
    },
    number:{
        color:Colors.secondary,
        fontSize:22
    }
})

export default NumberContainer