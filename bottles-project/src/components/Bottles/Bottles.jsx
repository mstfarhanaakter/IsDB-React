import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addItemToLocal, getCartFromLocal, removeCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlePromise }) => {
    const bottles = use(bottlePromise); // use for fetch
    const [cart, setCart] = useState([]); // use for state

    useEffect(() => { // LocalStorage থেকে আগের কার্ট ডাটা নিয়ে আসা ও সেট করা
        const storedCartId = getCartFromLocal();
        const storedCart = [];

        for (const id of storedCartId) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
    }, [bottles]);

    const handleToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addItemToLocal(bottle.id);
    };

    const handleRemoveCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeCart(id);
    };

    return (
        <div className='space-y-3'>
            <h1>Total Bottles: {bottles.length}</h1>
            <p>Add to Cart: {cart.length}</p>

            <Cart 
                cart={cart} 
                handleRemoveCart={handleRemoveCart} 
            />

            <div className='card-Container'>
                {bottles.map(bottle => (
                    <Bottle 
                        key={bottle.id} 
                        bottle={bottle} 
                        handleToCart={handleToCart} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;
