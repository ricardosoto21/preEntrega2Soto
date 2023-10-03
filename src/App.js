import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
        </div>
    );
}

export default App;
