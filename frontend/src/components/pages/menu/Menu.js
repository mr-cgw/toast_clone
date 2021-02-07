import React from 'react';
import useStyles from './MenuStyles';
import MenuTable from './MenuTable';
import Navbar from '../../navbar/Navbar';
import { Divider, Typography } from '@material-ui/core';

function Menu({ menuList }) {
  const classes = useStyles();
  return (
    <div>
      <Navbar title="menu" />
      <div className={classes.root}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="h3">Menus</Typography>
          <Typography
            variant="body"
            style={{ color: 'darkblue', cursor: 'pointer' }}
          >
            Advanced Properties
          </Typography>
        </div>
        <Divider />
        <br />
        <MenuTable menuList={menuList} tableType="menus"/>
      </div>
    </div>
  );
}

export default Menu;
