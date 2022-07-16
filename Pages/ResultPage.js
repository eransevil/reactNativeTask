
import React from 'react';
import {
  StyleSheet,
  Text,
  View, Button
} from 'react-native';
import { useSelector } from 'react-redux'

const ResultPage = ({ navigation }) => {
  const bestResults = useSelector((state) => state.reducer.results)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>RESULT PAGE</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.cell} customStyle={{ width: '40%' }}>Name</Text>
        <Text style={styles.cell} customStyle={{ width: '40%' }}>Result</Text>

      </View>
      {bestResults?.map(({ name, result }, idx) => (
        <View key={idx} style={styles.tableBodyContainer}>
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
    alignItems: 'center',
  },
  headerContainer: {
    height: 50,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderWidth: 1,
    borderRadius: 4

  },
  tableBodyContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderWidth: 1,
    borderRadius: 2

  },
  cell: {
    color: 'white',
    width: 80,
    textAlign: 'center',
    padding: 5,
  },
  title: {
    color: 'black',
    margin: 30,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
  }
});

export default ResultPage;
