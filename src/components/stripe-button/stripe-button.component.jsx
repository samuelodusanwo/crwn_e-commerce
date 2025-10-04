import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51RzFoW5vnSNOZcy5cjQiLvjZRa2waOcdv0vD2l94Fl8xj03c8REVyB6NhC2tRLmkCpVRff3Syqv95czPytye769H00mzWBj9qQ'
    
    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image="/src/assets/crown.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;