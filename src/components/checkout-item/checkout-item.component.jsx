import React from 'react';
import { connect } from 'react-redux'
import { clearItemFromCart, removeItem, addItem } from '../../Redux/cart/cart.action';
import './checkout-item.stles.scss'

const CheckoutItem = ({cartItems, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItems;

    const handleDeleteClick = () => {
        clearItem(cartItems)
    }

    const handleAddItemToCart = () => {
        addItem(cartItems)
    }

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="Image" />
            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItems)}>&#10094;</div>    
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleAddItemToCart}>&#10095;</div>    
            </span>
            <span className='remove-button' onClick={handleDeleteClick}>&#10005;</span>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);