import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import './header.component.styles.scss'


const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
        </div>
        {hidden ? <CartDropdown /> : ''}
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);