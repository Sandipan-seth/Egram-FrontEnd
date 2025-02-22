import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyProfile from "./pages/MyProfile";
import MyWorks from "./pages/MyWorks";
import AllServices from "./pages/AllServices";
import Verification from "./components/Verification";
import AdminPanel from "./pages/AdminPanel";
import ViewDetails from "./pages/ViewDetails";
import OfficerPanel from "./pages/OfficerPanel";
import OfficerViewDetails from "./pages/OfficerViewDetails";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-works" element={<AllServices />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/all-works/:id" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-panel/:serviceId" element={<ViewDetails />} />
        <Route path="/officer-panel/:serviceId" element={<OfficerViewDetails />} />

        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/officer-panel" element={<OfficerPanel />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
