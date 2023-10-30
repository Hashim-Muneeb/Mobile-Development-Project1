import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

function Income({}) {
  const [incomes, setIncomes] = useState([]); 
  const [jobName, setJobName] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const addIncome = () => {

    setIncomes([
      ...incomes,
      {
        id: Math.random().toString(), 
        jobName,
        salary,
        date,
        category,
      },
    ]);
    setJobName('');
    setSalary('');
    setDate('');
    setCategory('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Income Page</Text>
      <Text style={styles.label}>Job Name</Text>
      <TextInput
        style={styles.input}
        value={jobName}
        onChangeText={(text) => setJobName(text)}
      />
      <Text style={styles.label}>Salary</Text>
      <TextInput
        style={styles.input}
        value={salary}
        onChangeText={(text) => setSalary(text)}
      />
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Button title="ADD Income" onPress={addIncome} />
      

      <FlatList
        data={incomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.incomeItem}>
            <Text>Job Name: {item.jobName}</Text>
            <Text>Salary: {item.salary}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Category: {item.category}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#3498db', 
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  incomeItem: {
    borderWidth: 1,
    borderColor: '#27ae60', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Income;
