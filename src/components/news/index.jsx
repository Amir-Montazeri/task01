import React from 'react';
import { Grid } from '@material-ui/core';
import { allNews } from './sampleData';

export default function News() {
  return allNews.map(({title, content, tags, bannerUrl}) => (
    <Grid item xs={12} sm={6} style={{ background: 'red' }} key={content}>
      {title}
    </Grid>
  ))
};