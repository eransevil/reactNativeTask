import React from 'react';
import {
    StyleSheet,
    Text,
    View, Button, TouchableOpacity
} from 'react-native';

export default function ColorCard({ color, handleClick, flash }) {

    const styles = StyleSheet.create({
        colorCard: {
            height: 200,
            width: 200,
            borderWidth: 4,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0
        },
        flash: {
            backgroundColor: color == 'red' ? 'rgb(255,125, 125)' : color == 'blue' ? 'rgb(125,125, 255)' : color === 'green' ? 'rgb(125, 255,125)' : 'rgb(255, 255, 125)',
            borderWidth: 3,
            borderColor: 'white',

        },
        red: {
            backgroundColor: 'red',
            borderTopRightRadius: 100
        },
        blue: {
            backgroundColor: 'blue',
            borderBottomRightRadius: 100,
            
        },
        green: {
            backgroundColor: 'green',
            borderTopLeftRadius: 100,

        },
        yellow: {
            backgroundColor: 'yellow',
            borderBottomLeftRadius: 100
        },
    });


    return (
        <TouchableOpacity onPress={handleClick.bind(this, color)} style={{ ...styles.colorCard, ...styles[`${color}`], ...flash ? styles.flash : '' }}>
        </TouchableOpacity>

    );
}

