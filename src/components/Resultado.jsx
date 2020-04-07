import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: #00838F;
    color:white;
    margin-top: 2rem;
    text-align: center;
    padding: 10px;

`;

const ResultadoCotizacion = styled.div`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    return ( 
    (cotizacion === 0) 
    ? <Mensaje>Elige marca, año y tipo de seguro </Mensaje> 
    : 
        ( 
            <ResultadoCotizacion>
                <TextoCotizacion>El total es: ${cotizacion}</TextoCotizacion>
            </ResultadoCotizacion>
        )
    );
}
 
export default Resultado;