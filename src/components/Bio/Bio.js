import React from 'react';
import { Box, Typography } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    fontSize: 8,
  },
});

const Dot = () => {
  const classes = useStyles();
  return (
    <Box>
      <FiberManualRecordIcon className={classes.icon} />
    </Box>
  );
};

const Text = ({ children }) => (
  <Typography variant="body1">{children}</Typography>
);

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
