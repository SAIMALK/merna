import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CropDetails({ route }) {
  const { cropId } = route.params;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchingCropDetails();
  }, [cropId]);

  const fetchingCropDetails = async () => {
    try {
      const response = await fetch(`http://192.168.1.2:5000/api/crops/${cropId}`);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching crop data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <View style={styles.loading}><Text>Loading...</Text></View>;
  }

  if (!data) {
    return <View style={styles.empty}><Text>No crop details available</Text></View>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Start data={data} />
      <Details crop={data} />
      <Seed seeds={data.seeds} />
      <Fertilizer fertilizers={data.fertilizers} />
      <Pests pests={data.pests} />
      <CommentSection />
    </ScrollView>
  );
}

function Start({ data }) {
  const navigation = useNavigation();

  return (
    <View style={styles.startContainer}>
      <Image source={{ uri: data.img }} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SelectPlan')}
      >
        <Text style={styles.buttonText}>Select Plan</Text>
      </TouchableOpacity>
    </View>
  );
}

function Details({ crop }) {
  return (
    <View style={styles.detailsContainer}>
      <CropItems cropItem={crop} />
    </View>
  );
}

function CropItems({ cropItem }) {
  return (
    <View style={styles.cropItemContainer}>
      <Text style={styles.name}>Crop Name: {cropItem.name}</Text>
      <Text>Season: {cropItem.season}</Text>
      <Text>Duration: {cropItem.durationPeriod}</Text>
      <Text>This crop will be ready in exactly {cropItem.durationInMonths} months.</Text>
      <Text>{cropItem.description}</Text>
      <Text>Average Profit Per Acre: {cropItem.avgProfit}</Text>
    </View>
  );
}

function Seed({ seeds }) {
  const navigation = useNavigation();

  const goToSeedDetails = (seedId) => {
    navigation.navigate("SeedDetails", { seedId });
  };

  return (
    <View style={styles.pestsContainer}>
      <Text style={styles.label}>Seeds:</Text>
      {seeds.map((seed) => (
        <TouchableOpacity
          key={seed._id}
          onPress={() => goToSeedDetails(seed._id)}
        >
          <Text style={styles.item}>➤  {seed.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Fertilizer({ fertilizers }) {
  const navigation = useNavigation();

  return (
    <View style={styles.fertilizerContainer}>
      <Text style={styles.header}>Fertilizers used for this crop</Text>
      <Text style={styles.label}>Fertilizer:</Text>
      {fertilizers.map((fertilizer) => (
        <TouchableOpacity
          key={fertilizer._id}
          onPress={() => navigation.navigate('FertilizerDetails', { fertilizerId: fertilizer._id })}
        >
          <Text style={styles.item}>➤  {fertilizer.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Pests({ pests }) {
  const navigation = useNavigation();

  return (
    <View style={styles.pestsContainer}>
      <Text style={styles.label}>Pests:</Text>
      {pests.map((pest) => (
        <TouchableOpacity
          key={pest._id}
          onPress={() => navigation.navigate('PestDetails', { pestId: pest._id })}
        >
          <Text style={styles.item}>➤  {pest.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function CommentSection() {
  return (
    <View style={styles.commentSectionContainer}>
      <Text style={styles.header}>Comments Section</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your message here..."
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  startContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#009900',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsContainer: {
    marginBottom: 10,
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
  cropItemContainer: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fertilizerContainer: {
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#009900",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  pestsContainer: {
    marginBottom: 10,
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
  label: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  item: {
    color: '#000',
    marginVertical: 5,
  },
  commentSectionContainer: {
    marginTop: 10,
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CropDetails;
