import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './MenuCardStyles';
import { useHistory } from 'react-router-dom';

function MenuCard({ list }) {
  list = list || [
    'Edit Menus',
    'Open Items',
    'Item Tags',
    'Price Levels',
    'Pre Modifiers',
    'Advanced Properties',
    'Price Editor',
    'Items Database',
  ];
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Menu</Typography>
      <div className={classes.functionList}>
        {list.map((item, index) => (
          <div className={classes.functionItem} key={index}>
            <Typography onClick={() => history.push('/menu')}>
              {item}
            </Typography>
            <Divider light={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
