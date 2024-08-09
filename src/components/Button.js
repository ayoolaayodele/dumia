import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Button = ({ title, onPress, color, textColor, loading }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} 
      onPress={onPress}
      disabled={loading} 
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%', 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
