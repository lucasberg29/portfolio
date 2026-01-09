import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import skills from "../data/skills.json";

function Skills() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [languages, setLanguages] = useState([]);
  const [programminglanguages, setProgramminglanguages] = useState([]);
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    setLanguages(skills[0].bulletPoints);
    setProgramminglanguages(skills[1].bulletPoints);
    setSoftware(skills[2].bulletPoints);
  }, []);

  return (
    <div id="skills">
      <div id="skillsTitle" className="sectionTitle">
        Skills
      </div>
      <div className="skillSections">
        <div className="skillSection">
          <div className="skillSectionTitle">Programming Languages</div>
          <Grid container spacing={0.1}>
            {programminglanguages.map((language, id) => (
              <Grid
                key={id}
                item
                xs={12}
                sm={12}
                md={5}
                className="gameGridItem"
              >
                <div className="skill">
                  <div>{language.name}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="skillSection">
          <div className="skillSectionTitle">Software / Frameworks</div>
          <Grid container spacing={0.1}>
            {software.map((language) => (
              <Grid
                key={language.name}
                item
                xs={12}
                sm={12}
                md={5}
                className="gameGridItem"
              >
                <div className="skill">
                  <div>{language.name}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="skillSection">
          <div className="skillSectionTitle">Languages</div>
          {languages.map((language) => (
            <div className="skill" key={language.name}>
              <img
                style={{
                  width: "32px",
                  height: "24px",
                  float: "left",
                  marginRight: "8px",
                }}
                src={language.src}
                alt={language.alt}
                width="32"
                height="24"
              />
              <div>{language.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
