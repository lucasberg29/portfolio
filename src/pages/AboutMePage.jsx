import React, { useEffect } from 'react';

function AboutMePage({setSelectedPage}) {
    useEffect(() => {
        setSelectedPage('about');
    }, []); 

    return(
    <div className="aboutPage">
        <h1>About Me</h1>
    </div>
    );
}

export default AboutMePage;