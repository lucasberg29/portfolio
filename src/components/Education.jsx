import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Education({ education }) {

    useEffect(() => {

    }, []);

    return (
        <div className="education">
            <h1>{education.courseName}</h1>
            <a href={education.institutionWebsite}>
                <h1>{education.institution}</h1></a>
            <h1>{education.location}</h1>
            <h1>{education.startDate}</h1>
            <h1>{education.endDate}</h1>
            <List>
                {education.bulletPoints.map((bulletPoint, index) => (
                <ListItem key={index}>
                <ListItemText primary={bulletPoint} />
                </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Education;
