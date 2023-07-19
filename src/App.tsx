import "./App.css";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
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
