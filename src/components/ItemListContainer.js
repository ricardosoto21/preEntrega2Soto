import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { Link } from 'react-router-dom';


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    // Ejemplo de lista local de productos
    const mockItems = [
        { id: '1', name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'url-de-imagen', category: 'categoria1' },
        { id: '2', name: 'Producto 2', description: 'Descripción del producto 2', price: 150, image: 'url-de-imagen', category: 'categoria2' },
        { id: '3', name: 'Producto 3', description: 'Descripción del producto 3', price: 150, image: 'url-de-imagen', category: 'categoria3' },
        { id: '4', name: 'Producto 4', description: 'Descripción del producto 4', price: 150, image: 'url-de-imagen', category: 'categoria4' },
        { id: '5', name: 'Producto 5', description: 'Descripción del producto 5', price: 150, image: 'url-de-imagen', category: 'categoria5' },
    ];
    setItems(mockItems);
  }, []);

  return (
    <div className="item-list">
        {items.map(item => (
            <Link key={item.id} to={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Item item={item} />
            </Link>
        ))}
    </div>
);
}

export default ItemListContainer;