import React, { useState } from "react";
import { Button } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";
import resumePdf from "../docs/LucasBerg_Resume.pdf";

function Footer() {
  return (
    <div className="sitefooter" style={{ width: "100%" }}>
      <div id="siteSignature">© 2025 Lucas Berg</div>
      <button
        className="downloadResumeButton"
        onClick={() => window.open(resumePdf, "_blank")}
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
