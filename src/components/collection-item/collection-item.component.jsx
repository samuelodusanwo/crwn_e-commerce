import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/cart/cart.action';
import { removeItem } from '../../Redux/cart/cart.action';
import { selectedUser } from '../../Redux/users/user-selector';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../Redux/cart/cart-selector';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const CollectionItem = ({ item, addItem, removeItem, cartItem }) => {
    const { id, name, imageUrl, image, price, description } = item;

    // filter specific added item
    const cartItems = cartItem.find(item => item.id === id)
    const quantity = cartItems ? cartItems.quantity : 0
    const amount = cartItems ? cartItems.quantity  * cartItems.price : 0;

    return (
        <div className='collection-item'>
            <div className='collection-item-div'>
                <div className='image-details'>
                    <div className='image-div'>
                        {imageUrl ? (
                            <img src={imageUrl} alt="product image" className='image' />
                        ) : (
                            <img src={image} alt="product image" className='image' />
                        )}
                    </div>
                    <div className='collection-footer'>
                        <p className='name'>{name}</p>
                        <span className='text'>{description}</span>
                    </div>
                </div>
                <div className="button-price">
                    <span className='price'>Price per item: ${price}</span>
                    <span className='price'>total amount: ${amount}</span>
                    <span className='quantity'>
                        <div className='arrow' onClick={() => removeItem(item)}>
                            <FiMinus size={20} />
                        </div>    
                        <span className='value'>{quantity}</span>
                        <div className='arrow' onClick={() => addItem(item)}>
                            <IoMdAdd size={20} />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectedUser,
    cartItem: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);