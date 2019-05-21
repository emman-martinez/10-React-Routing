import React, { Component } from 'react';
import Header from './Header';
import Router from './Router';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {
  render() {
    return(
      <div className="App contenedor">
        { /* Componente: Router */ }
        <Router></Router>
        { /* Componente: Header */ }
        <Header></Header>
        { /* Componente: Imagen */ }        
        <Imagen></Imagen>
      </div>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
