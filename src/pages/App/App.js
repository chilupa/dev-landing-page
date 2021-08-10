import Bio from '../../components/Bio/Bio';

const { Container, Box, makeStyles, Typography } = require('@material-ui/core');
const {
  default: SocialMedia,
} = require('../../components/SocialMedia/SocialMedia');

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
