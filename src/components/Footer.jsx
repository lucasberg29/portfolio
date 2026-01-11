import React, { useState } from "react";
import { Button } from "@mui/material";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <div className="sitefooter" style={{ width: "100%" }}>
      <div id="siteSignature">© 2025 Lucas Berg</div>
      <Button variant="contained" size="small" className="downloadResumeButton">
        Resume
      </Button>
      <div className="footerSocialMediaLinks">
        <SocialMediaLinks></SocialMediaLinks>
      </div>
    </div>
  );
}

export default Footer;
