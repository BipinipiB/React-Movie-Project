import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const[token,setToken] = useState(null);

  // check localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("email");
    if (token) {
      setIsLoggedIn(true);
      setEmail(user);
      setToken(token);
    }
  }, []);

  const login = (newToken, user) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("email", user);
    setIsLoggedIn(true);
    setToken(newToken);
    setEmail(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    setEmail("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, token,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
