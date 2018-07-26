import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle } = styles;

    return (
        <View style={styles.viewStyle}>
            <Text style={textStyle}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 20,
        marginBottom: 10,
        backgroundColor: '#56CFD2',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
    }
}


export default Header;
