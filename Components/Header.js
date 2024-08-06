import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome is used for icons

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>FARMIQ</Text>
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Icon name="bell" size={24} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#228B22' // Green color
  },
  iconsContainer: {
    flexDirection: 'row'
  }
});

export default Header;
