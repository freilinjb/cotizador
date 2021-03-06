import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper';



const Error = styled.div`
    background-color:red;
    color:white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom:2rem;
`;

const Formulario = ({setResumen, guardarCargando}) => {

    const [ datos, setDatos ] = useState({
        marca:'',
        anio:'',
        plan:'basico'
    });

    const [ error, setError] = useState(false)

    const { marca, anio, plan } = datos;

    //Leer los datos del formulario y colocarlo en el state
    const obtenerInformacion = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el suario presione submit
    const cotizarSeguro = e =>{
        e.preventDefault();

        if(marca.trim() === '' || anio.trim() === '' ||plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //una base de 2000
        let resultado = 2000;

        //obtener la diferencia de anios
        const diferencia = obtenerDiferenciaYear(anio);
        

        //por cada anio que resta el 3%
        resultado -= (( diferencia * 3) * resultado) / 100;
        

        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        resultado = calcularMarca(marca) * resultado;

        //Basico aumenta 20%
        //Completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(resultado * incrementoPlan).toFixed(2);

        //MUESTRA EL SPINNER
        guardarCargando(true);

        setTimeout(() => {
        //ELIMINA EL SPINNER
        guardarCargando(false);

        //PASA LA INFORMACION AL  COMPONENTE
            setResumen({
                cotizacion: Number(resultado),
                datos
            }); 
        }, 3000);



    }

    return ( 
        <form onSubmit={cotizarSeguro}>

            { error ? <Error>Todos los campos son obligatorios</Error> : null}

            <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <select className="form-control" name="marca" value={marca} onChange={obtenerInformacion}>
                    <option disabled defaultValue value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="anio">Año</label>
                <select className="form-control" name="anio" value={anio} onChange={obtenerInformacion}>
                    <option disabled defaultValue value="">-- Seleccione --</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>
            </div>
               
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="plan" id="basico" value="basico" checked={plan === "basico"} onChange={obtenerInformacion}/>
                <label className="form-check-label" htmlFor="basico">Básico</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="plan" id="completo" value="completo" checked={plan === "completo"} onChange={obtenerInformacion}/>
                <label className="form-check-label" htmlFor="completo">Completo</label>
            </div>
            <button type="submit" className="btn btn-block btn-primary">Cotizar</button>
        </form>
     );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;