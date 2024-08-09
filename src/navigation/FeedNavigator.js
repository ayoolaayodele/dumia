import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Product" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ProductList" 
        component={ProductListScreen} 
        
        options={{ 
          title: 'Products', 
          headerBackTitleVisible: false, 
          headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} color="black" />
          ),
        }} 
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
        options={{ 
          title: '', 
          headerBackTitleVisible: false, 
          headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} color="black" />
          ),
        }} 
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ 
          title: '', 
          headerBackTitleVisible: false, 
          headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} color="black" />
          ),
        }} 
      />
      <Stack.Screen 
        name="Checkout" 
        component={CheckoutScreen} 
        options={{ 
          title: '', 
          headerBackTitleVisible: false, 
          headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} color="black" />
          ),
        }} 
      />
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen} 
        options={{ 
          title: '', 
          headerBackTitleVisible: false, 
          headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} color="black" />
          ),
        }} 
      />
      <Stack.Screen 
        name="Confirmation" 
        component={ConfirmationScreen} 
        options={{ 
          title: '', 
          headerBackTitleVisible: false, 
          headerBackImage: () => (
            <Ionicons name="arrow-back" size={24} color="black" />
          ),
        }} 
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
