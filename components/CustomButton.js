import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const CustomButton = (props) => {

    let bgColor = 'dodgerblue'
    if(props.color){
        bgColor = props.color
    }

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.container,
                ...props.style,
                backgroundColor: bgColor
            }}>
                <Text style={styles.title}>
                    {props.title.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:6,
        minWidth:100,
        justifyContent:'center',
        paddingVertical:11,
        borderRadius:20,
    },
    title:{
        color:'whitesmoke',
        textAlign:'center'
    }
})


export default CustomButton