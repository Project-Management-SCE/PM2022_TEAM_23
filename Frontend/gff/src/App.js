import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import Home from './components/pages/Home';
import SportsmanForm from './components/forms/SportsmanForm';
import About from './components/pages/About';
import CoachForm from './components/forms/CoachForm';
import LoginForm from './components/forms/LoginForm';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sportsman/sign_up" element={<SportsmanForm />} />
          <Route path="/coach/sign_up" element={<CoachForm />} />
        </Routes>
      </Router>
  );
}

export default App;
