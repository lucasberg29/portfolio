import React, { useEffect } from 'react';
import Experience from "../components/Experience.jsx";
import Education from "../components/Education.jsx";
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';

function HomePage({setSelectedPage, currentPage}) {
  useEffect(() => {
    setSelectedPage('home');
  }, []); 

  return(
    <div className="homePage">
      <div className="sectionTitle">Experience</div>
        {experienceData.map((experience, id) => (
                    <Experience key={id} experience={experience}>
                    </Experience>
                ))}
      <div className="sectionTitle">Education</div>
      {educationData.map((education, id) => (
                    <Education key={id} education={education}>
                    </Education>
                ))}
      <div className="sectionTitle">Skills</div>
    </div>
  );
}

export default HomePage;