import React from 'react';

const Producto = (props) => {
    const { descripcion, id, imagen, nombre, precio } = props.informacion; 
    return(
        <li>
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span> ${precio}</span></p>
            <a href="#">Más Información</a>
        </li>
    );
}

export default Producto;