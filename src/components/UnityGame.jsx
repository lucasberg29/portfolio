import React, { useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function GamesPage({gameName}) {

    const baseURL = import.meta.env.VITE_BASE_URL;
    const gamePath = `${baseURL}games/${gameName}/Build/`

    const {unityProvider} = useUnityContext({
        arguments: [],
        loaderUrl:      gamePath + "WebGL.loader.js",
        dataUrl:        gamePath + "WebGL.data",
        frameworkUrl:   gamePath + "WebGL.framework.js",
        codeUrl:        gamePath + "WebGL.wasm",
    });

    return (        
        <Unity className='unityGame' unityProvider={unityProvider} />
    ) 
}

export default GamesPage;
