
import React from 'react';
import {
  StyleSheet,
  Text,
  View, Button
} from 'react-native';

const Page2 = ({navigation}) => {
  return (
    <View style={styles.screen}>
        <Text>Page 2 !!</Text>
        <Button title='Navigate to Page 1' onPress={() => navigation.navigate('page1')} />
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

export default Page2;
