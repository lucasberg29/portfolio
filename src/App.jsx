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

  const baseURL = import.meta.env.VITE_BASE_URL;
  return (
      <div>
        <Navigation className="navigation"/>
        <Routes>
          <Route path= {`${baseURL}home`} element={<HomePage />} />
          <Route path= {`${baseURL}games`} element={<GamesPage />} />
          <Route path= {`${baseURL}about`} element={<AboutMePage />} />
          <Route path= {`${baseURL}contact`} element={<ContactPage />} />
        </Routes>
      </div>
  );
}

export default App
