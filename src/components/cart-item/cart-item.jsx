import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { id, imageUrl, price, name, quantity } }) => {
    console.log({id });
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x $ {price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
