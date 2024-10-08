import React, { useState, useEffect } from 'react';
import UnityGame from "../components/UnityGame.jsx";
import gamesData from '../data/games.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import unityLogo from '../assets/icons/unity_logo.png';
import { Grid } from '@mui/material';

import { Navigation, Pagination } from 'swiper/modules';  // Import Navigation and Pagination modules

function GamesPage({ setSelectedPage }) {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState("");
    const [currentGameProvider, setCurrentGameProvider] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSendMessage, setCurrentSendMessage] = useState(null);  // Add this line

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        console.log("closing modal!");
        setIsModalOpen(false);
        restartGame();
        pauseGame();
    }

    useEffect(() => {
        setSelectedPage('games');
        setGames(gamesData);
    }, []);

    function startGame(game, unityProvider, sendMessage) {
        setCurrentGame(game);
        setCurrentGameProvider(unityProvider);
        setCurrentSendMessage(sendMessage); // Ensure sendMessage is properly passed
        openModal();
        if (currentSendMessage) {
            currentSendMessage("_ReactController", "ResumeGame");
        }
    }

    function pauseGame() {
        if (currentSendMessage) {
            currentSendMessage("_ReactController", "PauseGame");
        }
    }

    function restartGame() {
        if (currentSendMessage) {
            currentSendMessage("_ReactController", "RestartGame");
        }
    }

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
        </div>
    );
}

export default GamesPage;
