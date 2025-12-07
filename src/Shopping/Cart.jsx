import React from 'react';
import Navbar from './Navbar';

const Cart = ({ finalcartdata }) => {
  console.log(finalcartdata);
  return (
    <>
      <Navbar />
      {finalcartdata && finalcartdata.length > 0 ? (
        finalcartdata.map((item, index) => (
          <div className='Cart_shopping_card' key={index}>
            <img src={item.imgSrc} alt="" />
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="Cart_buttongroup">
                <button className="Cart_buttongroupprice">{item.price}</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        "loading...."
      )}
    </>
  );
};

export default Cart;