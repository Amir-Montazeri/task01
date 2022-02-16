import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { ItemLink } from '../../components';
import { navbarData } from '../../data/sample';
import sliderSettings from './sliderSettings';

const NavBottom = () => {
  const icon = {
    increased: <ArrowDropUp />,
    decreased: <ArrowDropDown />
  };

  return (
    <Box width='94%' margin='auto'>
      <Slider {...sliderSettings}>
        {navbarData.currencies && navbarData.currencies.map(({ name, status, changedPersent, link }) => {
          const title = <>
            {name}
            {icon[status]}
            {status === 'increased' ? '+' : '-'}
            {changedPersent}
          </>
          return (
            <ItemLink title={title} link={link} key={name} />
          )
        })}
      </Slider>
    </Box>
  );
}

export default NavBottom;