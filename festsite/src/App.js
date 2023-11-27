import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDesc from './pages/GameDesc';
import QuizDesc from './pages/QuizDesc';
import CommDesc from './pages/CommDesc';
import ArtDesc from './pages/ArtDesc';
import PaintDesc from './pages/PaintDesc';
import Registration from './components/Registration';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizDesc />} />
        <Route path="/gaming" element={<GameDesc />} />
        <Route path="/communication" element={<CommDesc />} />
        <Route path="/art" element={<ArtDesc />} />
        <Route path="/painting" element={<PaintDesc />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
