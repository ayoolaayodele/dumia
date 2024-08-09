import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import {  useCart } from '../context/context'; 

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product); 
    navigation.navigate('Checkout');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productBrand}>{product.brand}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Button 
          title="Add to Cart" 
          onPress={handleAddToCart} 
          color="#6a1b9a"
          textColor="#fff"
        />
        <Button 
          title="Buy Now" 
          onPress={handleBuyNow} 
          color="#6a1b9a"
          textColor="#fff"
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productBrand: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
  },
});
