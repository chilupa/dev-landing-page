import React from 'react';
import { Box, colors } from '@mui/material';

const colorPalettes = [
  { primary: colors.blue[700], secondary: colors.orange[500] },
  { primary: colors.teal[800], secondary: colors.teal[400] },
  { primary: colors.orange[900], secondary: colors.purple[400] },
  { primary: colors.green[800], secondary: colors.orange[600] },
  { primary: colors.blue[800], secondary: colors.pink[500] },
];

const Header = ({ handlePaletteChange }) => {
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
