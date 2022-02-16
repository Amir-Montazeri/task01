import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useHomeStyles from './homeStyles';
import { Finance, ForceNews, News } from '../../components';

const Home = () => {
  const styles = useHomeStyles();

  return (
    <div>
      <Grid container justifyContent='center' wrap='wrap'>
        <Finance />
      </Grid>
      <Grid container justifyContent='center'>
        <Typography variant='h2' component='span' className={styles.title}>
          Breaking News
        </Typography>
      </Grid>
      <Grid container justifyContent='center'>
        <ForceNews />
      </Grid>
      <Grid container direction='column'>
        <News />
      </Grid>
    </div>
  );
}

export default Home;