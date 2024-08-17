import React, { useEffect } from 'react';
import UnityGame from "../components/UnityGame.jsx";

function GamesPage({setSelectedPage}) {
    useEffect(() => {
        setSelectedPage('games');
      }, []); 

    return (        
        <div className="GamesPage">
            <h1>Games Page</h1>
            <UnityGame gameName="flappyDuck" />
            <hr/>
        </div>
    ) 
}

export default GamesPage;
