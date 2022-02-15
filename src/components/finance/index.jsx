import React from 'react';
import { Grid } from '@material-ui/core';
import useFinanceStyles from './financeStyles';
import FinanceTopStories from './FinanceTopStories';
import FinanceMarketCard from './FinanceMarketCard';

export default function Finance() {
  const styles = useFinanceStyles();

  return (
    <>
      <Grid item className={styles.card}>
        <FinanceTopStories />
      </Grid>
      <Grid item className={styles.card}>
        <FinanceMarketCard />
      </Grid>
    </>
  );
};