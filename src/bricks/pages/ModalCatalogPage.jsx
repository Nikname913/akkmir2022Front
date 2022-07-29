/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import css from '../../styles/pages/modal-catalog-page'
import StartCatalog from '../views/StartCatalog'

const Main = css.Main
const ContentLine = css.MainContentLine

const ModalCatalogPage = () => {

  useEffect(() => document.documentElement.scrollTop = 0)

  return (
    <Main>
      <ContentLine>

        <StartCatalog type={"page"}/>

      </ContentLine>
    </Main>
  )

}

export default ModalCatalogPage