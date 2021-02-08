import React, { useState } from 'react';
import MenuTable from './MenuTable';
import InputWithLabel from '../../inputs/Input';
import useStyles from './MenuDetailsStyles';
import { Typography, Divider } from '@material-ui/core';
import Navbar from '../../navbar/Navbar';
function Dish({ dish, group }) {
  dish = dish || {
    name: 'Pork and Shrimp Spring Roll',
    price: 14,
    imgUrl: "https://res.cloudinary.com/willwang/image/upload/v1612653963/placeholder_rg5wvi.png",
    description: "Slanted Door Wild Gulf Shrimp fresh spring roll. filled with vermicelli noodles, red oak lettuce, mint & a touch of shallot mayo. Served with peanut dipping sauce.",
    modifiers: [
      {
        name: "no garlic",
        id: "601f433ba0e0dc2a9bbbb336",
        required: false,
        price: 0
      },
      {
        name: "no ginger",
        id: "601f4343a0e0dc2a9bbbb337",
        required: false,
        price: 0
      }
    ]
  };
  group = group || {
    menuId: 1,
    name: "starter",
    menuName: "To-go"
  }
  const modifiers = dish.modifiers || [
    {
      name: "no garlic",
      id: "601f433ba0e0dc2a9bbbb336",
      required: false,
      price: 0
    },
    {
      name: "no ginger",
      id: "601f4343a0e0dc2a9bbbb337",
      required: false,
      price: 0
    }
  ]
  const modifierTable = modifiers.map((el) => ({
    name: el.name,
    id: el.id,
    type: 'modifier',
    price: el.price,
    required: el.required
  }));
  const classes = useStyles();
  const [name, setName] = useState(dish.name || 'dish');
  return (
    <div>
      <Navbar title="groups" navType="Dish" data={{ dish: dish, group: group }} />
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
          <Typography variant="h5" style={{ marginTop: '2rem' }}>
            Modifiers
          </Typography>
          <Divider style={{ width: 500 }} />
          <div style={{ marginTop: '2rem', width: 500 }}>
            <MenuTable menus={modifierTable} tableType="modifiers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
