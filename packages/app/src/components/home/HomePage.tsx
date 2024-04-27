import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
// import styled from 'styled-components';
import {
  HomePageStarredEntities,
  HomePageCompanyLogo,
  TemplateBackstageLogoIcon,
  HomePageToolkit,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { TemplateBackstageLogo } from '@backstage/plugin-home';
import { InfoCard } from '@backstage/core-components';

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
  svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const { svg, path, container } = useLogoStyles();
  return (
    <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo
        className={container}
        logo={<TemplateBackstageLogo classes={{ svg, path }} />}
      />
      <Grid container item xs={12} justifyContent="center">
        <HomePageSearchBar
          InputProps={{
            classes: {
              root: classes.searchBarInput,
              notchedOutline: classes.searchBarOutline,
            },
          }}
          placeholder="Search"
        />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} md={6}>
          <HomePageStarredEntities />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomePageToolkit
            tools={Array(8).fill({
              url: '#',
              label: 'link',
              icon: <TemplateBackstageLogoIcon />,
            })}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoCard title="Composable Section">
            {/* placeholder for content */}
            <div style={{ height: 370 }} />
          </InfoCard>
        </Grid>
      </Grid>
    </Grid>
  );
};
