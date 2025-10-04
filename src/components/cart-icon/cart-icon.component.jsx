import React from 'react';
import ShoppingIcon from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/cart/cart.action';
import { selectCartItemsCount } from '../../Redux/cart/cart-selector';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <img src={ShoppingIcon} className='shopping-icon' alt="cart-icon" />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);