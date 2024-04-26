import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import {
  HomePageStarredEntities,
  HomePageCompanyLogo,
  TemplateBackstageLogoIcon,
  HomePageToolkit,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { TemplateBackstageLogo } from '@backstage/plugin-home';
import { InfoCard } from '@backstage/core-components';

const SearchBarInput = styled.div`
  max-width: 60vw;
  margin: auto;
  background-color: ${props => props.theme.palette.background.paper};
  border-radius: 50px;
  box-shadow: ${props => props.theme.shadows[1]};
`;

const SearchBarOutline = styled.div`
  border-style: none;
`;

const LogoContainer = styled.div`
  margin: ${props => props.theme.spacing(5, 0)};
`;

const LogoSvg = styled.svg`
  width: auto;
  height: 100px;
`;

const LogoPath = styled.path`
  fill: #7df3e1;
`;

export const HomePage = () => {
  return (
    <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo
        className={LogoContainer}
        logo={
          <TemplateBackstageLogo classes={{ svg: LogoSvg, path: LogoPath }} />
        }
      />
      <Grid container item xs={12} justifyContent="center">
        <HomePageSearchBar
          InputProps={{
            classes: {
              root: SearchBarInput,
              notchedOutline: SearchBarOutline,
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
