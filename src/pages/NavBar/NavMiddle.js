import React from 'react';
import { Box } from '@material-ui/core';
import { ItemLink } from '../../components';
import { navbarData } from '../../data/sample';

const NavMiddle = () => {
  return (
    <Box>
      <Box>
        Logo
      </Box>
      <Box>
        {navbarData.navigationMenu.map(({ name, link }) => <ItemLink title={name} link={link} key={name} />)}
      </Box>
    </Box>
  )
};

export default NavMiddle;