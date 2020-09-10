import React from 'react';
import './Boton.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primario', 'btn--outline'];

const SIZES = ['btn--medio', 'btn--largo'];

export const Boton = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/registro' className='btn-mobile'>
        <button
        /*Valida que estilo de boton y que tamaño es*/
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
        </button>
        </Link>
    );
};