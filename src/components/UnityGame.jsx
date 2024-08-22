import React, { useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from '@mui/material/Button';
import { stringUtils } from '../tools/utils';

function GamesPage({gameName}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const gameTitle = stringUtils.ConvertCamelCaseToTitleCase(gameName);
    const baseURL = import.meta.env.VITE_BASE_URL;
    const gamePath = `${baseURL}games/${gameName}/Build/`;

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
        openModal();
        sendMessage("_ReactController", "ResumeGame");
    }

    return (  
        <div className="gameCard">
            <h1>{gameTitle}</h1>
            <img
                src={`${baseURL}games/${gameName}/art/gameCover.png`} // Update the image URL
                className="gameCover"
                alt="Overlay"
            />
            <Button onClick={startGame}>Start Game</Button>
            <Button onClick={pauseGame}>Pause Game</Button>
            <Modal show={isModalOpen} onClose={closeModal}>
                <h2>{gameTitle}</h2>
                <Unity className='unityGame' unityProvider={unityProvider} > </Unity>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>   
    ) 
}

const Modal = ({ show, onClose, children }) => {
    if (!show) return null; // Don't render if `show` is false

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default GamesPage;
