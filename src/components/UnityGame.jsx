import { useState, useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { stringUtils } from '../tools/utils';
import CloseIcon from '@mui/icons-material/Close';

function UnityGame({gameName, game, setCurrentGame, setCurrentGameProvider}) {

    const gameTitle = stringUtils.ConvertCamelCaseToTitleCase(gameName);
    const baseURL = import.meta.env.VITE_BASE_URL;
    const gamePath = `${baseURL}/games/${gameName}/Build/`;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const {unityProvider, sendMessage, isLoaded, loadingProgression, error, unload} = useUnityContext({
        loaderUrl:      gamePath + "WebGL.loader.js",
        dataUrl:        gamePath + "WebGL.data",
        frameworkUrl:   gamePath + "WebGL.framework.js",
        codeUrl:        gamePath + "WebGL.wasm",
    });

    function pauseGame() {
        sendMessage("_ReactController", "PauseGame");
    }

    useEffect(() => {
        startGame();
    }, []); 
    
    function startGame() {
        setIsModalOpen(true);
        sendMessage("_ReactController", "ResumeGame");
    }

    function restartGame() {
        sendMessage("_ReactController", "RestartGame");
    }

    const closeModal = async () => {
        console.log("closing modal!");
        setIsModalOpen(false);
        restartGame();
        pauseGame();

        try {
            await unload();
            console.log("Unity instance successfully unloaded.");
        } catch (error) {
            console.error("Error unloading Unity:", error);
        }
            game.isRunning = false;
    }

    return (  
        <div>
            <Modal className="gameModal" show={isModalOpen} onClose={closeModal}>
                <div className="gameModelHeader">
                    <h2 className="gameModelHeaderName">{game.name}</h2>
                    <CloseIcon className="closeGameIcon" onClick={closeModal}></CloseIcon>
                </div>
                <Unity className='unityGame' unityProvider={unityProvider} > </Unity>
            </Modal>
        </div>   
    ) 
}

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="modalOverlay modalHeader" onClick={onClose}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default UnityGame;
