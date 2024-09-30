import React, { useEffect } from 'react';
import Experience from "../components/Experience.jsx";
import experienceData from '../data/experience.json';

function HomePage({setSelectedPage, currentPage}) {
  useEffect(() => {
    setSelectedPage('home');
  }, []); 

  return(
    <div className="homePage">
      <h1>Experience</h1>
        {experienceData.map(experience => (
                    <Experience experience={experience}>
                    </Experience>
                ))}
      <h1>Education</h1>

      <h1>Skills</h1>
    </div>
  );
}

export default HomePage;