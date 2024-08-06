// PlansPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Step1 = () => (
  <View style={styles.page}>
    <Text style={styles.title}>Step # 1 </Text>
    <Text style={styles.title}>Browse for Different Crops</Text>

    <Text style={styles.content}>Here we provide detailed information for growing various crops.</Text>
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
    color: '#555',
  },
});

export default Step1;
