import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./components/Common/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Common/Footer/Footer";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Account from "./pages/Account/Account";
import Loader from "./components/Common/Loader/Loader";
import { useAuth } from "./utils/Routing/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const auth = useAuth();

  return (
    <div className="App d-flex flex-column align-items-space-between h-100">
      {auth.isLoading && <Loader />}
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
