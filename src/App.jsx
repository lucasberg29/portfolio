import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Routes, Route, Navigate  } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import GamesPage from './pages/GamesPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './components/NotFound.jsx';
import Navigation from './Navigation.jsx'
import './styles/site.scss'
import './index.css'
import './App.css'

function App() {

  const baseURL = import.meta.env.VITE_BASE_URL;
  const [selectedPage, setSelectedPage] = useState('home');

  const handleNavigation = (path) => {
    setSelectedPage(path);
  };

  return (
      <div>
        <Navigation currentPage={selectedPage} onNavigate={handleNavigation} className="navigation"/>
        <Routes>
          <Route path= {`/`} element={<HomePage currentPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path= {`home`} element={<HomePage currentPage={selectedPage} setSelectedPage={setSelectedPage} />} />
          <Route path= {`games`} element={<GamesPage setSelectedPage={setSelectedPage} />} />
          <Route path= {`about`} element={<AboutMePage setSelectedPage={setSelectedPage} />} />
          <Route path= {`contact`} element={<ContactPage setSelectedPage={setSelectedPage} />} />
          <Route path= {`*`} element={<HomePage currentPage={selectedPage} setSelectedPage={setSelectedPage} />} />
        </Routes>
      </div>
  );
}

export default App
