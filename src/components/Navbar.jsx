import { useEffect } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ItchLogo from "../assets/icons/itch_logo.png";

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
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={() => GoTo(to)}
        sx={{
          mt: 0,
          px: 10,
          py: 1.5,
          fontSize: "0.75rem",
          fontFamily: "monospace",
          backgroundColor: "teal",
          color: "white",
          borderRadius: "50px",
          mx: "auto",
          "&:hover": {
            backgroundColor: "#008080",
          },
        }}
      >
        {children}
      </Button>
    );
  }

  return (
    <div className="navbar">
      <div className="navbarButtons">
        <div className="navbarNavButtons">
          <CustomButton to="#home">Home</CustomButton>
          <CustomButton to="#projects">Games</CustomButton>
          <CustomButton to="#contact">Contact</CustomButton>
        </div>

        <div className="gameTag">
          <a
            className="customIcon githubIcon"
            href="https://github.com/lucasberg29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              style={{
                width: "24px",
                height: "24px",
              }}
            />
          </a>
        </div>
        <div className="gameTag">
          <a
            className="customIcon linkedinIcon"
            href="https://www.linkedin.com/in/lucas-berg-dos-santos-b78297221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{
                color: "white",
                width: "24px",
                height: "24px",
                backgroundColor: "rgb(25, 118, 210)",
              }}
            />
          </a>
        </div>

        <div className="gameTag">
          <a
            className="customIcon itchCustomIcon"
            href="https://lucasberg29.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="itchLogoImage" src={ItchLogo} alt="Itch.io Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
