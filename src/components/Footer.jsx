import React, { useState } from "react";
import { Button } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <div className="sitefooter" style={{ width: "100%" }}>
      <div id="siteSignature">© 2025 Lucas Berg</div>
      <button
        className="downloadResumeButton"
        onClick={() => window.open("/docs/LucasBerg_Resume.pdf", "_blank")}
      >
        Resume
      </button>
      <div className="footerSocialMediaLinks">
        <SocialMediaLinks></SocialMediaLinks>
      </div>
    </div>
  );
}

export default Footer;
