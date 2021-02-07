import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import MenuTable from './MenuTable';
import InputWithLabel from '../../inputs/Input';
import useStyles from './MenuDetailsStyles';
import { Typography, Divider } from '@material-ui/core';
import Navbar from '../../navbar/Navbar';
function Group({ group }) {
  group = group || {
    name: 'Cocktails To-go',
  };

  const dishes = group.dishes || [
    { name: 'Green Papaya Salad', id: 1, price: 20, note: 'string' },
    {
      name: 'Slanted Door Wild Gulf Shrimp Gresh Spring Roll',
      id: 2,
      price: 10,
    },
    { name: 'Vegeterian Spring Roll', id: 3, price: 8, note: 'string' },
    {
      name: 'Crispy Pork & Shrimp imperial Roll',
      id: 4,
      price: 120,
      note: 'string',
    },
    { name: 'Crispy Veggie Imperial Roll', id: 5, price: 100, note: 'string' },
    { name: 'Green Bean Salad', id: 1, price: 10, note: 'string' },
  ];
  const dishTable = dishes.map((el) => ({
    name: el.name,
    id: el.id,
    type: 'dish',
    note: el.note,
    price: el.price,
  }));
  const classes = useStyles();
  const [name, setName] = useState(group?.name || 'group');
  return (
    <div>
      <Navbar title="groups" />
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
            <MenuTable menus={dishTable} dish={true} tableType="dishes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group;
