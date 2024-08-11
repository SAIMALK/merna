import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function ExpenseCalculator() {
  const scrollViewRef = useRef(null);
  const resultsRef = useRef(null);
  const [labourCost, setLabourCost] = useState('');
  const [fertilizerCost, setFertilizerCost] = useState('');
  const [pestCost, setPestCost] = useState('');
  const [seedCost, setSeedCost] = useState('');
  const [electricityCost, setElectricityCost] = useState('');
  const [travelExpenses, setTravelExpenses] = useState('');
  const [landCost, setLandCost] = useState('');
  const [totalEarned, setTotalEarned] = useState('');
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [profit, setProfit] = useState(null);

  const handleCalculate = () => {
    const labour = parseFloat(labourCost) || 0;
    const fertilizer = parseFloat(fertilizerCost) || 0;
    const pest = parseFloat(pestCost) || 0;
    const seed = parseFloat(seedCost) || 0;
    const electricity = parseFloat(electricityCost) || 0;
    const travel = parseFloat(travelExpenses) || 0;
    const land = parseFloat(landCost) || 0;
    const earned = parseFloat(totalEarned) || 0;

    const total = labour + fertilizer + pest + seed + electricity + travel + land;
    const profit = earned - total;

    setTotalExpenses(total);
    setProfit(profit);

    // Scroll to the results section
    if (scrollViewRef.current && resultsRef.current) {
      resultsRef.current.measureLayout(
        scrollViewRef.current.getScrollResponder().getScrollableNode(),
        (x, y) => {
          scrollViewRef.current.scrollTo({ y: y, animated: true });
        }
      );
    }
  };

  return (
    <ScrollView ref={scrollViewRef} contentContainerStyle={styles.container}>
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

        <TouchableOpacity onPress={handleCalculate} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Calculate</Text>
        </TouchableOpacity>

        <View ref={resultsRef} style={styles.results}>
          {totalExpenses !== null && (
            <>
              <Text style={styles.resultText}>Total Expenses: {totalExpenses.toFixed(2)}</Text>
              <Text style={styles.resultText}>Total Earned: {totalEarned}</Text>
              <Text style={styles.resultText}>Total Profit: {profit.toFixed(2)}</Text>
            </>
          )}
        </View>
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
  results: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#66FF66',
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#444',
  },
});

export default ExpenseCalculator;
