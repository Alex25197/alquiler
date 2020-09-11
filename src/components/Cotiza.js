import React from 'react'
import './Cotiza.css'

function Cotiza() {
    return (
        <div className="wrapper">
            <h1>Introduzca sus datos para la reserva del vehiculo</h1>
            <div className="wrapperformulario">
                <form noValidate>
                <div className="nombre">
                    <label htmlFor="primer nombre">
                        Nombre
                    </label>
                    <input
                    type="text"
                    className=""
                    placeholder="Nombre"
                    noValidate>
                    </input>
                </div>
                <div className="apellido">
                    <label htmlFor="apellido">
                        Apellido
                    </label>
                    <input
                    type="text"
                    className=""
                    placeholder="Apellido"
                    noValidate>
                    </input>
                </div>
                <div className="email">
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input
                    type="text"
                    className=""
                    placeholder="E-mail"
                    noValidate>
                    </input>
                </div>
                <div className="telefono">
                    <label htmlFor="telefono">
                        Telefono
                    </label>
                    <input
                    type="text"
                    className=""
                    placeholder="Telefono"
                    noValidate>
                    </input>
                </div>
                
                </form>
                <button className="cotizar">Reserva ya!</button>
            </div>
                


        </div>
    )
}

export default Cotiza

