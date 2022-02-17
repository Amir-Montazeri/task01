import React from 'react';
import { Grid, Box, Button, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Chart from './Chart';
import { scopes, finances } from './sampleData';

export default function FinanceMarketCard() {
  const [currentScope, setCurrentScope] = React.useState('money');
  const [currentQuote, setCurrentQuote] = React.useState();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    setCurrentQuote(scopes[currentScope][0].quoteTitle)
  }, [currentScope]);

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
            
      <Grid container justifyContent='space-between' style={{ margin: '5px 0' }}>
        {scopes[currentScope].map(({ quoteTitle, quoteValue, quoteChange }) => (
          <Grid item key={quoteTitle} onClick={() => setCurrentQuote(quoteTitle)}>
            <Button
              style={{ display: 'block' }}
              variant={quoteTitle === currentQuote ? 'contained' : 'text'}
            >
              <Typography variant='body1' component='div'>{quoteTitle}</Typography>
              <Typography variant='h6' component='div'>{quoteValue}</Typography>
              <Typography variant='body2' component='div'>{quoteChange}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
      <div>
        <Chart currency={currentQuote} />
      </div>
    </Box>
  );
};