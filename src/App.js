import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import PlumbingPage from "./Pages/PlumbingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Routes */}
        <Route path="/services/plumbing" element={<PlumbingPage />} />
        <Route path="/services/painting" element={<Services />} />
        <Route path="/services/waterproofing" element={<Services />} />
        <Route path="/services/door-hanging" element={<Services />} />
        <Route path="/services/partitioning" element={<Services />} />
        <Route path="/services/ceilings" element={<Services />} />
        <Route path="/services/bulkheads" element={<Services />} />
        <Route path="/services/fix-suspended-ceilings" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
