import React, { useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function GamesPage() {

    const baseURL = import.meta.env.VITE_BASE_URL;
    const gamePath = `${baseURL}games/flappyDuck/Build/`

    const {unityProvider} = useUnityContext({
        arguments: [],
        loaderUrl:      gamePath + "WebGL.loader.js",
        dataUrl:        gamePath + "WebGL.data",
        frameworkUrl:   gamePath + "WebGL.framework.js",
        codeUrl:        gamePath + "WebGL.wasm",
    });

    useEffect(() => {
        console.log("UnityContext:", unityProvider);
      }, [unityProvider]);

    return (        
        <div className="GamesPage">
            <h1>Games Page</h1>
            <Unity style={{width: "1920px", height: "1080px"}} unityProvider={unityProvider} />
        </div>
    ) 
}

export default GamesPage;
