import React, { useEffect, useRef } from 'react';

/* global UnityLoader, UnityProgress */

const UnityPlayer = () => {
  const unityContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/games/flappyDuck/Build/UnityLoader.js'; // Correct path to UnityLoader.js

    script.onload = () => {
      if (typeof UnityLoader !== 'undefined' && typeof UnityProgress !== 'undefined') {
        UnityLoader.instantiate(unityContainerRef.current, '/games/flappyDuck/Build/Web.json', { onProgress: UnityProgress });
      } else {
        console.error('UnityLoader or UnityProgress is not defined.');
      }
    };

    script.onerror = () => {
      console.error('Failed to load UnityLoader.js.');
    };

    document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  }, []);

  return <div ref={unityContainerRef} style={{ width: '960px', height: '600px' }} />;
};

export default UnityPlayer;
