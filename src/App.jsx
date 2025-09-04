import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/site.scss";
import "./index.css";
import "./App.css";

function App() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [selectedPage, setSelectedPage] = useState("home");

  const handleNavigation = (path) => {
    setSelectedPage(path);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return (
          <HomePage
            currentPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        );
      case "games":
        return <GamesPage setSelectedPage={setSelectedPage} />;
      case "contact":
        return <ContactPage setSelectedPage={setSelectedPage} />;
      default:
        return (
          <HomePage
            currentPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        );
    }
  };

  return (
    <div className="siteWrapper">
      <Navigation
        currentPage={selectedPage}
        onNavigate={setSelectedPage}
        className="navigation"
      />
      <div className="siteBodyContainer">
        <div className="siteBody">{renderPage()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
