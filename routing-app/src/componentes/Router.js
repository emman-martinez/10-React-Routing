import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Productos from './Productos';
import Nosotros from './Nosotros';
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
                <Switch>
                    <Route exact path="/" render={() => (
                        <Productos
                                    productos={this.state.productos}
                        ></Productos>
                    )}></Route>
                    <Route exact path="/nosotros" component={Nosotros}></Route>
                    <Route exact path="/producto/:productoId" render={(props) => {
                        // console.log(props);
                        let idProducto = props.location.pathname.replace('/producto/', '');
                        // console.log(idProducto);
                        return(
                            <SingleProducto
                                            producto={this.state.productos[idProducto]}
                            ></SingleProducto>
                        )
                    }}></Route>
                    <Route component={Error}></Route>
                </Switch> 
            </BrowserRouter>
        )
    }
}

export default Router;