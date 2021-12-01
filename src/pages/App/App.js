import React, { useState } from 'react';
import Bio from '../../components/Bio/Bio';
import Header from '../../components/Header/Header';
import { Container, Box, Typography, useTheme, colors } from '@mui/material';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { makeStyles } from '@mui/styles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
        })
      ),
    [primaryColor, secondaryColor]
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
      <Container maxWidth="lg">
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
