import React from 'react';
import '../App.css';
import { Boton } from './Boton';
import './SeccionPrimera.css';

function SeccionPrimera() {
    return (
        <div className='contenedor'>
            {/*Imagen aqui*/}
            <h1>Necesitas una solución rápida para tus viajes?</h1>
            <p>Encuentra el auto que buscas dentro de nuestra flota!</p>
            <div className='btns-contenedor'>
                <Boton
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                        Cotiza ya!
                </Boton>
            </div>
        </div>
    )
}

export default SeccionPrimera
