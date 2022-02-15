import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Finance, News } from '../../components';

const Home = () => {
  return (
    <div>
      <Grid container justifyContent='center' wrap='wrap'>
        <Finance />
      </Grid>
      <Container maxWidth={'lg'}>
        <Grid container spacing={3}>
          <News />
        </Grid>
      </Container>
    </div>
  )
}

export default Home;