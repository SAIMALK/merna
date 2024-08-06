// ReportsPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Step3 = () => (
  <View style={styles.page}>
        <Text style={styles.title}>Step # 3 </Text>
    <Text style={styles.title}>Report Features</Text>
    <Text style={styles.content}>
    Our app provides detailed reports on{' '}
          <Text style={styles.highlightedText}>Weather reports</Text>,{' '}
          <Text style={styles.highlightedText}>Water usage</Text> and{' '}
          <Text style={styles.highlightedText}>Fertilizers usage</Text> timly.
        </Text>
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
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#009900',
  },
});

export default Step3;
