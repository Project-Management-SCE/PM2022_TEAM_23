import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import Home from './components/pages/Home';
import SportsmanForm from './components/forms/SportsmanForm';
import About from './components/pages/About';
import CoachForm from './components/forms/CoachForm';
import LoginForm from './components/forms/LoginForm';
import {UserProvider} from './UserContext';
import OurCoaches from './components/pages/OurCoaches';
import MySportsmans from './components/pages/MySportsmans';
<<<<<<< HEAD
import SportsmanProfile from './components/pages/SportsmanProfile';
=======
>>>>>>> b0bfd69f6bc627ec39e8b5f47ec3174c0f145cbd

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sportsman/sign_up" element={<SportsmanForm />} />
            <Route path="/coach/sign_up" element={<CoachForm />} />
            <Route path='/publicCoaches' element={<OurCoaches />} />
            <Route path='/MySportsmans' element={<MySportsmans />} />
<<<<<<< HEAD
            <Route path='/sportsman/MyProfile' element={<SportsmanProfile />} />
=======
>>>>>>> b0bfd69f6bc627ec39e8b5f47ec3174c0f145cbd
        </Routes>
      </Router>
      </UserProvider>
  );
}

export default App;
