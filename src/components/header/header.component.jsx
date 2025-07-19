import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.component.styles.scss'


const Header = ({currentUser}) => (
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
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
             ) : ( 
                    <Link to="/sign-in">
                        SIGN IN
                    </Link> 
                )
            }
        </div>
    </div>
)

export default Header;