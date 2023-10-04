import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      Click para acceder a los detalle de la categoría
    </Link>
  );
}

export default Item;
