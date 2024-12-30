import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Backend_API from "../../Backend_API";
export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        `${Backend_API}/api/auth/login`,
        inputs,
        {
          withCredentials: true, 
        }
      );
      setCurrentUser(res.data); 
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  

  const logout = async (inputs) => {
    await axios.post(`${Backend_API}/api/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
