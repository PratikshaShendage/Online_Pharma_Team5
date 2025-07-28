// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import axios from "../api/axiosConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const loginAdmin = async (email, password) => {
    try {
      // Backend admin login endpoint: POST /api/admin/login
      const res = await axios.post("/api/admin/login", { email, password });
      if (res.data.success) {
        const userInfo = { role: "ADMIN", email };
        setUser(userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
      return res.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Admin login failed" };
    }
  };

  const loginMember = async (email, password) => {
    try {
      // Backend member login endpoint: POST /api/members/login
      const res = await axios.post("/api/members/login", { email, password });
      if (res.data.success) {
        const userInfo = { role: "MEMBER", email };
        setUser(userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
      return res.data;
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Member login failed" };
    }
  };

  const registerMember = async (formData) => {
    try {
      // Backend member register endpoint: POST /api/members/register
      const res = await axios.post("/api/members/register", formData);
      return { success: true, message: "Registered successfully" };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Registration failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, loginAdmin, loginMember, registerMember, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
