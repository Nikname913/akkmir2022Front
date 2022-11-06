/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import OrderPage from './pages/OrderPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import ProductPage from './pages/ProductPage'
import CabinetPage from './pages/CabinetPage'
import ModalCatalogPage from './pages/ModalCatalogPage'
import CatalogPage from './pages/CatalogPage'
import CatalogPageSelection from './pages/CatalogPageSelection'
import SearchPage from './pages/SearchPage'
import InfoPage from './pages/InfoPage'
import NotFoundPage from './pages/NotFoundPage'
import OplataPage from './pages/OplataPage'
import InstallAkk from './pages/InstallAkk'
import MAPAR from './requests/MainPageRequests'
import { useSelector } from 'react-redux'

const Main = () => {

  const paginationCount = useSelector(state => state.desktopPagination.count)
  
  return (
    <React.Fragment>
      <MAPAR></MAPAR>

      <Routes>
        <Route path="/podbor-akkumulyatora" element={<ModalCatalogPage/>} />
        <Route path={`/catalog/:category/:${paginationCount}`} element={<CatalogPage/>} />
        <Route path="/catalog/:count" element={<CatalogPage/>} />
        <Route path="/resultaty-podbora" element={<CatalogPageSelection/>} />
        <Route path="/search/:query" element={<SearchPage/>} />
        <Route path="/order" element={<OrderPage/>} />
        <Route path="/order-success" element={<OrderSuccessPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/cabinet" element={<CabinetPage/>} />
        <Route path="/glavnaya" element={<MainPage/>} />

        {/* header info pages */}

        <Route path="/oplata-i-dostavka" element={<InfoPage/>} />
        <Route path="/oplata" element={<OplataPage/>} />
        <Route path="/ustanovka-akkumlyatora" element={<InstallAkk/>} />
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

        <Route path="/success-order" element={<InfoPage/>} />
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </React.Fragment>
  )

}

export default Main