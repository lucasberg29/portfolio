import React, { useState, useEffect } from 'react';
import UnityGame from "../components/UnityGame.jsx";
import gamesData from '../data/games.json';

function GamesPage({setSelectedPage}) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setSelectedPage('games');
      }, []); 


    useEffect(() => {
        setGames(gamesData);
    }, []);

    return (        
        <div className="GamesPage">
            <h1>Games Page</h1>
            <ul>
                {games.map(game => (
                <li key={game.id}>
                <UnityGame gameName={game.projectName} />
                </li>
            ))}
            </ul>
            <hr/>
        </div>
    ) 
}

export default GamesPage;
