import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'

import './header.component.styles.scss'


const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={logo} alt="logo-image" />
        </Link>

        <div className='options'>
            <Link to='/shop'>
                SHOP
            </Link>
            <Link to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;