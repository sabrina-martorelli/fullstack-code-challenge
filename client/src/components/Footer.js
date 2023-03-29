
import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box  xs={12} >
        
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="www.linkedin.com/in/sabrina-martorelli" target="blank" />
          <BottomNavigationAction label="Github" icon={<GitHubIcon />}  href="https://github.com/sabrina-martorelli/" target="blank" />
          <BottomNavigationAction label="Email" icon={<EmailIcon />}  href="mailto:sabrina.martorelli@gmail.com" target="blank" />
        </BottomNavigation>
      </Box>
    );
}
 
export default Footer;