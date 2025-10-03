import { useEffect, useState } from "react";

function Introduction() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {}, []);

  return (
    <div className="introduction">
      <div className="salutation">Hi, I'm Lucas Berg!</div>
      <div className="presentation">
        I'm a passionate software developer who loves to design and
        develop games and interactive applications.
      </div>
    </div>
  );
}

export default Introduction;
