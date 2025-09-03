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
      <Introduction></Introduction>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default HomePage;
