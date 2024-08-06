import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ExpenseCalculator() {
  const navigation = useNavigation();
  const [labourCost, setLabourCost] = useState('');
  const [fertilizerCost, setFertilizerCost] = useState('');
  const [pestCost, setPestCost] = useState('');
  const [seedCost, setSeedCost] = useState('');
  const [electricityCost, setElectricityCost] = useState('');
  const [travelExpenses, setTravelExpenses] = useState('');
  const [landCost, setLandCost] = useState('');
  const [totalEarned, setTotalEarned] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Expense Calculator</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Your labour cost</Text>
        <TextInput 
          style={styles.input} 
          placeholder='labour cost'
          keyboardType='numeric'
          value={labourCost}
          onChangeText={setLabourCost}
        />

        <Text style={styles.label}>Fertilizer cost</Text>
        <TextInput 
          style={styles.input} 
          placeholder='fertilizer cost'
          keyboardType='numeric'
          value={fertilizerCost}
          onChangeText={setFertilizerCost}
        />

        <Text style={styles.label}>Pest spray cost</Text>
        <TextInput 
          style={styles.input} 
          placeholder='pest spray cost'
          keyboardType='numeric'
          value={pestCost}
          onChangeText={setPestCost}
        />

        <Text style={styles.label}>Crop Seed cost</Text>
        <TextInput 
          style={styles.input} 
          placeholder='seed cost'
          keyboardType='numeric'
          value={seedCost}
          onChangeText={setSeedCost}
        />

        <Text style={styles.label}>Electricity cost</Text>
        <TextInput 
          style={styles.input} 
          placeholder='electricity or water expenses'
          keyboardType='numeric'
          value={electricityCost}
          onChangeText={setElectricityCost}
        />

        <Text style={styles.label}>Travel Expenses</Text>
        <TextInput 
          style={styles.input} 
          placeholder='travel expenses'
          keyboardType='numeric'
          value={travelExpenses}
          onChangeText={setTravelExpenses}
        />

        <Text style={styles.label}>Your land cost</Text>
        <TextInput 
          style={styles.input} 
          placeholder='land cost'
          keyboardType='numeric'
          value={landCost}
          onChangeText={setLandCost}
        />

        <Text style={styles.label}>Total earned</Text>
        <TextInput 
          style={styles.input} 
          placeholder='total earned'
          keyboardType='numeric'
          value={totalEarned}
          onChangeText={setTotalEarned}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#009900',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ExpenseCalculator;
