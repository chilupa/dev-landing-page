import React from 'react';

import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const icons = [
  { label: 'github', name: <GitHub />, url: 'https://github.com/' },
  { label: 'linkedin', name: <LinkedIn />, url: 'https://linkedin.com/' },
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
          size="large"
        >
          {icon.name}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMedia;
