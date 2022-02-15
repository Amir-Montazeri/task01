import defaultTheme from './default';
import { createTheme } from '@mui/material/styles';

const overrides = {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    }
  }
};

const themes = {
  default: createTheme({ ...overrides, ...defaultTheme })
};

export default themes;