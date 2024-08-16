import React, { useEffect } from 'react';

function HomePage({setSelectedPage, currentPage}) {
  useEffect(() => {
    setSelectedPage('home');
  }, []); 

  return(
    <div className="HomePage">
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;