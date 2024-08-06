import React from 'react';
import { View, Text, Image, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const selected = [
  {
    img: "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoZWF0fGVufDB8fDB8fHww",
    startingDate: '2023-07-01'
  },
  {
    img: "https://images.unsplash.com/photo-1511817354854-e361703ac368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D",
    startingDate: '2023-07-02'
  },
  {
    img: "https://images.unsplash.com/photo-1715944476655-20a7d99ae687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0ZSUyMHBhbG1zfGVufDB8fDB8fHww",
    startingDate: '2023-07-03'
  }
];

function SelectedPlansScreen() {
  return (
    
    <View style={styles.container}>
      <FlatList
        data={selected}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card {...item} />}
      />
    </View>
  );
}

function Card({ img, startingDate }) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={{uri: img}} style={styles.image} />
      <Text style={styles.name}>Wheat Crop</Text>
      <Text style={styles.date}>Starting Date: {startingDate}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Progress"
          color="#009900"
          onPress={() => navigation.navigate('Progress')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:10,
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
});

export default SelectedPlansScreen;
