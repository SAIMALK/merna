import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ExpertAdvice = () => {
  return (
    <View style={styles.expertAdviceContainer}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1498408040764-ab6eb772a145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvcHN8ZW58MHx8MHx8fDA%3D' }} // Replace with actual image URL
        style={styles.expertImage}
      />
      <View style={styles.expertDetails}>
        <Text style={styles.expertText}>Expert Advice</Text>
        <TouchableOpacity>
          <Text style={styles.callButton}>On Call: 91080 47688</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expertAdviceContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  expertImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  expertDetails: {
    marginLeft: 10
  },
  expertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  callButton: {
    fontSize: 14,
    color: '#228B22'
  }
});

export default ExpertAdvice;
