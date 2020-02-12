import React from 'react'
import { TextInput } from 'react-native';

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

const styles = {
    input:{
        height: 30,
        borderColor:'lightgray',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor:'lavender'
    }
}

export default Input;