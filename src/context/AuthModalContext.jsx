// context/AuthModalContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openModal = (signUp = false) => {
    setIsSignUp(signUp);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <AuthModalContext.Provider
      value={{ isOpen, openModal, closeModal, isSignUp, setIsSignUp }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

// Custom hook
export const useAuthModal = () => useContext(AuthModalContext);
