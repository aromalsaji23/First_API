import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Car 1', price: 20000 },
  { id: 2, name: 'Car 2', price: 30000 },
  { id: 3, name: 'Car 3', price: 40000 },
];

const CarList = () => {
  return (
    <List>
      {cars.map((car) => (
        <ListItem button key={car.id} component={Link} to={`/cars/${car.id}`}>
          <ListItemText primary={car.name} secondary={`$${car.price}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default CarList;
