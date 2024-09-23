import React, { useEffect } from 'react';

function HomePage({setSelectedPage, currentPage}) {
  useEffect(() => {
    setSelectedPage('home');
  }, []); 

  return(
    <div className="HomePage">
      <h1>Home Page</h1>

      <h1>Experience</h1>

      <h1>Education</h1>

      <h1>Skills</h1>
    </div>
  );
}

export default HomePage;