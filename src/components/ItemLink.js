import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const RowListRendering = ({ title, icon, link, middleIcon }) => {
  const renderSocialMediaButton = (title, icon, link) => (
    <a href={link}>
      <p variant='contained' size='small'>
        {title}
      </p>
    </a>
  );

  const renderLocalButton = (title, icon, link) => (
      <p>
        {title}
      </p>
  );

  return !link.includes('https') ?
    renderLocalButton(title, null, link) :
    renderSocialMediaButton(title, null, link)
};

export default RowListRendering;