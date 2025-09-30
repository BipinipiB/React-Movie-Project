import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  // check localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("email");
    if (token) {
      setIsLoggedIn(true);
      setEmail(user);
    }
  }, []);

  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", user);
    setIsLoggedIn(true);
    setEmail(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
