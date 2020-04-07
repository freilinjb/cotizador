import React, {Fragment} from 'react';

const Resumen = ({datos}) => {

    //extraer de datos
    const {marca, anio, plan} = datos;
    if(marca === '' || anio === '' || plan === '') return null;

    //evita que esto se ejecute
    return ( 
        <Fragment>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del auto:</li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;