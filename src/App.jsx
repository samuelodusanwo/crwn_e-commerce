import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import './App.scss';
import { onSnapshot } from 'firebase/firestore';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/users/user.action';


class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount() {
      const { setCurrentUser } = this.props

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth)

          if (userRef){
            onSnapshot(userRef, snapshot => {
              setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
              })
            })
          }
        } else {
          setCurrentUser(null)
        }
      })
  };

  componentWillUnmount(){
      this.unsubscribeFromAuth()
  }

  render() {
    return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/shop' element={ <ShopPage /> } />
          <Route path='/sign-in' element={ <SignInAndSignUpPage /> } />
        </Routes>
      </>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);