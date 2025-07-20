import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);