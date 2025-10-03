import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import itchIcon from '../assets/icons/itch-io-svgrepo-com.svg';
import SocialMediaLinks from './SocialMediaLinks';

function Footer () {

    return (
        <div className='sitefooter' style={{width: "100%"}}>
            <p id="siteSignature">© 2025 Lucas Berg</p>
            <div className="footerSocialMediaLinks">
                <SocialMediaLinks></SocialMediaLinks>
            </div>
        </div>
    );
};

export default Footer;
