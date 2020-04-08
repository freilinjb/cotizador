import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Resumen = ({datos}) => {

    //extraer de datos
    const {marca, anio, plan} = datos;
    if(marca === '' || anio === '' || plan === '') return null;

    const ResumenCotizacion = styled.div`
        text-align: center;
        color: white;
        padding: 10px;
        margin: 5px;
        background-color: #00838F;
        list-style: none;
    `;

    const Ul = styled.ul`
        list-style:none
    `;



    //evita que esto se ejecute
    return ( 
        <ResumenCotizacion>
            <h2>Resumen de cotizacion</h2>
            <Ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año del auto: {anio}</li>
            </Ul>
        </ResumenCotizacion>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

 
export default Resumen;