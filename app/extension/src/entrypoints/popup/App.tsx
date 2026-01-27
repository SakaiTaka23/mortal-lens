import { Box, Typography, Button, Paper } from '@mui/material';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: '300px',
      }}
    >
      <Paper sx={{ p: 2 }}>
        <Typography variant='h5' component='h1' gutterBottom>
          Mortal Lens
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Mahjong AI Review Tool
        </Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant='h6' gutterBottom>
          Hello World Demo
        </Typography>
        <Typography variant='body1' gutterBottom>
          Extension is working! Count: {count}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setCount(count + 1)}
          fullWidth
        >
          Increment
        </Button>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant='body2' color='text.secondary'>
          This is a Hello World extension using Material-UI components from the
          mortal-lens monorepo.
        </Typography>
      </Paper>
    </Box>
  );
};
