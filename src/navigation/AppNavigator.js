import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigator from './FeedNavigator';
import CartScreen from '../screens/CartScreen';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/context';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { getCartItemCount } = useCart();  

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6a1b9a',
        tabBarInactiveTintColor: 'gray',
        tabBarBadge: route.name === 'Cart' ? getCartItemCount() : undefined,  
        tabBarBadgeStyle: { backgroundColor: '#6a1b9a', color: '#fff' } 
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={FeedNavigator} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'Cart', headerShown: true }} 
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
