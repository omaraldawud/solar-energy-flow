//src/App.tsx
//

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FreeDesignPage from './pages/FreeDesignPage';
import { AboutUsPage } from './pages/AboutUsPage';
import SolarEenergyServices from './pages/SolarEenergyServices';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solar-energy-services" element={<SolarEenergyServices />} />
        <Route path="/free-solar-system-design" element={<FreeDesignPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
