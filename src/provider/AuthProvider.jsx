// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {setItem,getItem,removeItem} = useLocaleStorage()

  // Function to update the user state and local storage
  const updateUser = (userData) => {
    setUser(userData);
    setItem("user", JSON.stringify(userData));
  };

  // Check for user data in local storage on component mount
  useEffect(() => {
    const storedUser = getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Set loading to false after checking local storage
  }, []);

  const login = (userData) => {
    updateUser(userData);
  };

  const logout = () => {
    setUser(null);
    removeItem("user")
  };

  return (
    <AuthContext.Provider value={{  user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
