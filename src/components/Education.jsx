import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Education({ education }) {
    const baseURL = import.meta.env.VITE_BASE_URL;

    useEffect(() => {

    }, []);

    return (
        <div className="education">
            <div className="educationCourseLocation">
                <a href={education.institutionWebsite}>
                    <img className="educationInstitutionLogo" src={`${baseURL}icons/${education.institutionLogo}`} alt="Company Logo" />
                </a>
                <h1 className="educationLocation">{education.location}</h1>
            </div>
            <div className="educationCourseLocation">
                <h1 className="educationCourseName">{education.courseName}</h1>
            </div>
            <h1 className="educationDuration">{education.startDate} to {education.endDate}</h1>
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
