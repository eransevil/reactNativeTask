import React from 'react';
import {
    View, Text, StyleSheet, Button
} from 'react-native';

import { useNavigation } from '@react-navigation/core';


const AppHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <Button title='Simon Game' onPress={() => navigation.navigate('GamePage')} />
            <Button title='Result Page' onPress={() => navigation.navigate('resultPage')} />
        </View>
    );
};


const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 2,
        backgroundColor: 'lightgray',
        height: 80,
        paddingHorizontal: 1,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textHeader: {
        color: 'white',
    },

});

export default AppHeader;
