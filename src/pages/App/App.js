import React, { useState } from 'react';
import Bio from '../../components/Bio/Bio';
import Header from '../../components/Header/Header';
import { Container, Box, Typography, colors } from '@mui/material';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { makeStyles } from '@mui/styles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

const useStyles = makeStyles({
  container: {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  const [primaryColor, setPrimaryColor] = useState(colors.blue[500]);
  const [secondaryColor, setSecondaryColor] = useState(colors.green[500]);

  const theme = React.useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            primary: { main: primaryColor },
            secondary: { main: secondaryColor },
          },
          typography: {
            fontFamily: [
              'Ubuntu',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
        }),
      ),
    [primaryColor, secondaryColor],
  );

  const handlePaletteChange = (primaryColor, secondaryColor) => {
    setPrimaryColor(primaryColor);
    setSecondaryColor(secondaryColor);
  };

  const headerProps = {
    handlePaletteChange,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ backgroundColor: colors.grey[50] }}>
        <Header {...headerProps} />
        <Box className={classes.container}>
          <Box>
            <Typography variant="h1" color="primary">
              Hi, I'm Pavan!
            </Typography>
            <Bio />
            <Box pt={2}>
              <SocialMedia />
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
