import { colors } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    palette: {},
  })
);

export default theme;
