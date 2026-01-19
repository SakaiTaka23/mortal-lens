import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(255,255,255,0.15)',
    },
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#AB47BC',
    },
    error: {
      main: '#dc3545',
    },
    warning: {
      main: '#fbbf24',
    },
    info: {
      main: '#34d399',
    },
  },
});

export default theme;
