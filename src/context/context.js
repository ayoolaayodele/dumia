import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const getCartItemCount = () => cart.length;

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useCart = () => useContext(AppContext);
