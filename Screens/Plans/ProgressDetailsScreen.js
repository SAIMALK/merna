import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, addDays, addMonths, isValid } from 'date-fns';
import { ADDRESS } from '../../constants';

function ProgressDetailsScreen() {
  const [planDetails, setPlanDetails] = useState(null);
  const [adjustedDates, setAdjustedDates] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  const { planId } = route.params;

  useEffect(() => {
    const fetchPlanDetails = async () => {
      try {
        const response = await fetch(`${ADDRESS}/api/plans/${planId}`);
       
        if (!response.ok) {
          throw new Error('Failed to fetch plan details');
        }
        const data = await response.json();
      
        setPlanDetails(data);
        calculateDates(data); // Calculate dates when data is fetched
      } catch (error) {
        console.error('Error fetching plan details:', error);
      }
    };

    fetchPlanDetails();
  }, [planId]);

  const calculateDates = (plan) => {
    const { startDate, crop } = plan;
    const { durationInMonths } = crop;
    const start = new Date(startDate);
  
    if (!isValid(start)) {
      console.error('Invalid start date:', startDate);
      setAdjustedDates({
        waterDate: 'Invalid date',
        fertilizerDate: 'Invalid date',
        pestDate: 'Invalid date',
        harvestStartDate: 'Invalid date',
        harvestEndDate: 'Invalid date',
      });
      return;
    }
  
    // Calculate harvest dates
    const harvestStartDate = addMonths(start, durationInMonths);
    const harvestEndDate = addDays(harvestStartDate, 10);
  
    // Calculate initial dates for watering, fertilizer, and pest spray
    const initialDates = {
      waterDate: addDays(start, 10),
      fertilizerDate: addDays(start, 20),
      pestDate: addDays(start, 30),
    };
  
    const now = new Date();
    const updatedDates = { ...initialDates };
  
    // Adjust dates if the current date is past the initial date
    Object.keys(updatedDates).forEach((key) => {
      if (now > updatedDates[key]) {
        updatedDates[key] = addDays(updatedDates[key], 25); // Update date to 25 days later
      }
    });
  
    // Format dates for state
    setAdjustedDates({
      waterDate: format(updatedDates.waterDate, 'dd-MMM-yyyy'),
      fertilizerDate: format(updatedDates.fertilizerDate, 'dd-MMM-yyyy'),
      pestDate: format(updatedDates.pestDate, 'dd-MMM-yyyy'),
      harvestStartDate: format(harvestStartDate, 'dd-MMM-yyyy'),
      harvestEndDate: format(harvestEndDate, 'dd-MMM-yyyy'),
    });
  };

  if (!planDetails) {
    return <Text>Loading...</Text>;
  }

  const { crop, startDate } = planDetails;
  const { waterDate, fertilizerDate, pestDate, harvestStartDate, harvestEndDate } = adjustedDates;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.app}>
        <ProgressDetails
          crop={crop}
          startingDate={startDate}
          waterDate={waterDate}
          fertilizerDate={fertilizerDate}
          pestDate={pestDate}
          harvestStartDate={harvestStartDate}
          harvestEndDate={harvestEndDate}
        />
      </View>
    </ScrollView>
  );
}

function ProgressDetails({ crop, startingDate, waterDate, fertilizerDate, pestDate, harvestStartDate, harvestEndDate }) {
  const navigation = useNavigation();

  return (
    <View style={styles.details}>
      <Image source={{ uri: crop.img }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>You started at <Text style={styles.highlightedText}>{format(new Date(startingDate), 'dd-MMM-yyyy')}</Text></Text>
        <Text style={styles.text}>Your expected date for harvest is <Text style={styles.highlightedText}>{harvestStartDate} - {harvestEndDate}</Text></Text>
        <Text style={styles.text}>Your watering day is on <Text style={styles.highlightedText}>{waterDate}</Text></Text>
        <Text style={styles.text}>Your fertilizer date is on <Text style={styles.highlightedText}>{fertilizerDate}</Text></Text>
        <Text style={styles.text}>Your Pest spray date is on <Text style={styles.highlightedText}>{pestDate}</Text></Text>
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
