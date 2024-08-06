import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMG } from '../constants';

const selectedCrop = [
  {
    img: "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoZWF0fGVufDB8fDB8fHww",
    startingDate: "3-May-2024",
    harvestDate: "2-Aug -- 12-Aug",
    waterDate: "5-May",
    fertilizerDate: "15-May",
    fertilizerName: "Nitrogen",
    pestDate: "25-May"
  }
];

function ProgressDetailsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Start />
    </ScrollView>
  );
}

function Start() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.app}>
      {selectedCrop.map((crop, index) => (
        <ProgressDetails key={index} crop={crop} />
      ))}
    </View>
  );
}

function ProgressDetails({ crop }) {
  const navigation = useNavigation();

  return (
    <View style={styles.details}>
      <Image source={{uri: crop.img}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>You started at <Text style={styles.highlightedText}>{crop.startingDate}</Text></Text>
        <Text style={styles.text}>Your expected date for harvest is <Text style={styles.highlightedText}>{crop.harvestDate}</Text></Text>
        <Text style={styles.text}>Your first watering day is on <Text style={styles.highlightedText}>{crop.waterDate}</Text></Text>
        <Text style={styles.text}>Your fertilizer date is on <Text style={styles.highlightedText}>{crop.fertilizerDate}</Text></Text>
        <Text style={styles.text}>Fertilizer name is <Text style={styles.highlightedText}>{crop.fertilizerName}</Text></Text>
        <Text style={styles.text}>Pest spray date is <Text style={styles.highlightedText}>{crop.pestDate}</Text></Text>
        <Text style={styles.text}>Don't understand anything then contact community</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ExpenseCalculator')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calculate Expenses</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  app: {
    width: '100%',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: '#009900',
    padding: 10,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    width: '100%',
    maxWidth: 400,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  infoContainer: {
    borderColor: '#009900',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#009900',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#009900',
  },
});

export default ProgressDetailsScreen;
