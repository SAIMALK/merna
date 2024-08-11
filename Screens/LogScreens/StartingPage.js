import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const StartingPage = () => {
  const navigation = useNavigation();
  const fadeAnim = useSharedValue(0);
  const translateYAnim = useSharedValue(50);

  useEffect(() => {
    fadeAnim.value = withSpring(1, { damping: 2 });
    translateYAnim.value = withSpring(0, { damping: 2 });
  }, []);

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateYAnim.value }],
    };
  });

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1681987447708-5ee4494d6d0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZhcm1pbmclMjBsb2dvfGVufDB8fDB8fHww' }}
      style={styles.container}
      imageStyle={styles.imageBackground}
    >
      <View style={styles.overlay} />
      <Animated.View style={[styles.logoContainer, translateYStyle]}>
        {/* Logo can be placed here if needed */}
      </Animated.View>
      <Animated.View style={[styles.textContainer, fadeStyle]}>
        <Text style={styles.title}>Welcome to FarmIQ</Text>
        <Text style={styles.subtitle}>Your ultimate farming companion</Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  imageBackground: {
    opacity: 0.8, // Adjust opacity as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay for better text contrast
  },
  logoContainer: {
    marginBottom: 40,
    // Add additional styling if needed
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
    zIndex: 1, // Ensure text is above overlay
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // White color to contrast against the background
    textShadowColor: '#777', // Add shadow for better readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff', // White color to contrast against the background
    textShadowColor: '#999', // Add shadow for better readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: '#009900',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StartingPage;
