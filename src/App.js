import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ModulTeknik from './components/ModulTeknik';
import VideoTutorial from './components/VideoTutorial';
import SimulasiStrategi from './components/SimulasiStrategi';
import Kuis from './components/Kuis';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modul" element={<ModulTeknik />} />
        <Route path="/video" element={<VideoTutorial />} />
        <Route path="/simulasi" element={<SimulasiStrategi />} />
        <Route path="/kuis" element={<Kuis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
