import React from 'react';
import useStyles from './MenuStyles';
import MenuTable from './MenuTable';

function Menu({ menuList }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuTable menuList={menuList} />
    </div>
  );
}

export default Menu;
