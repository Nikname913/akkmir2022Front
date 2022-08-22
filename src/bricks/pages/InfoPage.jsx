/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import css from '../../styles/pages/info-page'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine

const InfoPage = () => {

  const title = useSelector(state => state.main.infoPageTitle)
  useEffect(() => document.documentElement.scrollTop = 0,[])

  return (
    <Main>
      <ContentLine style={{ marginBottom: '35px', marginTop: '9px' }}>

        <h2>{ title }</h2>

      </ContentLine>
      <ContentLine style={{ marginBottom: '35px', marginTop: '2px', fontSize: '13px', color: 'grey' }}>

        <span>Содержание страницы находится в стадии наполнения</span>

      </ContentLine>
    </Main>
  )

}

export default InfoPage