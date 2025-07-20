import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(255,255,255,0.15)',
      paper: 'rgba(255,255,255,0.25)',
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
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255,255,255,0.4)',
        },
      },
    },
  },
});

export default theme;
