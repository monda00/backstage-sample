import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomePageRandomJoke } from '@backstage/plugin-home';

export const homePage = (
  <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <HomePageRandomJoke />
    </Grid>
  </Grid>
);
