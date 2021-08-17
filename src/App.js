import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//components
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';


function App() {
  return (
     <>
    <NavBar/>
    <ItemListContainer saludos='Bienvenidos a Storm' mensaje='Aqui inicia la aventura'/>
    
  </>
  
  );
}

export default App;
