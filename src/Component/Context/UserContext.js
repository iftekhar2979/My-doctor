import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    signInWithEmailAndPassword, signOut, updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.init';
  export const AuthContext=createContext(null)
   const UserContext = ({children}) => {
  
    
      const [user,setUser]=useState()
      const [loading,setLoading]=useState(true)
      const auth = getAuth(app)
 
      const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      
      const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
      const signOutUser = () => {
        return signOut(auth);
      };
     
      const updateUserProfile = (object) => {
          setLoading(true)
          return updateProfile(auth.currentUser, object);
        };
        
      useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            if (currentUser) {
              setLoading(false);
              setUser(currentUser);
            } else {
              setLoading(false);
            }
            return () => unSubscribe();
          });
        }, [auth]);
      const object={
          createNewUser,signIn,signOutUser,updateUserProfile,setUser,user,loading
  
      }
      return (
          <AuthContext.Provider value={object}>
              {children}
          </AuthContext.Provider>
      );
  };
  
  export default UserContext;