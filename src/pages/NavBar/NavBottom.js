import React from 'react';
import { Box } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { ItemLink } from '../../components';
import { navbarData } from '../../data/sample';

const NavBottom = () => {
  const icon = {
    increased: <ArrowDropDown />,
    decreased: <ArrowDropUp />
  };

  return (
    <Box>
      {navbarData.currencies.map(({ name, status, changedPersent, link }) => {
        const title = <>
          {name}
          {icon[status]}
          {status == 'increased' ? '+' : '-'}
          {changedPersent}
        </>
        return (
          <ItemLink title={title} link={link} key={name} />
        )
      })}
    </Box>
  );
}

export default NavBottom;