import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

function Expense({}) {
  const [expenses, setExpenses] = useState([]); 
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const addExpense = () => {

    setExpenses([
      ...expenses,
      {
        id: Math.random().toString(), 
        productName,
        amount,
        date,
        category,
      },
    ]);

   
    setProductName("");
    setAmount("");
    setDate("");
    setCategory("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses Page</Text>
      <Text style={styles.label}>Product Name</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={(text) => setAmount(text)}
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
      <Button title="ADD Expense" onPress={addExpense} />


      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>Product: {item.productName}</Text>
            <Text>Amount: {item.amount}</Text>
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
    backgroundColor: "#f2f2f2", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", 
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "black", 
  },
  input: {
    height: 40,
    borderColor: "black", 
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  expenseItem: {
    borderWidth: 1,
    borderColor: "#e74c3c",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ecf0f1",
  },
});

export default Expense;
