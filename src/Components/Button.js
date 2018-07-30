import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
    const { buttonStyle, buttonTextStyle } = styles
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={buttonStyle} >
            <Text style={buttonTextStyle}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#E1396C',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        color: '#FFF',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button
