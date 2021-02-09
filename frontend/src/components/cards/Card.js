import React from 'react';
import useStyles from './CardStyles.js';
function Card({ component: Component, extraStyle }) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ ...extraStyle }}>
      <Component />
    </div>
  );
}

export default Card;
