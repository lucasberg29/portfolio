import React, { useEffect } from 'react';

function AboutMePage({setSelectedPage}) {
    useEffect(() => {
        setSelectedPage('about');
    }, []); 

    return(
    <div className="aboutPage">
    </div>
    );
}

export default AboutMePage;