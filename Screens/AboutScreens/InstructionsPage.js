// InstructionsPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InstructionsPage = () => (
  <View style={styles.page}>
    <Text style={styles.title}>How to Use the App</Text>
    <Text style={styles.content}>Step-by-step instructions on using the FarmIQ app.</Text>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
});

export default InstructionsPage;
