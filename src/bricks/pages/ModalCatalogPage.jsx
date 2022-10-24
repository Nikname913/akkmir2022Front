/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import css from '../../styles/pages/modal-catalog-page'
import SelectAkk from '../../services/selectAkk.service'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine

const ModalCatalogPage = () => {

  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
  const mainMarksRemote = useSelector(state => state.main.catalogMarksRemote)
  const mainModelsRemote = useSelector(state => state.main.catalogModelsRemote)
  const mainGenerationsRemote = useSelector(state => state.main.catalogGenerationsRemote)
  const mainEnginesRemote = useSelector(state => state.main.catalogEnginesRemote)

  useEffect(() => document.documentElement.scrollTop = 0,[])

  return (
    <Main>
      <ContentLine>

        <SelectAkk 
          categories={mainMenuRemote}
          marks={mainMarksRemote} 
          models={mainModelsRemote}
          gens={mainGenerationsRemote}
          engines={mainEnginesRemote}
        />

      </ContentLine>
    </Main>
  )

}

export default ModalCatalogPage