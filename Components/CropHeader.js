import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome is used for icons

const CropHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Crop Practices</Text>
      <TouchableOpacity>
        <Icon name="search" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default CropHeader;
