import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import reportWebVitals from './reportWebVitals';
import theme from './utils/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {console.log(`theme`, theme)}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
