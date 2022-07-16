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
            borderRadius: 70,

        },
        flash: {
            backgroundColor: color == 'red' ? 'rgb(255,125, 125)' : color == 'blue' ? 'rgb(125,125, 255)' : color === 'green' ? 'rgb(125, 255,125)' : 'rgb(255, 255, 125)',
            borderWidth: 3,
            borderColor: 'white',

        },
        red: {
            backgroundColor: 'red'

        },
        blue: {
            backgroundColor: 'blue'

        },
        green: {
            backgroundColor: 'green'

        },
        yellow: {
            backgroundColor: 'yellow'

        },
    });


    return (
        <TouchableOpacity onPress={handleClick.bind(this, color)} style={{ ...styles.colorCard, ...styles[`${color}`], ...flash ? styles.flash : '' }}>
            {/* <TouchableOpacity >

            </TouchableOpacity > */}

        </TouchableOpacity>

    );
}

