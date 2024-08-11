import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SelectedPlansScreen() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://192.168.1.7:5000/api/plans'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        const data = await response.json();
        console.log(data);
        setPlans(data); // Assuming data is an array of plans
      } catch (err) {
        setError(err.message);
        Alert.alert('Error', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#009900" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={plans}
        keyExtractor={(item) => item._id} // Assuming each plan has a unique _id
        renderItem={({ item }) => <Card {...item} />}
      />
    </View>
  );
}

function Card({ _id,durationInMonths,crop, startDate }) {
  const navigation = useNavigation();
  const { img, name } = crop;

  

  return (
    <View style={styles.card}>
      {img ? (
        <Image source={{ uri: img }} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
      <Text style={styles.name}>{name || 'No name provided'}</Text>
      <Text style={styles.date}>Starting Date: {startDate ? new Date(startDate).toLocaleDateString() : 'No date provided'}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Progress"
          color="#009900"
          onPress={() => navigation.navigate('Progress',{planId : _id , planDuration: durationInMonths})} // Assuming you have a Progress screen and planId is a prop
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
});

export default SelectedPlansScreen;
