import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useCart } from '../context/context';
import Card from '../components/Card';
import Button from '../components/Button'; 

const CheckoutScreen = ({ navigation }) => {
  const { cart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Items</Text>
        {cart.map(item => (
          <Card 
            key={item.id} 
            title={item.title} 
            image={item.image} 
            price={item.price}
            containerStyle={styles.cardContainer}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <Text style={styles.totalPrice}>Total: ${calculateTotal()}</Text>
        <Button 
          title="Proceed to Payment" 
          buttonStyle={styles.orderButton}
          onPress={() => navigation.navigate('Payment')} 
          color="#6a1b9a" 
          textColor="#ffffff"
        />
      </View>
    </ScrollView>
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
  cardContainer: {
    marginBottom: 15,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: '#f08a5d',
    borderRadius: 10,
  },
});

export default CheckoutScreen;
