import { LandingPage } from '@mortal-lens/core';
import { Input } from '@mortal-lens/types';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export const App = () => {
  const [data, setData] = useState<Input | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    browser.storage.session
      .get('input')
      .then((res) => {
        if (res.input) {
          setData(res.input as Input);
        } else {
          setError('No game data found.');
        }
      })
      .catch((err: unknown) => {
        console.error('Failed to load game data:', err);
        setError('Failed to load game data.');
      });
  }, []);

  if (error) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color='error'>{error}</Typography>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <LandingPage input={data} />;
};
