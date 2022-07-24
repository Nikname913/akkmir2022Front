/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import OrderPage from './pages/OrderPage'
import ProductPage from './pages/ProductPage'
import CabinetPage from './pages/CabinetPage'
import ChangePage from './pages/ChangePage'
import CatalogPage from './pages/CatalogPage'

const MobileScreen = (props) => {

  const { screen } = props

  return (
    <Routes>
      <Route 
        path="/change" 
        element={<ChangePage screen={screen}/>} 
      />
      <Route 
        path="/catalog" 
        element={<CatalogPage screen={screen}/>} 
      />
      <Route 
        path="/order" 
        element={<OrderPage screen={screen}/>} 
      />
      <Route 
        path="/product" 
        element={<ProductPage screen={screen}/>} 
      />
      <Route 
        path="/cabinet" 
        element={<CabinetPage screen={screen}/>} 
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