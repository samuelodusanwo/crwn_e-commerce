import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectedUser } from '../../Redux/users/user-selector'
import { selectHidden } from '../../Redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
import { logoutUser, setCurrentUser } from '../../Redux/users/user.action'
import ProtectedRoute from '../../protectedRoute/protectedRoute'
import { totalProduct } from '../../Redux/shop/shop-action'
import { IoMdMenu } from "react-icons/io";
import './header.component.styles.scss';


const Header = ({currentUser, hidden, logoutUser, totalProduct, clearCurrentUSer}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [displayMenu, setDisplayMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const logout = () => {
        auth.signOut();
        logoutUser();
        clearCurrentUSer();
        localStorage.clear();
        navigate("/");
    };

    const toggleMenu = () => {
        setDisplayMenu((prev) => !prev)
    };

    const handleProduct = async () => {
        await totalProduct()
    }

    const hideCart = location.pathname === "/sign-in";

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero')

            if (hero) {
                const heroHeight = hero.offsetHeight
                if (window.scrollY > heroHeight){
                    setScrolled(true)
                } else {
                    setScrolled(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <section className={`header ${scrolled ? 'white-bg' : ''}`}>
            <Link className='logo-container' to='/'>
                <img className='logo' src={logo} alt="logo-image" />
            </Link>

            <div className={`options ${scrolled ? 'white-bg' : ''} ${displayMenu ? 'show-options' : ''}`}>
                    <Link to='/store'>
                        All STORES
                    </Link>
                    <Link 
                        to={`/shop/${encodeURIComponent("all product")}`}
                        onClick={() => handleProduct()}
                    >
                        All PRODUCTS
                    </Link>
                    { currentUser &&
                        <Link to='/register-post'>
                            POST PRODUCT
                        </Link>
                    }
                    { currentUser ? (
                        <div className='option' onClick={logout}>
                            SIGN OUT
                        </div>
                    ) : ( 
                            <Link to="/sign-in">
                                SIGN IN
                            </Link> 
                        )
                    }
                    <div to='/contact'>
                        {currentUser && currentUser.username.toUpperCase()}
                    </div>
                    {!hideCart && <CartIcon />}
            </div>
            {hidden && <ProtectedRoute><CartDropdown /></ProtectedRoute>}
            <div className='menu-icon' onClick={toggleMenu}>
                <IoMdMenu />
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser()),
    clearCurrentUSer: () => dispatch(setCurrentUser(null)),
    totalProduct: () => dispatch(totalProduct())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectedUser,
    hidden: selectHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);