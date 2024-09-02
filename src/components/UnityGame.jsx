import React, { useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import Button from '@mui/material/Button';
import { stringUtils } from '../tools/utils';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function GamesPage({gameName}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => {
        setIsModalOpen(false);
        restartGame();
        pauseGame();
    }

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

    function restartGame() {
        sendMessage("_ReactController", "RestartGame");
    }

    return (  
        <div className="gameCard">
            <h1>{gameTitle}</h1>
            <a onClick={startGame} className="gameCoverClick">
                <img
                    src={`${baseURL}games/${gameName}/art/gameCover.png`} // Update the image URL
                    className="gameCover"
                    alt="Overlay"
                />
            </a>
            <Button onClick={startGame}>Start Game</Button>
            <Button onClick={pauseGame}>Pause Game</Button>
            <Modal show={isModalOpen} onClose={closeModal}>
                <h2 className="modalGameTitle">{gameTitle}</h2>
                <Unity className='unityGame' unityProvider={unityProvider} > </Unity>
            </Modal>
        </div>   
    ) 
}

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay modalHeader" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <CloseIcon className="closeGameIcon" onClick={onClose}></CloseIcon>
                {children}
            </div>
        </div>
    );
};

export default GamesPage;
