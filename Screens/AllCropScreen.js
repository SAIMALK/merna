import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AllCropScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchingCrops();
  }, []);

  const fetchingCrops = async () => {
    try {
      const response = await fetch('http://192.168.1.2:5000/api/crops');
      const responseData = await response.json();
      setData(responseData.crops);
    } catch (error) {
      console.error("Error fetching crops data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToCropDetails = (cropId) => {
    navigation.navigate("CropDetails", { cropId });
  };

  if (isLoading) {
    return <View style={styles.loading}><Text>Loading...</Text></View>;
  }
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gridContainer}>
        {data.length > 0 ? (
          data.map((crop) => (
            <CropItem
              key={crop._id}
              img={crop.img}
              name={crop.name}
              cropId={crop._id}
              onPress={() => goToCropDetails(crop._id)}
            />
          ))
        ) : (
          <View style={styles.empty}>
            <Text>No crops available</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const CropItem = ({ img, name, onPress }) => {
  return (
    <TouchableOpacity style={styles.cropItemContainer} onPress={onPress}>
      <Image source={{ uri: img }} style={styles.cropImage} />
      <Text style={styles.cropTitle}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cropItemContainer: {
    width: '48%',  // Adjust width to fit two items per row
    margin: '1%',  // Adjust margin to give some spacing
    alignItems: 'left',  // Center items
  },
  cropImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  cropTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#f5f5f5",
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

export default AllCropScreen;
