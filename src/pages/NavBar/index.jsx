import React from 'react';
import { Box } from '@material-ui/core';
import { NavTop, NavBottom, NavMiddle } from '../../components'

const NavBar = () => {
  return (
    <Box bgcolor={'rgba(1, 1, 1, .3)'}>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </Box>
  )
}

export default NavBar;