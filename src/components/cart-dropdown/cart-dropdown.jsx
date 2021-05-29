import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";

const CartDD = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>Go To CheckOut</CustomButton>
        </div>
    );
};

export default CartDD;
