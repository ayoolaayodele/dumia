import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AppProvider } from './src/context/context';
import AuthNavigator from './src/navigation/AuthNavigator';
import {app } from "./src/config/firebase"
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useAuth } from './src/hooks/useAuth';

export default function App() {
    const { user, setUser } = useAuth(); 



  return (
     <NavigationContainer>
      <AppProvider>
       {user ? <AppNavigator/> : <AuthNavigator/>}
       </AppProvider>
     </NavigationContainer>
  );
}


