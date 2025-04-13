import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import './App.scss'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
    </>
  )
}

export default App
