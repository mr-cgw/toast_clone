import React from 'react';
import useStyles from './CardStyles.js';
function Card({ component: Component }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Component />
    </div>
  );
}

export default Card;
