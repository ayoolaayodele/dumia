import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../components/Button'; 
import { useCart } from '../context/context';

const PaymentScreen = ({ navigation }) => {
  const { cart } = useCart(); 

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Payment</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <Text style={styles.totalPrice}>Total: ${calculateTotal()}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Information</Text>
          <TextInput 
            placeholder="Card Number" 
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput 
            placeholder="Expiry Date" 
            style={styles.input}
          />
          <TextInput 
            placeholder="CVV" 
            style={styles.input}
            secureTextEntry
          />
          <TextInput 
            placeholder="Card Holder Name" 
            style={styles.input}
          />
        </View>

        <Button 
          title="Pay Now" 
          color="#6a1b9a" 
          textColor="#ffffff"
          onPress={() => navigation.navigate('Confirmation')}  
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PaymentScreen;
