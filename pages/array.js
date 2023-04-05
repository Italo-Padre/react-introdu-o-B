import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import Cabecalho from '../components/Cabecalho'
import Pagina from '../components/Pagina';
import { useState } from 'react';

const Array = () => {

  const carros = ['civic', 'tucson', 'celta', 'tempra', 'marea', 'doblo']
  //const pessoa = {nome: 'Orion', }

  return (
    <>
        <Pagina titulo='Arrays'>
        <Container>
        <h1>Lista Ordenada</h1>
        <ol>
          {carros.map(item => (
            <li>{item}</li>
            
          ))}
          </ol>
          </Container>  
        </Pagina>     
    </>
    
  )
}

export default Array