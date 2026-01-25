import { theme } from '@mortal-lens/ui';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
