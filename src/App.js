import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
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

  const [resumen, setResumen] = useState({});

  return ( 
    <Contenedor>
      <Header titulo = "Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario setResumen={setResumen}/>
      </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
