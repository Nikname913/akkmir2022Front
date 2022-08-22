/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import NotFround from '../views/NotFround'
import css from '../../styles/pages/order-page'

const Main = css.Main
const ContentLine = css.MainContentLine
const Banner = css.MainContentLineBanner

const NotFoundPage = () => {

  useEffect(() => document.documentElement.scrollTop = 0,[])

  return (
    <React.Fragment>
      <Main>
        <ContentLine style={{ marginBottom: '38px', marginTop: '0px' }}>

          <h2>Ну что ж, похоже такой страницы нет</h2>

        </ContentLine>
        <ContentLine style={{ marginBottom: '15px' }}>
          
          <NotFround/>
        
        </ContentLine>
        <ContentLine style={{ marginBottom: '38px', marginTop: '3px' }}>

          <h2>Посмотрите наши акции</h2>

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginBottom: '32px' }}>

          <Banner/>
          <Banner/>
          <Banner/>

        </ContentLine>
      </Main>
    </React.Fragment>
  )
}

export default NotFoundPage