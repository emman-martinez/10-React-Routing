import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import SingleProducto from './SingleProducto';
import Error from './Error';
import infoProductos from './../datos/datos.json';

class Router extends Component {

    state = {
        productos: [],   
    }

    componentWillMount() {
        this.setState({
            productos: infoProductos,
        })
    }

    render() {
        return(
            <BrowserRouter>
                { /* Componente: Header */ }
                <Header></Header>
                { /* Componente: Navegacion */ }
                <Navegacion></Navegacion>
                <Switch>
                    <Route exact path="/" render={() => (
                         /* Componente: Productos */
                        <Productos
                                    productos={this.state.productos}
                        ></Productos>
                    )}></Route>
                    {/* Componente: Nosotros */}
                    <Route exact path="/nosotros" component={Nosotros}></Route>
                    <Route exact path="/productos" render={() => (
                        <Productos
                                    productos={this.state.productos}
                        ></Productos>
                    )}></Route>
                    <Route exact path="/producto/:productoId" render={(props) => {
                        // console.log(props);
                        let idProducto = props.location.pathname.replace('/producto/', '');
                        // console.log(idProducto);
                        return(
                            /* Componente: SingleProducto */
                            <SingleProducto
                                            producto={this.state.productos[idProducto]}
                            ></SingleProducto>
                        )
                    }}></Route>
                    { /* Componente: Contacto */}
                    <Route exact path="/contacto" component={Contacto}></Route>
                    { /* Componente: Error */}
                    <Route component={Error}></Route>
                </Switch> 
            </BrowserRouter>
        )
    }
}

export default Router;