import React, { useEffect } from 'react';

function HomePage({currentPage}) {
  useEffect(() => {
    console.log(currentPage + ' before');
    currentPage = 'home';
    console.log("Home page loaded!");
    console.log(currentPage + ' after');
  }, []); 

  return(
    <div className="HomePage">
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;