import { Divider, colors } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Help() {
    const [readmeContent, setReadmeContent] = useState('');

    useEffect(() => {
        const username = 'IP-299-Deepracer';
        const repo = 'Deepracer-Dashboard';
        const readmeFilePath = 'README.md'; // Update with the correct path if necessary

        const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${readmeFilePath}`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.content) {
                const decodedContent = atob(data.content); // Decode base64-encoded content
                setReadmeContent(decodedContent); // Update state with README content
            } 
            else {
                console.error('README not found');
            }
        })
        .catch(error => {
            console.error('Error fetching README:', error);
        });
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <header className="App-header">
        <h1>Project ReadMe</h1>
        <p>This is kept up-to-date automatically</p>
        <p className='ReadMe'>
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </p>
        </header>
    );
}

export default Help;
