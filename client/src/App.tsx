//src/App.tsx
//

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FreeDesignPage from './pages/FreeDesignPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-solar-system-design" element={<FreeDesignPage />} />
      </Routes>
    </Router>
  );
};

export default App;
