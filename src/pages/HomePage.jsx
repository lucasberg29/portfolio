import React, { useEffect } from 'react';
import Experience from "../components/Experience.jsx";
import Education from "../components/Education.jsx";
import Skill from "../components/Skill.jsx";

import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import skillsData from '../data/skills.json';

function HomePage({setSelectedPage, currentPage}) {
  useEffect(() => {
    setSelectedPage('home');
  }, []); 

  return(
    <div className="homePage">
      <div className="introduction">
        <div className="salutation">Hello!</div>
        <div className="presentation">I'm Lucas Berg, a passionate software developer who loves to design and develop games and interactive applications.</div>
      </div>
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
      {skillsData.map((skill, id) => (
                    <Skill key={id} skill={skill}>
                    </Skill>
                ))}
    </div>
  );
}

export default HomePage;