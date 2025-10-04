import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import './menu-item.style.scss';
import { fetchAllProduct } from '../../Redux/shop/shop-action';

const MenuItem = ({ item, currentProduct}) => {
    const { id, name, logo } = item

    const navigate = useNavigate()

    const handleClick = () => {
        currentProduct(id)
        navigate(`/shop/${encodeURIComponent(name.toLowerCase())}`)
    }

    return (
        <a key={id} className={`menu-item`} onClick={handleClick}>
            <div 
                className='background-image'
                style={{
                    backgroundImage: `url(${logo})`
                }}
            />
            <div className="content">
                <div className='store-name'>
                    <span className="title">{name}</span>
                    <span className='title-name' >store</span>
                </div>
                {/* <div className='price'>
                    <span>NGN 1,025.00</span>
                    <span className='dot'></span>
                    <span>25-35 min</span>
                </div> */}
            </div>
        </a>
    )
}

const mapDispatchToProps = (dispatch) => ({
    currentProduct: (id) => dispatch(fetchAllProduct(id))
})

export default connect(null, mapDispatchToProps)(MenuItem);