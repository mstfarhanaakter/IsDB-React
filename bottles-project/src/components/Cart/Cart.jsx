import React from 'react';
import'./Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div className='cart-Container space-y-5 cart'>
            {
                cart.map(bottle => <div>
                    <img src={bottle.img} alt="" />
                    <button onClick={() => handleRemoveCart(bottle.id)}>X</button>
                </div>)
            }
            
        </div>
    );
};

export default Cart;