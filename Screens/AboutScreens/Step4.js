// ReportsPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Step4 = () => (
  <View style={styles.page}>
        <Text style={styles.title}>Step # 4 </Text>
    <Text style={styles.title}>Expense Calculator</Text>
    <Text style={styles.content}>
    Our app provides efficient calculator for all kinks of{' '}
          <Text style={styles.highlightedText}>Bills </Text>(electricity,land),{' '}
          <Text style={styles.highlightedText}>Expences </Text>(labour,fertilizer,pest sprays,seed, travel) and{' '}
          <Text >calculating the total amount earned</Text>.
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

export default Step4;
