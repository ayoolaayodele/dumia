import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Screen from '../components/Screen';
import { useCart } from '../context/context';
import { getAuth, signOut } from '@firebase/auth';
import { products } from "../data/products";

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useCart();  

  const handleAddToCart = (product) => {
    addToCart(product);  
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("logged out")
      })
      .catch((error) => {
        console.log('Error logging out:', error);
      });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.addToCartButton} 
        onPress={() => handleAddToCart(item)}
      >
        <Ionicons name="cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>All Products</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productsList}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This adds space between the title and the logout button
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',  
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  productBrand: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
  productsList: {
    paddingHorizontal: 10,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#f08a5d',
    padding: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
