import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null); 
  const logout = () => {
    setLoggedIn(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, username, setUsername, logout }}>
      {children}
    </AuthContext.Provider>
  );
};




// import { createContext } from 'react';

// const AuthContext = createContext({
//   loggedIn: false,
//   setLoggedIn: () => {}
// });

