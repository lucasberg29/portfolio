import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { stringUtils } from '../tools/utils';

function Skill({ skill }) {
    const baseURL = import.meta.env.VITE_BASE_URL;

    useEffect(() => {

    }, []);

    return (
        <div className="skill">
            <div>{stringUtils.ConvertCamelCaseToTitleCase(skill.name)}</div>
            <List>
                {skill.bulletPoints.map((bulletPoint, index) => (
                <ListItem key={index}>
                    <ListItemText primary={`${bulletPoint.name} - ${bulletPoint.level}`}/>
                </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Skill;
