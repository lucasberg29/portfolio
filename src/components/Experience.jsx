import React, { useState, useEffect } from 'react';
import experienceData from '../data/experience.json';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



function Experience({ experience }) {

    const baseURL = import.meta.env.VITE_BASE_URL;

    useEffect(() => {

    }, []);

    return (
        <div className="experience">
            <div className="experiencePosLoc">
                <div className="experiencePosition">{experience.position}</div>
                <div className="experienceLocation">{experience.location}</div>
            </div>
            <div className="experiencePosLoc">
                <a href={experience.companyWebsite}>
                    <img className="experienceCompanyLogo" src={`${baseURL}icons/${experience.companyLogo}`} alt="Company Logo" />
                </a>
                <h1>{experience.duration}</h1>
            </div>
            <List>
                {experience.bulletPoints.map((bulletPoint, index) => (
                <ListItem key={index}>
                <ListItemText primary={bulletPoint} />
                </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Experience;
