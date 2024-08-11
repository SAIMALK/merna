import React from 'react';
import { View, Button, Alert,StyleSheet,TouchableOpacity,Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice'; // adjust the import path as needed
import { logout } from '../../slices/authSlice'; // adjust the import path as needed

const LogoutScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigation.navigate('Login'); // navigate to Login screen after logout
    } catch (err) {
      Alert.alert('Logout Error', err?.data?.message || err.error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<TouchableOpacity style={styles.button} onPress={logoutHandler}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    buttonText: {
        color: '#009900',
        fontSize: 16,
        fontWeight: 'bold',
      },
     
    });
export default LogoutScreen;
