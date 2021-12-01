import React from 'react';

import { Box, IconButton, colors } from '@mui/material';

import { useTheme } from '@mui/styles';
import theme from '../../utils/theme';

const colorPalettes = [
  { primary: colors.blue[700], secondary: colors.orange[500] },
  { primary: colors.purple[500], secondary: colors.teal[200] },
  { primary: colors.purple[500], secondary: colors.orange[600] },
  { primary: colors.green[800], secondary: colors.orange[800] },
];

const handlePaletteChange = (primaryColor, secondaryColor) => {
  console.log(`primaryColor`, primaryColor);
  console.log(`secondaryColor`, secondaryColor);
  theme.palette.primary.main = primaryColor;
  theme.palette.secondary.main = secondaryColor;
};

const Header = () => {
  return (
    <Box display="flex" flexDirection="row" gap={2} pt={1}>
      {colorPalettes.map(({ primary, secondary }, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="row"
          sx={{ cursor: 'pointer' }}
          onClick={() => handlePaletteChange(primary, secondary)}
        >
          <Box
            p={2}
            sx={{
              backgroundColor: primary,
              borderTopLeftRadius: '5%',
              borderBottomLeftRadius: '5%',
            }}
          ></Box>
          <Box
            p={2}
            sx={{
              backgroundColor: secondary,
              borderTopRightRadius: '5%',
              borderBottomRightRadius: '5%',
            }}
          ></Box>
        </Box>
      ))}
    </Box>
  );
};

export default Header;
