import React from 'react'
import { Boton } from './Boton'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Quieres subscribirte a nuestro newsletter?
                    </p>
                    <p className='footer-subscription-text'>
                        Es fácil, solo tienes que introducir tu correo y darle a suscribir
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input type='email' 
                            name='email' 
                            placeholder='Tu Correo' 
                            className='footer-input' />
                            <Boton buttonStyle='btn--outline'>Subscribete</Boton>
                        </form>
                    </div>
                </section>

                <div className="footer-links">
                    <div className="footer-links-wrapper">
                        <div className="footer-link-items">
                            <h2>Sobre nosotros</h2>
                            <Link to='/'>Contactanos</Link>
                            <Link to='/'>Quienes somos?</Link>
                            <Link to='/'>Jerarquia</Link>
                            <Link to='/'>Redes sociales</Link>
                        </div>
                    </div>
                    <div className="footer-link-items">
                            <h2>Soporte</h2>
                            <Link to='/'>Preguntas frecuentes</Link>
                            <Link to='/'>Asesoría</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
