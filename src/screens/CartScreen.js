import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { useCart } from '../context/context';

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useCart(); 

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId); 
  };

  const renderCartItem = ({ item }) => (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
          <Icon name='remove' size={24} color='#ff6347' />
        </TouchableOpacity>
      </View>
    </Card>
  );

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyMessage}>Your cart is empty!</Text>
          <Text style={styles.emptySubMessage}>Add some products to get started.</Text>
          <Button
            title='Shop Now'
            buttonStyle={styles.shopButton}
            onPress={() => navigation.navigate('Home')} // Navigate to the home or products screen
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.summaryContainer}>
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            <Button
              title='Checkout'
              buttonStyle={styles.checkoutButton}
              onPress={() => navigation.navigate('Checkout')}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  listContainer: {
    flexGrow: 1,
  },
  summaryContainer: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#ff6347',
    borderRadius: 10,
  },
  removeButton: {
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptySubMessage: {
    fontSize: 16,
    color: '#888',
    marginVertical: 10,
  },
  shopButton: {
    backgroundColor: '#ff6347',
    borderRadius: 10,
  },
});
