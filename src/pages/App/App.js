import React from 'react';
import Bio from '../../components/Bio/Bio';
import Header from '../../components/Header/Header';
import { Container, Box, Typography, useTheme } from '@mui/material';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { makeStyles } from '@mui/styles';

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

  return (
    <Container maxWidth="lg">
      <Header />
      <Box className={classes.container}>
        <Box className={classes.box}>
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
  );
};

export default App;
