import { createTheme, Theme } from '@mui/material/styles';

export const theme = (): Theme => {
  return createTheme({
    palette: {
      primary: {
        main: '#3b82f6',
        contrastText: '#ffffff',
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
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: '#3b82f6',
            contrastText: '#ffffff',
          },
          info: {
            main: '#34d399',
          },
          background: {
            default: '#0d1828',
            paper: '#3a4f6f',
          },
        },
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            ...theme.applyStyles('dark', {
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }),
          }),
        },
      },
    },
  });
};
