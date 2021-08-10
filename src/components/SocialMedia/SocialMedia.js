import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const icons = [
  { name: <GitHubIcon />, url: 'https://github.com/' },
  { name: <LinkedInIcon />, url: 'https://linkedin.com/' },
];

const SocialMedia = () => {
  const handleClick = (url) => window.open(url);
  return (
    <Box component="span">
      {icons.map((icon, index) => (
        <IconButton
          onClick={() => handleClick(icon.url)}
          key={index}
          color="secondary"
        >
          {icon.name}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMedia;
