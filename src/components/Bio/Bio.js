import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Text from './Text';
import Dot from './Dot';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    fontSize: '8px',
  },
});

const Bio = () => {
  const classes = useStyles();
  return (
    <Box pt={2} className={classes.container}>
      <Text>Full Stack Developer</Text>
      <Dot />
      <Text>Photographer</Text>
    </Box>
  );
};

export default Bio;
