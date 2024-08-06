import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
  const navigation = useNavigation();
  const [crops, setCrops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    try {
      const response = await fetch('http://192.168.1.2:5000/api/crops'); // Adjust API URL as needed
      const responseData = await response.json();
      // Sort crops by a date field or use an API that returns the most recent ones
      const recentCrops = responseData.crops.slice(0, 4); // Assuming `crops` is the key and contains an array
      setCrops(recentCrops);
    } catch (error) {
      console.error("Error fetching crops data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <View style={styles.loading}><Text>Loading...</Text></View>;
  }

  if (crops.length === 0) {
    return <View style={styles.empty}><Text>No recent crops available</Text></View>;
  }

  return (
    <ScrollView>
      {crops.map((crop) => (
        <View key={crop._id} style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('CropDetails', { cropId: crop._id })}>
            <Image source={{ uri: crop.img }} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.name}>{crop.name}</Text>
          <View style={styles.description}>
            <Text>Season: {crop.season}</Text>
            <Text>Duration: {crop.durationPeriod} </Text>
            <Text>{crop.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    marginTop: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
