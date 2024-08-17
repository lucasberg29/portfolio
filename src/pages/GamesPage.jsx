import React, { useEffect } from 'react';
import UnityGame from "../components/UnityGame.jsx";

function GamesPage({setSelectedPage}) {

    useEffect(() => {
        setSelectedPage('games');
      }, []); 

    //const baseURL = import.meta.env.VITE_BASE_URL;
    //const gamePath = `${baseURL}games/flappyDuck/Build/`

    return (        
        <div className="GamesPage">
            <h1>Games Page</h1>
            <UnityGame gameName="flappyDuck" />
            <hr/>
            {/* //<UnityGame gameName="flappyDuck" /> */}
        </div>
    ) 
}

export default GamesPage;
