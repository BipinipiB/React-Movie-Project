import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // check localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");
    if (token) {
      setIsLoggedIn(true);
      setUsername(user);
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", user);
    setIsLoggedIn(true);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
