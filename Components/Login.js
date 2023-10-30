import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'hashim' && password === '123') {
      navigation.navigate('Home');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#3498db', 
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    input: {
      height: 50,
      backgroundColor: 'white',
      marginBottom: 15,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
    },
  });
  
export default Login;
