// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation.navigate('Main'); // Navigate to your main screen or wherever after login
    }
  }, [userInfo, navigation]);

  const submitHandler = async () => {
    if (email.trim().length === 0) {
      setEmailEmpty(true);
      return;
    }
    if (password.trim().length === 0) {
      setPasswordEmpty(true);
      return;
    }

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation.navigate('Main'); // Navigate to your main screen or wherever after login
    } catch (err) {
      Alert.alert('Login Error', err?.data?.message || err.error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login Details</Text>
        <TextInput
          style={[styles.input, emailEmpty && styles.inputError]}
          placeholder="Email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailEmpty(false)}
        />
        {emailEmpty && <Text style={styles.errorText}>Email cannot be empty!</Text>}

        <TextInput
          style={[styles.input, passwordEmpty && styles.inputError]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onFocus={() => setPasswordEmpty(false)}
        />
        {passwordEmpty && <Text style={styles.errorText}>Password cannot be empty!</Text>}

        <Button
          title={isLoading ? 'Signing In...' : 'Sign In'}
          onPress={submitHandler}
          color="#000000"
          disabled={isLoading}
        />

        <TouchableOpacity
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>No account yet? Register!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  registerLink: {
    marginTop: 20,
  },
  registerText: {
    color: '#009900',
    textAlign: 'center',
  },
});

export default LoginScreen;
