import React, { useEffect } from 'react';

function AboutMePage({setSelectedPage}) {
    useEffect(() => {
        setSelectedPage('about');
    }, []); 

    return(
    <div className="aboutPage">
        <div className="salutation">Hello!</div>
        <div className="presentation">I'm Lucas Berg, a passionate software developer who loves to design and develop games and interactive applications.</div>
    </div>
    );
}

export default AboutMePage;