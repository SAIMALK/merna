// CropDetailsPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Step1_1 = () => (
  <View style={styles.page}>
    <Text style={styles.title}>Get Detailed Data</Text>
    <Text style={styles.content}>
          Detailed information like dosage and price on various{' '}
          <Text style={styles.highlightedText}>Seeds</Text>,{' '}
          <Text style={styles.highlightedText}>Fertilizers</Text> and{' '}
          <Text style={styles.highlightedText}>Pest</Text> removal is provided to the user.
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

export default Step1_1;
