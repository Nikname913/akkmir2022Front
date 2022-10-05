/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import Header from './bricks/views/Header'
import Footer from './bricks/views/Footer'
import Main from './bricks/Main'
import MobileHeader from './bricks/mobile/Header'
import MobileScreen from './bricks/mobile/Screen'
import MobileFooter from './bricks/mobile/Footer'
import MobileMenu from './bricks/mobile/views/Menu'
import ModalWindow from './services/modal.service'
import Message from './services/message.service'
import { useSelector } from 'react-redux'
import Rds from './appStore/reducers/storageReducers/mainReducer'

const App = () => {

  {/* ------------------------- */}
  {/* "proxy": "localhost:9000" */}
  {/* ------------------------- */}

  const [ SCREEN, SETSCREEN ] = useState(3000)
  const showModalWindow = useSelector(state => state.main.modalShow)
  const showMessageWindow = useSelector(state => state.main.messageShow)
  const isMobile = useSelector(state => state.main.mobile)
  
  useEffect(() => { Rds.initStore() },[])
  useEffect(() => false && SETSCREEN(window.screen.width),[])
  useEffect(() => SETSCREEN(420),[SCREEN])

  return (
    <React.Fragment>

      { !isMobile ? <React.Fragment> 
      
        <Header></Header>
        <Main></Main>
        <Footer></Footer>

        { showModalWindow && <ModalWindow></ModalWindow> }
        { showMessageWindow && <Message></Message> }

      </React.Fragment> : <React.Fragment>

        <MobileHeader screen={SCREEN}></MobileHeader>
        <MobileScreen screen={SCREEN}></MobileScreen>
        <MobileFooter screen={SCREEN}></MobileFooter>
        <MobileMenu screen={SCREEN}></MobileMenu>

        { false && <React.Fragment>

          { showModalWindow && <ModalWindow></ModalWindow> }
          { showMessageWindow && <Message></Message> }

        </React.Fragment> }

      </React.Fragment> }

    </React.Fragment>
  )
}

export default App
