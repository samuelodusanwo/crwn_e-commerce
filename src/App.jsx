import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

import './App.scss'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/shop' element={ <ShopPage /> } />
      </Routes>
    </>
  )
}

export default App