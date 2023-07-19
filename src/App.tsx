import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import SideSocials from "./components/SideSocials";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer />
        <Header />
        <SideSocials />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
