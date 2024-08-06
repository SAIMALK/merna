// CropDetailsPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Step2_1 = () => (
  <View style={styles.page}>
    <Text style={styles.title}>Provide Information</Text>
    <Text style={styles.content}>
          Provide some basic information about the your{' '}
          <Text style={styles.highlightedText}>Land</Text>,{' '}
          <Text style={styles.highlightedText}>Seed used</Text> and{' '}
          <Text style={styles.highlightedText}>Starting</Text> date to follow our plan.
        </Text>
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#009900',
  },
});

export default Step2_1;
