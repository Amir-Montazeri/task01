import React from 'react';
// import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import NavTop from './NavTop';
import NavMiddle from './NavMiddle';
import NavBottom from './NavBottom';

const NavBar = () => {
  return (
    <Box>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </Box>
  )
}

export default NavBar;