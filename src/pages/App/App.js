const { Container, Box, makeStyles, Typography } = require('@material-ui/core');

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
      <Box className={classes.container}>
        <Box className={classes.box}>
          <Typography variant="h1">Hi, I'm John!</Typography>
          <Box pt={2}>Icons</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
