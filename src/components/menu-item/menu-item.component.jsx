import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, id, size, linkUrl }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(linkUrl)
    }

    return (
        <div key={id} className={`${size} menu-item`}>
            <div 
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{ title }</h1>
                <span className="subtitle" onClick={handleClick}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;