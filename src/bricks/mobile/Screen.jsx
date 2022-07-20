/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import OrderPage from './pages/OrderPage'
import ProductPage from './pages/ProductPage'
import CabinetPage from './pages/CabinetPage'

const MobileScreen = (props) => {

  const { screen } = props

  return (
    <Routes>
      <Route 
        path="/modal-catalog" 
        element={<ProductPage screen={screen}/>} 
      />
      <Route 
        path="/order" 
        element={<ProductPage screen={screen}/>} 
      />
      <Route 
        path="/product" 
        element={<ProductPage screen={screen}/>} 
      />
      <Route 
        path="/cabinet" 
        element={<ProductPage screen={screen}/>} 
      />
      <Route 
        path="/home" 
        element={<MainPage screen={screen}/>} 
      />
      <Route 
        path="/" 
        element={<MainPage screen={screen}/>} 
      />
    </Routes>
  )

}

export default MobileScreen