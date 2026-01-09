import { useEffect, useState } from "react";

import Introduction from "../components/Introduction.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";

function HomePage({ setSelectedPage, currentPage }) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [pages, setPages] = useState([]);

  function GoToComponent(component) {
    switch (component) {
      case "home":
        setPages([
          <Introduction key="home" id="home" />,
          <Projects
            GoToComponent={GoToComponent}
            key="projects"
            id="projects"
          />,
          <Skills GoToComponent={GoToComponent} key="skills" id="skills" />,
          <Contact GoToComponent={GoToComponent} key="contact" id="contact" />,
        ]);
        break;
      case "projects":
        setPages([
          <Projects
            GoToComponent={GoToComponent}
            key="projects"
            id="projects"
          />,
          <Skills GoToComponent={GoToComponent} key="skills" id="skills" />,
          <Contact GoToComponent={GoToComponent} key="contact" id="contact" />,
        ]);
        break;
      case "contact":
        setPages([
          <Contact GoToComponent={GoToComponent} key="contact" id="contact" />,
          <Projects
            GoToComponent={GoToComponent}
            key="projects"
            id="projects"
          />,
          <Skills GoToComponent={GoToComponent} key="skills" id="skills" />,
        ]);
        break;
    }
  }

  useEffect(() => {
    setSelectedPage("home");
    setPages([
      <Introduction key="home" id="home" />,
      <Projects GoToComponent={GoToComponent} key="projects" id="projects" />,
      <Skills GoToComponent={GoToComponent} key="skills" id="skills" />,
      <Contact GoToComponent={GoToComponent} key="contact" id="contact" />,
    ]);
  }, []);

  return <div className="homePage">{pages}</div>;
}

export default HomePage;
