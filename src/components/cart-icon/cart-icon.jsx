import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
import { selectCartItemsCnt } from "../../redux/cart/cart-selectors";

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

const mapStateToProps = (state) => {
    // console.log("cart-icon called"); //uncomment to check reselect
    return { itemCnt: selectCartItemsCnt(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
