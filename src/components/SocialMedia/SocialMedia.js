import React from 'react';

import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, LogoDev, Twitter } from '@mui/icons-material';

const icons = [
  { label: 'github', name: <GitHub />, url: 'https://github.com/chilupa' },
  {
    label: 'linkedin',
    name: <LinkedIn />,
    url: 'https://www.linkedin.com/in/pavanchilukuri/',
  },
  {
    label: 'Twitter',
    name: <Twitter />,
    url: 'https://twitter.com/ichilupa',
  },
  {
    label: 'Dev',
    name: <LogoDev />,
    url: 'https://dev.to/chilupa',
  },
];

const SocialMedia = () => {
  const handleClick = (url) => window.open(url);
  return (
    <Box component="span" data-testid="iconContainer">
      {icons.map((icon, index) => (
        <IconButton
          aria-label={icon.label}
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
