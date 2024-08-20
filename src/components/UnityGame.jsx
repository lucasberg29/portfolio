import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from '@mui/material/Button';

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
        sendMessage("_ReactController", "PauseGame");
    }
    
    function startGame() {
        sendMessage("_ReactController", "ResumeGame");
    }

    return (  
        <div>
            <Unity className='unityGame' unityProvider={unityProvider} />
            <Button onClick={startGame}>Start Game</Button>
            <Button onClick={pauseGame}>Pause Game</Button>
        </div>   
    ) 
}

export default GamesPage;
