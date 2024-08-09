import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';

const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Welcome to Dumia</Text>
      <Text style={styles.subtitle}>Discover the best products and enjoy exclusive offers.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a1b9a', 
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#f8f8f8',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ff4081',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
