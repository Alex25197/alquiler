/*Imports */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Barra.css';
import { Boton } from './Boton';




function Barra() {
    const [click, setClick] = useState(false); /*Estados del menu de la pag*/
    const [button, setButton] = useState(true);
    /*La siguiente funcion, cambia el valor de false a true o viceversa */
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
            
        }else{
            setButton(true);
        }
    };

/*Efecto para que el boton de registro no aparezca de la nada*/
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)
    return (
<>
<nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            Alfredo's Rent-A-Car<i className="fas fa-car"></i>
        </Link>
        {/*Se define el icono del menu aca y que hace cuando se hace click*/}
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/flota' className='nav-links' onClick={closeMobileMenu}>
                Flota
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                Contacto
            </Link>
            </li>
            <li>
            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                Registrarse
            </Link>
            </li>
        </ul>
        {button && <Link to='/login'><Boton buttonStyle='btn--outline'>Registrarse</Boton></Link>};
        
    </div>
</nav>
</>
    );
}

export default Barra
