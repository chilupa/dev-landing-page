import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CloseIcon from '@mui/icons-material/Close';
import Toast from '../Toast/Toast';
import ColorPalettes from '../ColorPalettes/ColorPalettes';
import PropTypes from 'prop-types';

const Header = ({ handlePaletteChange }) => {
  const [toggle, setToggle] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  return (
    <Box pt={1} data-testid="header">
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        {toggle && (
          <ColorPalettes
            handlePaletteChange={handlePaletteChange}
            setOpenToast={setOpenToast}
          />
        )}
        <Box>
          <IconButton
            data-testid="toggle-button"
            aria-label="color palette"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <PaletteIcon color="warning" data-testid="palette-icon" />
            ) : (
              <CloseIcon color="error" data-testid="close-icon" />
            )}
          </IconButton>
        </Box>
      </Box>
      <Toast open={openToast} setOpen={setOpenToast} message="Theme changed!" />
    </Box>
  );
};

Header.propTypes = {
  handlePaletteChange: PropTypes.func,
};

export default Header;
