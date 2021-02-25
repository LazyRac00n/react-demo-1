import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out NEW Arrivals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/P2.jpg'
              text='MGEX RX-0 Unicorn Gundam "Ver.Ka"'
              label='NEW'
              path='/services'
            />
            <CardItem
              src='images/P3.jpg'
              text='MG XXXG-00W0 Wing Gundam Zero EW "Ver.Ka"'
              label='OUT OF STOCK'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/P4.jpg'
              text='PG Unleashed RX-78-2 Gundam'
              label='NEW'
              path='/services'
            />
            <CardItem
              src='images/P1.jpg'
              text='HGUC XI Gundam VS Penelope Funnel Missile Effect Set 1/144'
              label='Pre-Order'
              path='/products'
            />
            <CardItem
              src='images/P5.jpg'
              text='RG MSN-02 Zeong'
              label='NEW'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
