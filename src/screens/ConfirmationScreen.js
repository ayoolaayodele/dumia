import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image 
        source={require('../assets/confirmation.png')} 
        style={styles.image}
      /> */}
      <Text style={styles.title}>Thank You!</Text>
      <Text style={styles.message}>Your order has been successfully placed.</Text>
      <Text style={styles.message}>We will send you an email confirmation shortly.</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Product')} 
        color="#6a1b9a" 
        textColor="#ffffff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default ConfirmationScreen;
