import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Text = ({ children }) => {
  return <Typography variant="body1">{children}</Typography>;
};

Text.propTypes = {
  children: PropTypes.string,
};

export default Text;
