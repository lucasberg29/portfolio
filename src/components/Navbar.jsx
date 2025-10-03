import { useEffect } from "react";

function Navbar(handleNavigation) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {}, []);

  function GoTo(location) {
    const element = document.querySelector(location);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function CustomButton({ children, to }) {
    return (
      <button
        type="button"
        onClick={() => GoTo(to)}
        className="navbarButton"
      >
        {children}
      </button>
    );
  }

  return (
    <div className="navbar">
      <div className="navbarName">
        Lucas Berg
      </div>
      <div className="navbarButtons">
          <CustomButton to="#home">Home</CustomButton>
          <CustomButton to="#projects">Projects</CustomButton>
          <CustomButton to="#contact">Contact</CustomButton>
      </div>
    </div>
  );
}

export default Navbar;
