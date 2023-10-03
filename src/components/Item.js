import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      // Renderiza la información del item aquí
    </Link>
  );
}

export default Item;
