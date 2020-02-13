import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform } from 'react-native'

const CustomButton = (props) => {

    let bgColor = 'dodgerblue'
    let fontColor = 'dodgerblue'
    let bdColor = 'dodgerblue'
    if(props.color){
        if(Platform.OS==='android'){
            bgColor = props.color
            bdColor = props.color
            fontColor = 'whitesmoke'
        } 
        else if(Platform.OS==='ios'){
            fontColor = props.color
            bdColor = props.color
            bgColor='dodgerblue'
        } 
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.container,
                ...props.style,
                backgroundColor: bgColor,
                borderColor: bdColor
            }}>
                <Text style={{...styles.title, 
                    color:fontColor
                }}>
                    {props.title.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:6,
        width:100,
        justifyContent:'center',
        paddingVertical:11,
        borderRadius:20,
        borderWidth:1.5
    },
    title:{
        color:'whitesmoke',
        textAlign:'center'
    }
})


export default CustomButton