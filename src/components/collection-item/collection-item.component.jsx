import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../Redux/cart/cart.action';
import { useNavigate } from 'react-router-dom';
import { selectedUser } from '../../Redux/users/user-selector';
import { createStructuredSelector } from 'reselect';
import { IoMdAdd } from "react-icons/io";

const CollectionItem = ({ item, addItem, currentUser }) => {
    const { name, imageUrl, image, price, description } = item;
    const navigate = useNavigate()

    const handleItemsCart = () => {
        if (currentUser){
            addItem(item)
        } else {
            navigate("/sign-in")
        }
    }

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
                    <span className='price'>#{price}</span>
                    <div className='add-button' onClick={handleItemsCart}>
                        <IoMdAdd size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectedUser
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);