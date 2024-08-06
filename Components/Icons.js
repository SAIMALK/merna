import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Icons = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.mainContainer}>
        
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AllFertilizerScreen')}>
            <Icon name="agriculture" size={32} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Fertilizer</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AllPestScreen')}>
            <Icon name="bug-report" size={32} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Pests</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SelectedPlansScreen')}>
            <Icon name="assignment" size={32} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Plans</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AllCrops')}>
            <Icon name="eco" size={32} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Crops</Text>
        </View>

      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#fff'
    },
    iconName: {
      fontSize: 10,
      fontWeight: 'bold',
    },
    iconsContainer: {
      flexDirection: 'col',
      alignItems: 'center',
      padding:10,
    }
  });
  
  export default Icons;
  