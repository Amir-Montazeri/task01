import React from 'react';
import { Grid, Box } from '@material-ui/core';
import useHomeStyles from './HomeStyles';
import HomeLeftSection from './HomeLeftSection';
import HomeRightSection from './HomeRightSection';

const Home = () => {
  const styles = useHomeStyles();

  return (
    <Box>
      <Grid container justifyContent='center' wrap='wrap'>
        <Grid item className={styles.card}>
          <HomeLeftSection />
        </Grid>
        <Grid item className={styles.card}>
          <HomeRightSection />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home;