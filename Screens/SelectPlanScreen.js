import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SelectPlanScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Please Provide The Following Information</Text>
      <View style={styles.form}>
      <Text style={styles.label}>Your Land Size In Acres</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Land Size' />

        <Text style={styles.label}>Starting Date</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='YYYY-MM-DD' />

        <Text style={styles.label}>Labour Cost</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Cost Per Day' />

        <Text style={styles.label}>Your Crop Seed Name</Text>
        <TextInput style={styles.input} placeholder='Seed Name' />

        <Text style={styles.label}>Your Nearest Market Distance</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Distance in Km' />

        <View style={styles.buttonContainer}>
          <Button
            title="Submit"
            color="#009900"
            onPress={() => navigation.navigate('Home')}
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
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default SelectPlanScreen;
