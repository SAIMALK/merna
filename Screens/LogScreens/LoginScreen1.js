// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement your login logic here
//     console.log('Login pressed');
//   };

  return (
    <View style={styles.container}>
      <Image source={{uri :"data:image/jpeg;base64,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"}} style={styles.logo} />
      <Text style={styles.title}>Welcome to FarmIQ</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#007bff',
    marginTop: 10,
  },
});

export default LoginScreen;
