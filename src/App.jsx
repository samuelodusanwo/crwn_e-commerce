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


class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth)

          if (userRef){
            onSnapshot(userRef, snapshot => {
              this.setState({
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data()
                }
              })
            })
          }
        } else {
          this.setState({currentUser: null})
        }
      })
  };

  componentWillUnmount(){
      this.unsubscribeFromAuth()
  }

  render() {
    return (
    <>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/shop' element={ <ShopPage /> } />
          <Route path='/sign-in' element={ <SignInAndSignUpPage /> } />
        </Routes>
      </>
    )
  }
}

export default App;