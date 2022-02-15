import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core'
import useHomeStyles from './HomeStyles';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { navbarData } from '../../data/sample';

function HomeLeftSection() {
  const [currency, setCurrency] = useState(null);
  const styles = useHomeStyles();

  useEffect(() => {
    const { currencies } = navbarData;
    const selectedCurrency = currencies.filter(item => item.name == 'RI')
    setCurrency(selectedCurrency[0]);
  }, []);

  const icon = {
    increased: <ArrowDropDown />,
    decreased: <ArrowDropUp />
  };

  return (
    <Box sx={{ position: 'relative', width: 610, overflow: 'hidden', maxWidth: '95vw' }}>
      <Box className={styles.sizes}>
        <Grid container direction="column" justifyContent="space-evenly" p={10} className={styles.banner}>
          <Typography variant='p' component='div'>IRAN TODAY</Typography>
          <Typography variant='h5' component='h1'>A Peek Into The Markets: US Stock Futures Lower Amid Ukraine Tensions</Typography>
          <Typography variant='p' component='div' style={{ display: 'flex', alignItems: 'center' }}>
            {currency?.name}
            {icon[currency?.status]}
            {currency?.status == 'increased' ? '+' : '-'}
            {currency?.changedPersent}
          </Typography>
        </Grid>
        <img
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 468,
          }}
          src='./assests/images/banner-02.jpg'
          className={styles.sizes}
        />
      </Box>
      <Grid container style={{
        minHeight: 100,
        maxWidth: '95vw'
      }}>
        <Grid container direction="column" justifyContent='space-evenly' className={styles.bottomFields}>
          <Typography variant='caption' style={{ opacity: .8 }}>MarketWatch 2 hr</Typography>
          <Typography variant='subtitle2' style={{ margin: '3px 0' }}>Lorem test there is my name and you are not there guy ho. mine club nice or some</Typography>
          <Typography variant='overline'>INX -0.24%</Typography>
        </Grid>
        <Grid container direction="column" justifyContent='space-evenly' className={styles.bottomFields}>
          <Typography variant='caption' style={{ opacity: .8 }}>MarketWatch 2 hr</Typography>
          <Typography variant='subtitle2' style={{ margin: '3px 0' }}>Lorem test there is my name and you are not there guy ho. mine club nice or some</Typography>
          <Typography variant='overline'>DJI -0.4%</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeLeftSection