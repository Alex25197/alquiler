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
          {/*Autos camioneta*/}
            <CartaAuto
              src='/img/bmw.jpg'
              text='BMW X5'
              label='Camioneta'
              path='/cotiza'
            />
            <CartaAuto
              src='/img/dmax.jpg'
              text='Isuzu D-MAX'
              label='Camioneta'
              path='/cotiza'
            />
            <CartaAuto
              src='/img/hilux.jpg'
              text='Toyota Hilux'
              label='Camioneta'
              path='/cotiza'
            />
            </ul>
          <ul className='cartas__autos'>
            {/*Autos sedan*/}
            <CartaAuto
              src='/img/picanto.jpg'
              text='Hyundai H1'
              label='Sedan'
              path='/cotiza'
            />
            <CartaAuto
              src='/img/sentra.jpg'
              text='Nissan Sentra B13'
              label='Sedan'
              path='/cotiza'
            />
            <CartaAuto
              src='/img/elantra.jpg'
              text='Hyundai Elantra'
              label='Sedan'
              path='/cotiza'
            />
            </ul>
            {/*Autos minivan*/}
            <ul className='cartas__autos'>
            <CartaAuto
              src='/img/h1.jpg'
              text='Hyundai H1'
              label='Mini-van'
              path='/cotiza'
            />
            <CartaAuto
              src='/img/sportage.jpg'
              text='Kia Sportage'
              label='Mini-van'
              path='/cotiza'
            />
            <CartaAuto
              src='/img/qashqai.jpg'
              text='Nissan Qashqai'
              label='Mini-van'
              path='/cotiza'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;