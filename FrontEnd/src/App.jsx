import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Services from "./Services";
import ContactUs from "./ContactUs";
import LoginPage from "./LoginPage";
import About from "./About";
import Dashboard from "./Dashboard";
import SignupPage from "./SignUp";

// ✅ Layout Wrapper to handle conditional rendering
function Layout({ children }) {
  const location = useLocation();

  // Paths where we DON'T want Header/Footer
  const hideLayoutPaths = ["/login", "/dashboard","/signup"];

  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<SearchPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
