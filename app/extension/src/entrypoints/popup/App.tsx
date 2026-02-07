import { Box, Typography, Paper, Chip, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isActiveOnMjai, setIsActiveOnMjai] = useState(false);
  const [currentTabId, setCurrentTabId] = useState<number | undefined>();

  useEffect(() => {
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => {
        const currentTab = tabs[0];
        if (currentTab) {
          setCurrentTabId(currentTab.id);
          const isOnMjai = currentTab.url?.includes('mjai.ekyu.moe') ?? false;
          setIsActiveOnMjai(isOnMjai);
        }
      })
      .catch((error) => {
        console.error('Error querying tabs:', error);
      });
  }, []);

  const handleAnalyzeClick = () => {
    if (currentTabId) {
      browser.tabs
        .sendMessage(currentTabId, { type: 'analyze' })
        .catch((error) => {
          console.error('Error sending analyze message:', error);
        });
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minWidth: '300px',
      }}
    >
      <Paper sx={{ p: 2 }}>
        <Typography variant='h6' component='h1' gutterBottom>
          Mortal Lens
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Mahjong AI Review Tool
        </Typography>
      </Paper>

      <Paper sx={{ p: 2 }}>
        <Typography variant='body2' gutterBottom>
          Status:
        </Typography>
        {isActiveOnMjai ? (
          <Chip
            label='✅ Active on this page'
            color='success'
            size='small'
            sx={{ mt: 1 }}
          />
        ) : (
          <Chip
            label='⚠️ Visit mjai.ekyu.moe'
            color='default'
            size='small'
            sx={{ mt: 1 }}
          />
        )}
      </Paper>

      {isActiveOnMjai && (
        <Paper sx={{ p: 2 }}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleAnalyzeClick}
            fullWidth
          >
            Analyze Current Page
          </Button>
        </Paper>
      )}
    </Box>
  );
};
