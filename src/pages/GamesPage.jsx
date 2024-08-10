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
