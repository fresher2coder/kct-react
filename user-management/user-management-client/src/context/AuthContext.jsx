import { useContext, useReducer } from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

import authReducer from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    username: null,
    profile: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);

  // Fetch profile using username
  const fetchUserProfile = async () => {
    if (!state.username) return;

    try {
      const response = await axios.get("http://localhost:3000/users");

      const matchedUser = response.data.find(
        (user) => user.credentials.username === state.username
      );

      if (matchedUser) {
        dispatch({ type: "SET_PROFILE", payload: matchedUser });
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  useEffect(() => {
    setLoading(false); // Skip auth check for JSON server
  }, []);

  const login = (username) => {
    dispatch({ type: "LOGIN", payload: username });
    console.log("context state:", state);
    fetchUserProfile(); // Automatically fetch profile after login
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const updateProfile = (updatedData) => {
    dispatch({ type: "UPDATE_PROFILE", payload: updatedData });
  };

  return (
    <AuthContext.Provider
      value={{ state, login, logout, fetchUserProfile, updateProfile, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
