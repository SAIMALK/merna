import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SelectPlanScreen({ route }) {
  const navigation = useNavigation();
  const { cropId } = route.params;

  const [landSize, setLandSize] = useState('');
  const [startDate, setStartDate] = useState('');
  const [labourCost, setLabourCost] = useState('');
  const [seedName, setSeedName] = useState('');
  const [marketDistance, setMarketDistance] = useState('');

  const [errors, setErrors] = useState({
    landSize: '',
    startDate: '',
    labourCost: '',
    seedName: '',
    marketDistance: '',
  });

  const handleDateChange = (text) => {
    // Remove non-numeric characters
    const cleaned = text.replace(/\D/g, '');

    // Format cleaned text as YYYY-MM-DD
    let formatted = cleaned;
    if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}`;
    }
    if (cleaned.length > 6) {
      formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}-${cleaned.slice(6, 8)}`;
    }

    // Set formatted text in state
    setStartDate(formatted);
  };

  const validateFields = () => {
    let valid = true;
    const newErrors = {};

    if (!landSize.trim()) {
      newErrors.landSize = 'Land size is required';
      valid = false;
    }

    if (!startDate.trim()) {
      newErrors.startDate = 'Start date is required';
      valid = false;
    }

    if (!labourCost.trim()) {
      newErrors.labourCost = 'Labour cost is required';
      valid = false;
    }

    if (!seedName.trim()) {
      newErrors.seedName = 'Seed name is required';
      valid = false;
    }

    if (!marketDistance.trim()) {
      newErrors.marketDistance = 'Market distance is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return; // Exit if validation fails
    }

    try {
      const response = await fetch('http://192.168.1.7:5000/api/plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cropId,
          landSize,
          startDate,  // Use formatted date
          labourCost,
          seedName,
          marketDistance,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      Alert.alert('Success', 'Plan created successfully');
      navigation.navigate('Drawer');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Please Provide The Following Information</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Your Land Size In Acres</Text>
        <TextInput
          style={[styles.input, errors.landSize ? styles.errorInput : null]}
          keyboardType='numeric'
          placeholder='Land Size'
          value={landSize}
          onChangeText={setLandSize}
        />
        {errors.landSize ? <Text style={styles.errorText}>{errors.landSize}</Text> : null}

        <Text style={styles.label}>Starting Date (YYYY-MM-DD)</Text>
        <TextInput
          style={[styles.input, errors.startDate ? styles.errorInput : null]}
          keyboardType='numeric'
          placeholder='YYYY-MM-DD'
          value={startDate}
          onChangeText={handleDateChange}  // Use the formatted handler
        />
        {errors.startDate ? <Text style={styles.errorText}>{errors.startDate}</Text> : null}

        <Text style={styles.label}>Labour Cost</Text>
        <TextInput
          style={[styles.input, errors.labourCost ? styles.errorInput : null]}
          keyboardType='numeric'
          placeholder='Cost Per Day'
          value={labourCost}
          onChangeText={setLabourCost}
        />
        {errors.labourCost ? <Text style={styles.errorText}>{errors.labourCost}</Text> : null}

        <Text style={styles.label}>Your Crop Seed Name</Text>
        <TextInput
          style={[styles.input, errors.seedName ? styles.errorInput : null]}
          placeholder='Seed Name'
          value={seedName}
          onChangeText={setSeedName}
        />
        {errors.seedName ? <Text style={styles.errorText}>{errors.seedName}</Text> : null}

        <Text style={styles.label}>Your Nearest Market Distance</Text>
        <TextInput
          style={[styles.input, errors.marketDistance ? styles.errorInput : null]}
          keyboardType='numeric'
          placeholder='Distance in Km'
          value={marketDistance}
          onChangeText={setMarketDistance}
        />
        {errors.marketDistance ? <Text style={styles.errorText}>{errors.marketDistance}</Text> : null}

        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            color="#009900"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: '#f00',
  },
  errorText: {
    color: '#f00',
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default SelectPlanScreen;
