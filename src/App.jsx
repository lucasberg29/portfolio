import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import GamesPage from './pages/GamesPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Navigation from './Navigation.jsx'
import './styles/site.scss'
import './index.css'
import './App.css'

function App() {
  return (
      <div>
        <Navigation className="navigation"/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
  );
}

export default App
