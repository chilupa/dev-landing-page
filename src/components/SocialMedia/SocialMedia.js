import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const icons = [
  { label: 'github', name: <GitHubIcon />, url: 'https://github.com/' },
  { label: 'linkedin', name: <LinkedInIcon />, url: 'https://linkedin.com/' },
];

const SocialMedia = () => {
  const handleClick = (url) => window.open(url);
  return (
    <Box component="span" data-testid="iconContainer">
      {icons.map((icon, index) => (
        <IconButton
          data-testid={icon.label}
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
