import React from 'react';
import { Link } from 'react-router-dom';




function CartaAuto(props) {

  return (
    <>

      <li className='cartas__auto'>
        <Link 
        to={props.path}
        className='cartas__auto__link' >
          <figure className='cartas__auto__img-wrap' data-category={props.label}>
            <img
              className='cartas__auto__img'
              alt='Imagen'
              src={props.src}
            />
          </figure>
          <div className='cartas__auto__info'>
            <h5 className='cartas__auto__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
      
    </>
  );
}


export default CartaAuto;