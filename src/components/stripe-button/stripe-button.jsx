import React from "react";
import StripeCheckout from "react-stripe-checkout";

const demoToken = (token) => {
    console.log(token);
    alert("Payment Successful :)");
};

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51J0B62SC7K7pRcKe03cPTvk8FyKIaQaYE1FOlUZKaaZZTbH70sns1rdVIMOugJonMP4uAjFMVeocgll5froSOwDM00sSGDDUct";
    return (
        <StripeCheckout
            lable='Pay Now'
            name='E-Commerce Website'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Y0o.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={demoToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
