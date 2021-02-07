import React, { useState } from 'react';
import useStyles from './MenuDetailsStyles';
import { Typography, Divider } from '@material-ui/core';
import InputWithLabel from '../../inputs/Input';
import MenuTable from '../../pages/menu/MenuTable';

function MenuDetails({ menu }) {
  const classes = useStyles();
  menu = menu || {
    name: 'Slanted Door Take Out Food & Drink Menu',
    posname: 'Slanted Door Take Out Food & Drink Menu',
    buttonColor: 'black',
    number: 10023123949491,
    groups: {
      1: 'Cocktails To-go',
      2: 'Non-Alcoholic Beverage',
      3: 'Dim Sum',
      4: 'Starters',
      5: 'Bowls',
    },
  };
  const [name, setName] = useState(menu.name);
  const menuGroups = [];
  for (const key in menu.groups) {
    menuGroups.push({
      id: key,
      name: menu.groups[key],
      type: 'group',
    });
  }

  return (
    <div className={classes.root}>
      <Typography>Basic</Typography>
      <Divider style={{ marginBottom: '2rem' }} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'flex-start',
        }}
      >
        <InputWithLabel label={'Name'} value={name} setName={setName} />
        <InputWithLabel label={'POS Name'} value={name} setName={setName} />
      </div>
      <Typography variant="h5">Groups</Typography>
      <Divider />
      <MenuTable menus={menuGroups} />
    </div>
  );
}

export default MenuDetails;
