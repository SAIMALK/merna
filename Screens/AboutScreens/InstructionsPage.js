import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InstructionsPage = () => {
  const navigation = useNavigation();

  const handleSkip = () => {
    // Navigate to the Drawer screen
    navigation.navigate('Drawer');
  };

  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.title}>How to Use the App</Text>
      <Text style={styles.content}>Step-by-step instructions on using the FarmIQ app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
  skipButton: {
    position: 'absolute',
    top: 56,
    right: 25,
    padding: 10,
    backgroundColor: '#009900',
    borderRadius: 5,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default InstructionsPage;
