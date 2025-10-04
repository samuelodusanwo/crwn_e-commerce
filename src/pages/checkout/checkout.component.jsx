import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import './checkout-styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../Redux/cart/cart-selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
// import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { paymentField } from "../../Redux/cart/cart.action";


const CheckoutPage = ({cartItems, total, paymentField}) => {
    const navigate = useNavigate()

    const headerLabelBlock = [
        {label: 'Product'},
        {label: 'Description'},
        {label: 'Price'},
        {label: 'Quantity'},
        {label: 'Remove'}
    ];
    const handlePayment = () => {
        const paymentData = {
            items: cartItems.map(item => ({
                product: item.id,
                quantity: item.quantity
            }))
        }
        paymentField(paymentData)
        navigate('/')
    }

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {headerLabelBlock.map((item, idx) => (
                    <div key={idx} className="header-block">
                        <span>{item.label}</span>
                        <p>{cartItems.name}</p>
                    </div>
                ))}
            </div>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} cartItems={item} />
            ))}
            {cartItems.length === 0 ? (
                <Navigate to='/' />
            ) : (
                <div className="button-total">
                    <div className="total">TOTAL: ${total}</div>
                    <CustomButton onClick={handlePayment}>Pay</CustomButton>
                </div>
            )}
            {/* <StripeCheckoutButton price={total} /> */}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const mapDispatchToProps = (disaptch) => ({
    paymentField: paymentData => disaptch(paymentField(paymentData))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);