
import React from 'react';
import {
  StyleSheet,
  Text,
  View, Button
} from 'react-native';
import { useSelector } from 'react-redux'

const ResultPage = ({ navigation }) => {
  const bestResults = useSelector((state) => state.reducer.results)
  console.log('bestResults', bestResults);
  return (
    <View style={styles.screen}>
      <Button title='Return to to Simon game' onPress={() => navigation.navigate('GamePage')} />

      <View style={styles.headerContainer}>
        <Text style={styles.cell} customStyle={{ width: '40%' }}>Name</Text>
        <Text style={styles.cell} customStyle={{ width: '40%' }}>Result</Text>

        </View>
        {bestResults?.map(({ name, result }) => (
          <View style={styles.tableBodyContainer}>
            <Text style={styles.cell}> {name}</Text>
            <Text style={styles.cell}> {result}</Text>
          </View>
        ))}



    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    height: 50,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderWidth:1

  },
  tableBodyContainer:{
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderWidth:1

  },
  cell:{
    color: 'white',
    width: 80,
    textAlign:'center',
    padding: 5,
  }
});

export default ResultPage;
