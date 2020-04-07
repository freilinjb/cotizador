import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import './App.css';

const Contenedor = styled.div`
  max-width:700px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      anio: '',
      plan: ''
    }
  });

  //extraer datos
  const { datos } = resumen;

  return ( 
    <Contenedor>
      <Header titulo = "Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario setResumen={setResumen}/>
        {/* { datos ? <Resumen/> : null } //Es una forma la otra es usando state*/ }
        <Resumen datos={datos}/>
      </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
