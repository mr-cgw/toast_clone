import React, { useState } from 'react';
import useStyles from './MenuDetailsStyles';
import { Typography, Divider } from '@material-ui/core';
import InputWithLabel from '../../inputs/Input';
import MenuTable from '../../pages/menu/MenuTable';
import Navbar from '../../navbar/Navbar';
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
    <div>
      <Navbar title="menu details" navType="menuDetail" data={menu} />
      <div style={{ display: 'flex' }}>
        <div className={classes.root} style={{ margin: '2rem auto' }}>
          <div style={{ marginTop: '2rem' }}></div>
          <Typography variant="h5">Basic</Typography>
          <Divider style={{ marginBottom: '2rem', width: 500 }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <InputWithLabel label={'Name'} value={name} setName={setName} />
            <InputWithLabel label={'POS Name'} value={name} setName={setName} />
          </div>
          <Typography variant="h5" style={{ margin: '2rem 0' }}>
            Groups
          </Typography>
          <Divider style={{ width: 500 }} />
          <div style={{ marginTop: '2rem', width: 500 }}>
            <MenuTable menus={menuGroups} tableType="groups" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetails;
