
import React from 'react';
import {
  StyleSheet,
  Text,
  View, Button
} from 'react-native';

const Page1 = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <Text>Page 1 !!</Text>
        <Button title='Navigate to Page 2' onPress={() => navigation.navigate('page2')} />
    </View>
  )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Page1;
