/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import OrderPage from './pages/OrderPage'
import ProductPage from './pages/ProductPage'
import CabinetPage from './pages/CabinetPage'
import ModalCatalogPage from './pages/ModalCatalogPage'
import CatalogPage from './pages/CatalogPage'
import InfoPage from './pages/InfoPage'

const Main = () => {

  return (
    <Routes>
      <Route path="/modal-catalog" element={<ModalCatalogPage/>} />
      <Route path="/catalog" element={<CatalogPage/>} />
      <Route path="/order" element={<OrderPage/>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/cabinet" element={<CabinetPage/>} />
      <Route path="/home" element={<MainPage/>} />

      {/* header info pages */}

      <Route path="/oplata-i-dostavka" element={<InfoPage/>} />
      <Route path="/novosti" element={<InfoPage/>} />
      <Route path="/accii" element={<InfoPage/>} />
      <Route path="/o-kompanii" element={<InfoPage/>} />

      {/* footer info pages */}

      <Route path="/princip-raboty" element={<InfoPage/>} />
      <Route path="/pochemu-akkmir" element={<InfoPage/>} />
      <Route path="/nashy-sertifikaty" element={<InfoPage/>} />
      <Route path="/priem-vashikh-akkumulyatorov" element={<InfoPage/>} />
      <Route path="/polezno-znat" element={<InfoPage/>} />
      <Route path="/korporativnym-klientam" element={<InfoPage/>} />
      <Route path="/uslugi-servisnykh-centrov" element={<InfoPage/>} />
      <Route path="/oferta" element={<InfoPage/>} />
      <Route path="/bonusnaya-programma" element={<InfoPage/>} />
      <Route path="/vakansii-kompanii" element={<InfoPage/>} />

      {/* root page here */}
      {/* root page here */}

      <Route path="/" element={<MainPage/>} />
    </Routes>
  )

}

export default Main