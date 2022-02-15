import React from 'react';
import { Grid, Box, Button, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { scopes, finances } from './sampleData';

export default function FinanceMarketCard() {
  const [currentScope, setCurrentScope] = React.useState('money');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1, padding: '10px 5px', width: 610, overflow: 'hidden', maxWidth: '95vw', color: '#fff' }}>
      <Grid container columns={{ xs: 20, sm: 12 }}>
        <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='subtitle1'>Market</Typography>
        </Grid>
        {finances.map(({ title, scope }, index) => (
          <Grid item key={index} onClick={() => setCurrentScope(scope)}>
            <Button
              style={{ color: "#fff" }}
              size={isSmallScreen ? 'small' : 'medium'}
              variant={scope === currentScope ? 'contained' : 'text'}
              color="primary"
            >
              {title}
            </Button>
          </Grid>
        ))}
      </Grid>
            
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {scopes[currentScope].map(({ quoteTitle }, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <h3>{quoteTitle}</h3>
          </Grid>
        ))}
      </Grid>
      {/* <Chart /> */}
    </Box>
  );
};