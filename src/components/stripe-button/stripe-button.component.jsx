import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_KxPygJrBVR76AU1DzIc1zLxi00jXTT95Es';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing NL"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is €${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
