import React, { useEffect } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function GamesPage() {
    const {unityProvider} = useUnityContext({
        arguments: [],
        loaderUrl:      "/games/flappyDuck/Build/WebGL.loader.js",
        dataUrl:        "/games/flappyDuck/Build/WebGL.data",
        frameworkUrl:   "/games/flappyDuck/Build/WebGL.framework.js",
        codeUrl:        "/games/flappyDuck/Build/WebGL.wasm",
    });

    return (        
        <div className="GamesPage">
            <h1>Games Page</h1>
            <Unity style={{ width: "100%" }} unityProvider={unityProvider} />
        </div>
    ) 
}

export default GamesPage;
