import { useState, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (user) => {
    setIsLoading(true);
    axios
      .post("http://localhost:8080/login", user)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((e) => {
        alert(`Something went wrong: ${e}`);
        setIsLoading(false);
      });
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (data) => {
    axios
      .post("http://localhost:8080/registration", data)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((e) => {
        alert(`Something went wrong: ${e}`);
        setIsLoading(false);
      });
  };

  const updateUser = (data) => {
    axios
      .put("http://localhost:8080/update", data)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((e) => {
        alert(`Something went wrong: ${e}`);
        setIsLoading(false);
      });
  };

  const setLoading = (loading = false) => {
    setIsLoading(loading);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        setLoading,
        register,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
