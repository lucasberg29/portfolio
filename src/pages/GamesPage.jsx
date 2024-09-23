import React, { useState, useEffect } from 'react';
import UnityGame from "../components/UnityGame.jsx";
import gamesData from '../data/games.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

    // New function to handle game click and update state correctly
    function handleGameClick(gameId) {
        setGames((prevGames) =>
            prevGames.map((g) =>
                g.id === gameId ? { ...g, isRunning: true } : g
            )
        );
    }

    return (
        <div className="gamesPage">
            <h1>Games Page</h1>
            <div className="unityGamesSection">
            <h1>Unity Games</h1>
                <Swiper
                    slidesPerView={4}
                    navigation
                    loop
                    pagination={{ clickable: true }}
                >
                {games.map(game => (
                    <SwiperSlide key={game.id}>
                        <div className="gameCard">
                            <h1>{game.name}</h1>
                            <a onClick={() => handleGameClick(game.id)} className="gameCoverClick">
                                <img
                                    src={`${baseURL}games/${game.projectName}/art/gameCover.png`}
                                    className="gameCover"
                                    alt="Overlay"
                                />
                            </a>
                            <h2 className="gameDescription">{game.description}</h2>
                            <hr />
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <hr />
            {games.map((game) =>
                game.isRunning ? (
                    <UnityGame key={game.id} gameName={game.projectName} game={game} />
                ) : null
            )}
        </div>
    );
}

export default GamesPage;
