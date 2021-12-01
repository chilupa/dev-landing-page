import React from 'react';
import PropTypes from 'prop-types';
import { Slide, Box, colors } from '@mui/material';

const colorPalettes = [
  { primary: colors.blue[700], secondary: colors.orange[500] },
  { primary: colors.teal[800], secondary: colors.teal[400] },
  { primary: colors.orange[900], secondary: colors.purple[400] },
  { primary: colors.green[800], secondary: colors.orange[600] },
  { primary: colors.blue[800], secondary: colors.pink[500] },
];

const ColorPalettes = ({ setOpenToast, handlePaletteChange }) => {
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Box display="flex" flexDirection="row" gap={2} pr={2}>
        {colorPalettes.map(({ primary, secondary }, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            sx={{
              cursor: 'pointer',
              borderRadius: '50%',
              borderWidth: '20px',
              borderStyle: 'solid',
              borderTopColor: primary,
              borderLeftColor: primary,
              borderRightColor: secondary,
              borderBottomColor: secondary,
            }}
            onClick={() => {
              handlePaletteChange(primary, secondary);
              setOpenToast(true);
            }}
          ></Box>
        ))}
      </Box>
    </Slide>
  );
};

ColorPalettes.propTypes = {
  handlePaletteChange: PropTypes.func,
  setOpenToast: PropTypes.func,
};

export default ColorPalettes;
