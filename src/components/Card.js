import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image, price, children, containerStyle }) => {
  return (
    <View style={[styles.card, containerStyle]}>
      {image && <Image source={{ uri: image }} style={styles.cardImage} />}
      {title && <Text style={styles.cardTitle}>{title}</Text>}
      {price && <Text style={styles.cardPrice}>${price.toFixed(2)}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    marginBottom: 15,
  },
  cardImage: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#555',
  },
});

export default Card;
