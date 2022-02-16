import React from 'react';
import { Grid } from '@material-ui/core';
import useNewsStyles from './newsStyles';
import { allNews } from './sampleData';

export default function News() {
  const styles = useNewsStyles();

  return allNews.map(({ title, content, category, tags, coverUrl, id }) => (
    <Grid item xs={12} key={id} className={styles.banner}>

    </Grid>
  ))
};