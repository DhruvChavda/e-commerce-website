import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden, itemCnt }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCnt}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => {
    console.log("cart-icon called");
    return {
        itemCnt: cartItems.reduce(
            (accumulatedCnt, cartItem) => accumulatedCnt + cartItem.quantity,
            0
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
