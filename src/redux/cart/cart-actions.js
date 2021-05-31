import cartActionTypes from "./cart-types";

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
    // There is NO need for payload here as we are not using payload in reducer to change value
});

export const addItem = (item) => ({ type: cartActionTypes.ADD_ITEM, payload: item });
