import { initializeApp } from '@firebase/app';
import { initializeAuth, getReactNativePersistence } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDDTpHcKo5kTAAbrx1xyjwyOVwXeCOAsyU",
  authDomain: "dumia-4e8b3.firebaseapp.com",
  projectId: "dumia-4e8b3",
  storageBucket: "dumia-4e8b3.appspot.com",
  messagingSenderId: "532193109362",
  appId: "1:532193109362:web:83033237b426a7c2ad69eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
