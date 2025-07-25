import React from 'react';

import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/Cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, imageUrl, price } = item;

    return (
        <div key={id} className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
)}


const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);