import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const Offers = () => {
  return (
    <>
    <View style={styles.offersContainer}>
<Text style={styles.offerText}>"Empowering farmers with data-driven insights for smarter decisions and maximum yield."</Text>
    </View>
    <View style={styles.offersContainer}>
    
      <Image
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1664116928607-896124327b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvcHN8ZW58MHx8MHx8fDA%3D' }} // Replace with actual image URL
        style={styles.offerImage}
      />
      <Text style={styles.offerText}>Boost your productivity with tailored plans for every stage of crop growth.</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  offersContainer: {
    padding: 10,
    backgroundColor: '#fff'
  },
  offerImage: {
    width: '100%',
    height: 200,
    borderRadius: 5
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#f0f0f0'
  },
  offerText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  }
});

export default Offers;
