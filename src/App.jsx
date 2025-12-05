import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import './App.scss';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/users/user.action';
import { selectedUser } from './Redux/users/user-selector';
import { createStructuredSelector } from 'reselect';
import ProtectedRoute from './protectedRoute/protectedRoute';
import NotFound from './pages/not-found/not-found';
import { RegisterAndLogout } from './components/RegisterAndLogout/registerAndLogout';
import Store from './pages/store/store';
import ShopRegistration from './pages/shop-registration/shop-registration';
import PostRegistration from './pages/post-registration/post-registration';

class App extends React.Component{
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //     const { setCurrentUser } = this.props

  //     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //       if (userAuth){
  //         const userRef = await createUserProfileDocument(userAuth)

  //         if (userRef){
  //           onSnapshot(userRef, snapshot => {
  //             setCurrentUser({
  //                 id: snapshot.id,
  //                 ...snapshot.data()
  //             })
  //           })
  //         }
  //       } else {
  //         setCurrentUser(null)
  //       }
  //     })
  // };

  // componentWillUnmount(){
  //     this.unsubscribeFromAuth()
  // }

  render() {
    return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/shop/*' element={ <ShopPage /> } />
          <Route path='/store/*' element={ <Store /> } />
          <Route path="/register-shop" element={ <ShopRegistration /> } />
          <Route path="/register-post" element={ <ProtectedRoute> <PostRegistration /> </ProtectedRoute> } />
          <Route path='/checkout' element={ <ProtectedRoute> <CheckoutPage /> </ProtectedRoute> } />
          <Route path='/sign-in' element={ this.props.currentUser ? (<Navigate to='/' />) : <RegisterAndLogout /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </>
    )
  }
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectedUser
// })

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;