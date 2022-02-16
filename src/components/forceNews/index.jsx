import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import useForceNewsStyles from './forceNewsStyles';
import { allForceNews } from './sampleData';

export default function ForceNews() {
  const styles = useForceNewsStyles();

  return allForceNews.map(({title, content, tags, bannerUrl}) => (
    <Grid item xs={12} sm={5} className={styles.card} key={content}>
      <Box className={styles.contentCard}>
        <Box>
          <Typography variant='body1' component='div'>{title}</Typography>
          <Typography variant='subtitle2' component='div' style={{ opacity: '.6' }}>{content}</Typography>
        </Box>
        <Box>
          {tags.map(tag => (
            <Button
              key={tag}
              size='small'
              variant='outlined'
              className={styles.tagButton}
            >
              {tag}
            </Button>
          ))}
        </Box>
      </Box>
      <Box className={styles.bannerCard}>
        <img 
          src={bannerUrl}
          height='100%'
          alt='News Banner!'
        />
      </Box>
    </Grid>
  ))
};