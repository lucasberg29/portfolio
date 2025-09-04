import { useState } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

import itchIcon from "../assets/icons/itch-io-svgrepo-com.svg";
import resumePdf from "../docs/LucasBerg_Resume.pdf";

function Navigation({ onNavigate, currentPage }) {
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(false);

  const isNavCurrentPage = (page) => page === currentPage;

  const navItem = (page, label, className = "navLink") => (
    <button
      className={`${className} ${
        isNavCurrentPage(page) ? "activeNavLink" : ""
      }`}
      onClick={() => {
        onNavigate(page);
        setIsNavigationExpanded(false);
      }}
    >
      {label}
    </button>
  );

  function handleBurgerClick() {
    setIsNavigationExpanded(!isNavigationExpanded);
  }

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "LucasBerg_Resume.pdf";
    link.click();
  };

  return (
    <div style={{ width: "100%" }}>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow navigationItems">
            <div className="navLinkLeft">
              <div className="block menuBurger">
                <button
                  onClick={handleBurgerClick}
                  className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              {navItem("home", "Home")}
              {navItem("games", "Games")}
              {navItem("contact", "Contact")}
            </div>
            <div className="navLinkRight">
              <Button
                onClick={() => downloadResume()}
                type="submit"
                variant="contained"
                size="small"
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
                Resume
              </Button>
              <a
                className="navLinkRightIcon"
                href="https://github.com/lucasberg29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ width: "34px", height: "34px" }} />
              </a>
              <a
                className="navLinkRightIcon"
                href="https://lucasberg29.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="100%"
                  className="itchIcon"
                  src={itchIcon}
                  alt="itch.io logo"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={isNavigationExpanded ? "mobileNav expandedNav" : "mobileNav"}
      >
        {navItem("home", "Home", "navExpandedLink")}
        {navItem("games", "Games", "navExpandedLink")}
        {navItem("contact", "Contact", "navExpandedLink")}
      </div>
    </div>
  );
}

export default Navigation;
