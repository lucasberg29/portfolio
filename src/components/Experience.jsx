import React, { useState, useEffect } from 'react';
import experienceData from '../data/experience.json';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Experience({ experience }) {
    const [currentGameProvider, setCurrentGameProvider] = useState("");

    useEffect(() => {

    }, []);

    return (
        <div className="experience">
            <h1>{experience.position}</h1>
            <h2>{experience.field}</h2>
            <a href={experience.companyWebsite}><h1>{experience.companyName}</h1></a>
            <h1>{experience.location}</h1>
            <h1>{experience.duration}</h1>
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
