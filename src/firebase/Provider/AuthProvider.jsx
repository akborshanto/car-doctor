import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import React from "react";
import { app } from "./../firebase.config";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  //when  a user is logged in with a passwoed creedeintial
  const [user, setUser] = useState(null);

  //loading state is necessary because the data is loaded form the userhas
  const [loading, setLoading] = useState(true);
  //creatae a new user when the user  is registeed
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //when a user successfully signs in you can get  information about the user in the objerber

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current usre",currentUser)
      setLoading(false)
    });
    //unsubscribe form  when the user is unsubscribed from the auth staete 
    return () => {
      return unsubscribe();
    };
  }, []);

  //sign in with email and password form login 
  const signIn=(email,password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)

  }
  //here is the defaine auth info provider values
  const authInfo = {
    user,
    loading,
    createUser,
    signIn
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
