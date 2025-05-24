import { useState, useEffect } from 'react';
import UnityGame from "../components/UnityGame.jsx";
import gamesData from '../data/games.json';
import openGlData from '../data/openGlGames.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import unityLogo from '../assets/icons/unity_logo.png';
import opengGlLogo from '../assets/icons/openGl_cpp_logo.png';
import { Grid } from '@mui/material';

function GamesPage({ setSelectedPage }) {
    const baseURL = import.meta.env.VITE_BASE_URL;
    
    const [games, setGames] = useState([]);

    useEffect(() => {
        setSelectedPage('games');
        setGames(gamesData);
    }, []);

    function handleGameClick(gameId) {
        setGames((prevGames) =>
            prevGames.map((g) =>
                g.id === gameId ? { ...g, isRunning: true } : g
            )
        );
    }

    return (
        <div className="gamesPage">
            <div className="unityGamesGrid">
                <img className="unityLogo" src={unityLogo} alt="Unity logo image" />
                <Grid container spacing={5}>
                    {games.map((game,id) => (
                    <Grid key={id} item xs={12} sm={6} md={3} className="gameGridItem">
                        <div className="gameCard">
                            <h1>{game.name}</h1>
                            <a onClick={() => handleGameClick(game.id)} className="gameCoverClick">
                            <img
                                    src={`${baseURL}games/${game.projectName}/art/gameCover.png`}
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
                                    src={`${baseURL}openglgames/${game.projectName}/art/gameCover.png`}
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
        </div>
    );
}

export default GamesPage;
