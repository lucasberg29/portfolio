import './App.css';
import HomePage from './pages/HomePage.jsx';
import GamesPage from './pages/GamesPage.jsx'
import AboutMePage from './pages/AboutMePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Navigation from './Navigation.jsx'
import { Routes, Route } from 'react-router-dom';
import './styles/site.scss'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
