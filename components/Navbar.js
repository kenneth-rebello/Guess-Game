import React from 'react'
import { View, Text, Header, StyleSheet } from 'react-native'
import { Colors } from '../utils/Colors'

const Navbar = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>GUESS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:Colors.primary,
        width:'100%',
        height:90,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        color:Colors.lighttext,
        fontSize:25,
        fontWeight: 'bold'
    }
})

export default Navbar