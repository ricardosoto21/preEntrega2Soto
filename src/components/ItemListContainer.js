import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    // Ejemplo de lista local de productos
    const mockItems = [
        { id: '1', name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'url-de-imagen', category: 'categoria1' },
        { id: '2', name: 'Producto 2', description: 'Descripción del producto 2', price: 150, image: 'url-de-imagen', category: 'categoria2' },
        // ... otros productos
    ];

    // Filtrar productos según la categoría
    const filteredItems = mockItems.filter(item => item.category === categoryId);
    setItems(filteredItems);
  }, [categoryId]);

  return (
    <div className="item-list">
        {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
}

export default ItemListContainer;

