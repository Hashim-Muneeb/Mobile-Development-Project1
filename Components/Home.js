import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import expensesImage from '../assets/imp.png';
import incomeImage from '../assets/time.png';
import transactionsImage from '../assets/trans.png';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

  
      <Button
        title="Expenses"
        onPress={() => navigation.navigate('Expense')}
        style={styles.button}
        color="#3498db" 
      />
      <Image source={expensesImage} style={styles.image} />

     
      <Button
        title="Income"
        onPress={() => navigation.navigate('Income')}
        style={styles.button}
        color="#e74c3c" 
      />
      <Image source={incomeImage} style={styles.image} />

      
      <Button
        title="Transactions"
        onPress={() => navigation.navigate('Transactions')}
        style={styles.button}
        color="#27ae60" 
      />
      <Image source={transactionsImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    width: '90%',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 100,
    margin: 20,
    resizeMode: 'contain',
  },
});

export default Home;
