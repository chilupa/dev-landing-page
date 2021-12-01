import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import CloseIcon from '@mui/icons-material/Close';
import Toast from '../Toast/Toast';
import ColorPalettes from '../ColorPalettes/ColorPalettes';

const Header = ({ handlePaletteChange }) => {
  const [toggle, setToggle] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  return (
    <Box pt={1}>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        {toggle && (
          <ColorPalettes
            handlePaletteChange={handlePaletteChange}
            setOpenToast={setOpenToast}
          />
        )}
        <Box>
          <IconButton
            aria-label="color palette"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <PaletteIcon color="warning" />
            ) : (
              <CloseIcon color="error" />
            )}
          </IconButton>
        </Box>
      </Box>
      <Toast open={openToast} setOpen={setOpenToast} message="Theme changed!" />
    </Box>
  );
};

export default Header;