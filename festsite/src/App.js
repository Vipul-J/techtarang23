import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import CodingDesc from './pages/CodingDesc';
import DesignDesc from './pages/DesignDesc';
import PhotoDesc from './pages/PhotoDesc';
import GameDesc from './pages/GameDesc';
import QuizDesc from './pages/QuizDesc';
import HuntDesc from './pages/HuntDesc';
import BestmDesc from './pages/BestmDesc';
import CommDesc from './pages/CommDesc';
// import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coding" element={<CodingDesc />} />
        <Route path="/photography" element={<PhotoDesc />} />
        <Route path="/gaming" element={<GameDesc />} /> 
        <Route path="/quiz" element={<QuizDesc />} /> 
        <Route path="/treasurehunt" element={<HuntDesc />} />  
        <Route path="/bestmanager" element={<BestmDesc />} />  
        <Route path="/communication" element={<CommDesc />} /> 
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route path="/designing" element={<DesignDesc />} />
      </Routes>
    </Router>
  );
}

export default App;
