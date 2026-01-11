import { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import ItchLogo from "../assets/icons/itch_logo.png";

function SocialMediaLinks(handleNavigation) {
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {}, []);

  return (
    <div className="socialMediaLinks">
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
  );
}

export default SocialMediaLinks;
