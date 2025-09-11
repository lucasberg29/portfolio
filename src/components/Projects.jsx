import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import UnityGame from "../components/UnityGame.jsx";

import unityLogo from "../assets/icons/unity_logo.png";
import opengGlLogo from "../assets/icons/openGl_cpp_logo.png";

import gamesData from "../data/games.json";
import openGlData from "../data/openGlGames.json";

import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData);
  }, []);

  function handleGameClick(gameId) {
    setGames((prevGames) =>
      prevGames.map((g) => (g.id === gameId ? { ...g, isRunning: true } : g))
    );
  }

  return (
    <div id="projects">
      <div id="projectsTitle" className="sectionTitle">
        Projects
      </div>
      <div className="unityGamesGrid">
        <Grid container spacing={4}>
          {games.map((game, id) => (
            <Grid key={id} item xs={12} sm={16} md={4} className="gameGridItem">
              <div className="gameCard">
                <h1 className="gameTitleHomepage">{game.name}</h1>
                <a
                  onClick={() => handleGameClick(game.id)}
                  className="gameCoverClick"
                >
                  <img
                    src={`${baseURL}/games/${game.projectName}/art/gameCover.png`}
                    className="gameCover"
                    alt="Overlay"
                  />
                </a>
                <div className="gameTagsHomePage">
                  <div className="gameTag">
                    <a
                      className="navLinkRightIcon"
                      href={game.gameRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{ width: "24px", height: "24px" }} />
                    </a>
                  </div>
                  <img
                    className="unityLogoHomePage"
                    src={unityLogo}
                    alt="Unity logo image"
                  />
                </div>
                <div className="gameDescription">{game.description}</div>
                <hr />
              </div>
            </Grid>
          ))}
          {openGlData.map((game, id) => (
            <Grid key={id} item xs={12} sm={6} md={4} className="gameGridItem">
              <div className="gameCard">
                <h1 className="gameTitleHomepage">{game.name}</h1>
                <a
                  href="https://lucasberg29.itch.io/galaga-1981"
                  className="gameCoverClick"
                >
                  <img
                    src={`${baseURL}/openglgames/${game.projectName}/art/gameCover.png`}
                    className="gameCover"
                    alt="Overlay"
                  />
                </a>
                <div className="gameTagsHomePage">
                  <div className="gameTag">
                    <a
                      className="navLinkRightIcon"
                      href={game.gameRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{ width: "24px", height: "24px" }} />
                    </a>
                  </div>
                  <img
                    className="openGlLogoHomePage"
                    src={opengGlLogo}
                    alt="OpenGL/C++ image"
                  />
                </div>
                <div className="gameDescription">{game.description}</div>
                <hr />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      {games.map((game) =>
        game.isRunning ? (
          <UnityGame key={game.id} gameName={game.projectName} game={game} />
        ) : null
      )}
    </div>
  );
}

export default Projects;
