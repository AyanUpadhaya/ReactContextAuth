// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import jwt from 'jsonwebtoken';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to update the user state and local storage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const verifyToken = (token) => {
    try {
      const decodedToken = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
      const userData = {
        email: decodedToken.email,
        // Other user information you want to extract
      };
      updateUser(userData);
    } catch (error) {
      console.error("Error verifying token:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Check for user data in local storage on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      verifyToken(storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = (token) => {
    verifyToken(token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
