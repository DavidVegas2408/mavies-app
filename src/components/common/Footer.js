import React from 'react'
import { Typography } from '@material-ui/core';

const Footer = () => (
    <footer>
        <Typography gutterBottom variant="body2" component="p">
        &copy; {new Date().getFullYear()} - David Vegas
          </Typography>
        
    </footer>
);

export default Footer
