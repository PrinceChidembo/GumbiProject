import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import PlumbingPage from "./Pages/PlumbingPage";
import DoorFittingPage from "./Pages/Services/DoorFittingPage";
import PaintingPage from "./Pages/Services/PaintingPage";
import PartitioningPage from "./Pages/Services/PartitioningPage";
import CeilingPage from "./Pages/Services/CeilingPage";
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
        <Route path="/services/painting" element={<PaintingPage />} />
        <Route path="/services/waterproofing" element={<Services />} />
        <Route path="/services/door-hanging" element={<DoorFittingPage />} />
        <Route path="/services/partitioning" element={<PartitioningPage />} />
        <Route path="/services/ceilings" element={<CeilingPage />} />
        <Route path="/services/bulkheads" element={<Services />} />
        <Route path="/services/fix-suspended-ceilings" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
