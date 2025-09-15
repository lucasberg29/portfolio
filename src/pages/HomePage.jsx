import { useEffect, useState } from "react";

import Introduction from "../components/Introduction.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";

function HomePage({ setSelectedPage, currentPage }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    setSelectedPage("home");
  }, []);

  function handleGameClick(gameId) {
    setGames((prevGames) =>
      prevGames.map((g) => (g.id === gameId ? { ...g, isRunning: true } : g))
    );
  }

  return (
    <div className="homePage">
      <Introduction id="home"></Introduction>
      <Projects id="projects"></Projects>
      <Skills id="skills"></Skills>
      <Contact id="contact"></Contact>
    </div>
  );
}

export default HomePage;
