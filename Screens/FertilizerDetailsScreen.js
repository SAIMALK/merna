import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const FertilizerDetailsScreen = ({ route }) => {
  const { fertilizerId } = route.params;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchingFertilizerDetails();
  }, [fertilizerId]);

  const fetchingFertilizerDetails = async () => {
    try {
      const response = await fetch(`http://192.168.1.2:5000/api/fertilizers/${fertilizerId}`);
      const responseData = await response.json();
      setData(responseData); // Assuming 'fertilizer' is the key in your API response
    } catch (error) {
      console.error("Error fetching fertilizer data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <View style={styles.loading}><Text>Loading...</Text></View>;
  }

  if (!data) {
    return <View style={styles.empty}><Text>No Fertilizer details available</Text></View>;
  }

  return (
    <ScrollView style={styles.container}>
      <Start data={data}/>
      <Details data={data}/>
    </ScrollView>
  );
}

const Start = ({data}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: data.img}} style={styles.image} />
    </View>
  );
}

const Details = ({data}) => {
  return (
    <View>
        <SprayItems sprayItem={data} />
    </View>
  );
}

const SprayItems = ({ sprayItem }) => {
  return (
    <View style={styles.itemContainer}>
    <Text style={styles.normalText}>
      <Text style={styles.bold}>Spray Name:</Text> {sprayItem.name}</Text>
      <Text style={styles.normalText}>
      <Text style={styles.bold}>Type:</Text> {sprayItem.type}</Text>
      <Text style={styles.normalText}>
      <Text style={styles.bold}>Usage:</Text> {sprayItem.usage} to {sprayItem.usage + 50} Pounds Per Acre</Text>
      <Text style={styles.normalText}>

      <Text style={styles.bold}>Description:</Text>  {sprayItem.description}</Text>
      <Text style={styles.normalText}>

      <Text style={styles.bold}>Market Price:</Text>  ${sprayItem.price} per KG</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5"
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  normalText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default FertilizerDetailsScreen;
