import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.scss'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/shop' element={ <ShopPage /> } />
        <Route path='/sign-in-and-sign-up' element={ <SignInAndSignUpPage /> } />
      </Routes>
    </>
  )
}

export default App;