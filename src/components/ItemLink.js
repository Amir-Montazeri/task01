import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const RowListRendering = ({ title, icon, link }) => {
  const renderSocialMediaButton = (title, icon, link) => (
    <a href={link}>
      <Button variant='contained' size='small' startIcon={icon || null}>
        {title}
      </Button>
    </a>
  );

  const renderLocalButton = (title, icon, link) => (
    <Link to={link}>
      <Button>
        {title}
      </Button>
    </Link>
  );

  return !link.includes('https') ?
    renderLocalButton(title, null, link) :
    renderSocialMediaButton(title, icon, link)
};

export default RowListRendering;