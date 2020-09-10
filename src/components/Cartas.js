import React from 'react';
import './Cartas.css';
import CartaAuto from './CartaAuto';

function Cards() {
  return (
    <div className='cards'>
      <h1>Échale un vistazo a nuestras excelentes ofertas</h1>
      <div className='cartas__contenedor'>
      
        <div className='cartas__wrapper'>
        <ul className='cartas__autos'>
            <CartaAuto
              src='/img/bmw.jpg'
              text='BMW X5'
              label='Camioneta'
              path='/flota'
            />
            <CartaAuto
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            </ul>
          <ul className='cartas__autos'>
            <CartaAuto
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CartaAuto
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CartaAuto
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;