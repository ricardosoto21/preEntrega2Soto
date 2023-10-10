import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [count, setCount] = useState(0);

    // Ejemplo de lista local de productos
    const mockItems = [
      { id: '1', name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'url-de-imagen', category: 'categoria1' },
      { id: '2', name: 'Producto 2', description: 'Descripción del producto 2', price: 150, image: 'url-de-imagen', category: 'categoria2' },
      { id: '3', name: 'Producto 3', description: 'Descripción del producto 3', price: 150, image: 'url-de-imagen', category: 'categoria3' },
      { id: '4', name: 'Producto 4', description: 'Descripción del producto 4', price: 150, image: 'url-de-imagen', category: 'categoria4' },
      { id: '5', name: 'Producto 5', description: 'Descripción del producto 5', price: 150, image: 'url-de-imagen', category: 'categoria5' },
        
    ];

    const product = mockItems.find(item => item.id === id);

    return (
        <div className="item-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt={product.name} />

            <div className="quantity">
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                <span>{count}</span>
                <button onClick={() => count > 0 && setCount(prevCount => prevCount - 1)}>-</button>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
