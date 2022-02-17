import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import useNewsStyles from './newsStyles';
import allNews from './sampleData';

export default function News() {
  const styles = useNewsStyles();

  return allNews.map(({ title, content, category, tags, coverUrl, id }) => (
    <Grid item xs={12} key={id} className={styles.banner}>
      <Box className={styles.content}>
        <Box>
          <Typography variant='subtitle2' component='h1' style={{ marginBottom: 5 }}>{category}</Typography>
          <Typography variant='h4' component='h1'>{title}</Typography>
          <Typography variant='body1' component='p' style={{ textShadow: '0 0 20px #000' }}>{content}</Typography>
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
      <Box className={styles.cover}>
        <img 
          src={coverUrl}
          alt='Cover...'
          height='100%'
        />
      </Box>
    </Grid>
  ))
};