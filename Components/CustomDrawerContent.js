import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props} style={styles.container}>
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://example.com/your-image.png' }} // Replace with your image URL
        style={styles.headerImage}
      />
      <Text style={styles.headerTitle}>Farm IQ</Text>
    </View>
    
    <View style={styles.divider} />

    <DrawerItem
      label="Home"
      icon={({ color, size }) => <Icon name='home' color={color} size={size} />}
      onPress={() => props.navigation.navigate('Home')}
    />
    <DrawerItem
      label="Crops"
      icon={({ color, size }) => <Icon name='eco' color={color} size={size} />}
      onPress={() => props.navigation.navigate('Crops')}
    />
    <DrawerItem
      label="All Fertilizers"
      icon={({ color, size }) => <Icon name='spa' color={color} size={size} />}
      onPress={() => props.navigation.navigate('AllFertilizers')}
    />
    <DrawerItem
      label="All Pests"
      icon={({ color, size }) => <Icon name='landscape' color={color} size={size} />}
      onPress={() => props.navigation.navigate('AllPests')}
    />
    <DrawerItem
      label="Weather Updates"
      icon={({ color, size }) => <Icon name='cloud' color={color} size={size} />}
      onPress={() => props.navigation.navigate('Weather')}
    />
    <DrawerItem
      label="Selected Plans"
      icon={({ color, size }) => <Icon name='assignment' color={color} size={size} />}
      onPress={() => props.navigation.navigate('SelectedPlans')}
    />
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  headerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
});

export default CustomDrawerContent;
