import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import themes from './theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
