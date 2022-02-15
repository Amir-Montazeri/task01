import React from 'react';
import { Grid } from '@material-ui/core';
import { Finance } from '../../components';

const Home = () => {
  return (
    <div>
      <Grid container justifyContent='center' wrap='wrap'>
        <Finance />
      </Grid>
    </div>
  )
}

export default Home;