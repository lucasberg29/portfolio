import { useEffect, useState } from 'react';

import UnityGame from "../components/UnityGame.jsx";

import unityLogo from '../assets/icons/unity_logo.png';
import opengGlLogo from '../assets/icons/openGl_cpp_logo.png';

import gamesData from '../data/games.json';
import openGlData from '../data/openGlGames.json';
import { Grid } from '@mui/material';

function HomePage({setSelectedPage, currentPage}) {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const [games, setGames] = useState([]);

    useEffect(() => {
        setSelectedPage('home');
        setGames(gamesData);
    }, []);

    function handleGameClick(gameId) {
        setGames((prevGames) =>
            prevGames.map((g) =>
                g.id === gameId ? { ...g, isRunning: true } : g
            )
        );
    }

  return(
    <div className="homePage">
      <div className="introduction">
        <div className="salutation">Hello!</div>
        <div className="presentation">I'm Lucas Berg, a passionate software developer who loves to design and develop games and interactive applications.</div>
      </div>
            <div className="unityGamesGrid">
                <img className="unityLogo" src={unityLogo} alt="Unity logo image" />
                <Grid container spacing={5}>
                    {games.map((game,id) => (
                    <Grid key={id} item xs={12} sm={6} md={3} className="gameGridItem">
                        <div className="gameCard">
                            <h1>{game.name}</h1>
                            <a onClick={() => handleGameClick(game.id)} className="gameCoverClick">
                            <img
                                    src={`${baseURL}/games/${game.projectName}/art/gameCover.png`}
                                    className="gameCover"
                                    alt="Overlay"
                            />
                            </a>
                            <div className="gameTags">
                                <a href={game.gameRepo} >
                                    <div className="gameTag githubTag">Github</div>
                                </a>
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
            <div className="openGlGamesGrid">
                <img className="openGlLogo" src={opengGlLogo} alt="OpenGL/C++ image" />
                <Grid container spacing={5}>
                    {openGlData.map((game,id) => (
                        <Grid key={id} item xs={12} sm={6} md={3} className="gameGridItem">
                            <div className="gameCard">
                                <h1>{game.name}</h1>
                                <a href="https://lucasberg29.itch.io/galaga-1981" className="gameCoverClick">
                                    <img
                                    src={`${baseURL}/openglgames/${game.projectName}/art/gameCover.png`}
                                    className="gameCover"
                                    alt="Overlay"
                                    />
                                </a>
                                <div className="gameTags">
                                    <a href={game.gameRepo} >
                                    <div className="gameTag githubTag">Github</div>
                                    </a>
                                </div>
                                <div className="gameDescription">{game.description}</div>
                                <hr />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>

      <div className="sectionTitle">Skills</div>
      <div className="skillSection">
      <img
        style={{ width: '32px', height: '24px', float: 'left', marginRight: '8px' }}
      src="https://flagcdn.com/w320/br.png"
      alt="Brazil Flag"
      width="32"
      height="24"
    />
    <div>Native speaker</div>
  </div>

  <div className="skillSection" >
    <img
        style={{
    width: '32px',
    height: '24px',
    objectFit: 'cover',
    float: 'left',
    marginRight: '8px',
  }}
      src="https://flagcdn.com/w320/ca.png"
      alt="Canada Flag"
      width="32"
      height="24"
    />
  <div>Fluent in English</div>
</div>

    </div>
  );
}

export default HomePage;