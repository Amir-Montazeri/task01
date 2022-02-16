import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Instagram, LinkedIn } from '@material-ui/icons';
import { ItemLink } from '../../components';
import { navbarData } from '../../data/sample';

const NavTop = () => {
  const icon = {
    instagram: <Instagram color='secondary' />,
    linkedin: <LinkedIn color='primary' />
  }

  return (
    <Grid container justifyContent='space-between' style={{ padding: '3px 10px' }}>
      <Box sx={{
        width: '10%',
        minWidth: 120,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {navbarData.socialMedias.map(({ name, link }) => <ItemLink
          title={name}
          link={link}
          icon={icon[name]}
          key={name}
        />
        )}
      </Box>
      <Box sx={{
        width: '30%',
        minWidth: 200,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
      }}>
        {navbarData.navItems.map(({ name, link }) => <ItemLink title={name} link={link} key={name} />)}
      </Box>
    </Grid>
  );
};

export default NavTop;