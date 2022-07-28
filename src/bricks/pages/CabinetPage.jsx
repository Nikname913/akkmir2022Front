/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/pages/cabinet-page'
import cssMain from '../../styles/pages/main-page'
import CabinetComponent from '../views/CabinetComponent'
import CardPreview from '../views/CardPreview'
import { useSelector, useDispatch } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine
const Banner = cssMain.MainContentLineBanner

const CabinetPage = () => {

  const popularItems = useSelector(state => state.catalog.popular)
  const dispatch = useDispatch()

  return (
    <Main>
      <ContentLine style={{ marginBottom: '38px', marginTop: '0px' }}>

        <h2>Личный кабинет</h2>

      </ContentLine>
      <ContentLine style={{ alignItems: 'flex-start' }}>
        <CabinetComponent/>
      </ContentLine>
      <ContentLine style={{ marginBottom: '30px', marginTop: '14px' }}>

        <h2>Наши акции</h2>

      </ContentLine>
      <ContentLine style={{ marginBottom: '22px', justifyContent: 'space-between' }}>

        <Banner/>
        <Banner/>
        <Banner/>

      </ContentLine>
      <ContentLine style={{ marginBottom: '32px', marginTop: '6px' }}>

        <h2>Посмотрите наши новинки</h2>

      </ContentLine>
      <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

        { popularItems ? popularItems.map((item, index) => {

          return (
            <React.Fragment key={index}>
              <CardPreview
                params={{ width: 15.833333, mleft: 0 }}
                image={null}
                title={item.name}
                description={item.discr}
                coast1={item.coast1}
                coast2={item.coast2}
                itemID={item.itemID}
              />
              { index < 5 && <span 
                style={{ 
                  display: 'block',
                  position: 'relative',
                  width: '1%',
                  height: '300px',
                  boxSizing: 'border-box'
                }}
              ></span> }
            </React.Fragment>
          )

        }) : null }

      </ContentLine>

    </Main>
  )

}

export default CabinetPage