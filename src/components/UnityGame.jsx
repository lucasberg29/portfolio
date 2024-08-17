import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function GamesPage({gameName}) {

    const baseURL = import.meta.env.VITE_BASE_URL;
    const gamePath = `${baseURL}games/${gameName}/Build/`

    const {unityProvider, sendMessage, isLoaded, loadingProgression, error} = useUnityContext({
        loaderUrl:      gamePath + "WebGL.loader.js",
        dataUrl:        gamePath + "WebGL.data",
        frameworkUrl:   gamePath + "WebGL.framework.js",
        codeUrl:        gamePath + "WebGL.wasm",
    });

    function pauseGame() {
        sendMessage("_LevelManager", "PauseGame");
    }
    
    function startGame() {
        sendMessage("_LevelManager", "ResumeGame");
    }

    return (  
        <div>
            <Unity className='unityGame' unityProvider={unityProvider} />
            <button onClick={startGame}>Start Game</button>
            <button onClick={pauseGame}>Pause Game</button>
        </div>   
    ) 
}

export default GamesPage;
