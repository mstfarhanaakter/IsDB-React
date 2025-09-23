import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleToCart}) => {
    const {img, name, price, seller, stock} = bottle
    return (
        <>
        <div className='cardBottle card-container space-y-2'>
            <img src={img} alt="" className='mx-auto' />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Stock: {stock} Remaining</p>
            <button className= 'bg-yellow-400' onClick={()=> handleToCart(bottle)}>Buy Now</button>
        </div>
        </>
    );
};

export default Bottle;