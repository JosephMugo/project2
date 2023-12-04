import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext(null);

export const alertOptions = {
  position: "top-right",
  autoClose: 2000,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "light",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = (user) => {
    setIsLoading(true);
    axios
      .post("http://localhost:8080/login", user)
      .then((res) => {
        setUserID(res.data.id);
        setIsLoading(false);
        setUser(user);
        navigate("/");
        toast.success("Success", alertOptions);
      })
      .catch((e) => {
        toast.error("Failed to login", alertOptions);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setUser(null);
    toast.info("Logged Out", alertOptions);
  };

  const register = (data) => {
    axios
      .post("http://localhost:8080/registration", data)
      .then((res) => {
        setIsLoading(false);
        navigate("/login");
        toast.success("Register Successfully", alertOptions);
      })
      .catch((e) => {
        toast.error("Username already exist", alertOptions);
        setIsLoading(false);
      });
  };

  const createUserDetails = (data) => {
    axios
      .post("http://localhost:8080/account", data)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((e) => {
        toast.error("Something went wrong!", alertOptions);
        setIsLoading(false);
      });
  };

  const updateUserDetails = (data) => {
    axios
      .put("http://localhost:8080/account", { ...data, userID })
      .then((res) => {
        setIsLoading(false);
        toast.success("Successfully Updated", alertOptions);
      })
      .catch((e) => {
        toast.error("Something went wrong!", alertOptions);
        setIsLoading(false);
      });
  };

  const setLoading = (loading = false) => {
    setIsLoading(loading);
  };

  const getAccountDetails = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        setLoading,
        register,
        updateUserDetails,
        createUserDetails,
        getAccountDetails,
        userID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
