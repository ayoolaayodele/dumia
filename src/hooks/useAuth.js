import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app , auth} from "../config/firebase";

export function useAuth() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

 useEffect(() => {
    const auth = getAuth(app);
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is logged in:', user);
        setUser(user);
      } else {
        console.log('No user is logged in');
        setUser(null);
      }
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, [setUser]);
  return {
    user,
    loading
  };
}