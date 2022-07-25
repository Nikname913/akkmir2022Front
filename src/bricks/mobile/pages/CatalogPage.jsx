/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from "react-router-dom"
import css from '../../../styles/mobile/mobileStyles'
import { useSelector, useDispatch } from 'react-redux'
import CardPreview from '../views/CardPreview'
import image from '../../../img/category.png'
import changeWhite from '../../../img/changeWhite.png'
import arrowRight from '../../../img/arrowRight.png'

const { Wrapper, 
  ContentLine,
  PopularScrollWrapper,
  CatalogPage: {
    CatalogItem,
    CatalogLastItem
  }} = css.ScreenStyles

const CatalogPage = (props) => {

  const mainMenu = useSelector(state => state.main.catalogMenu)
  const popularItems = useSelector(state => state.catalog.popular)
  const dispatch = useDispatch()
  const { screen = 420 } = props

  return (
    <React.Fragment>
      <Wrapper 
        style={{ 
          marginLeft: '20px', 
          borderRadius: '0px',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px' 
        }}
      >
        <ContentLine width={screen} style={{ marginTop: '12px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656' }}>Каталог товаров</h2>
        
        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '12px', 
            flexWrap: 'wrap',
            alignContent: 'space-between',
            justifyContent: 'space-between',
          }}
        >

          { mainMenu 
            ? mainMenu.map(item => {

              return (
                <React.Fragment>
                  <CatalogItem 
                    width={screen * 0.3} 
                    height={screen * 0.3}
                    marginBottom={(screen - (screen * 0.93)) / 3}
                  >

                    <img 
                      src={image} 
                      alt={""}
                      style={{
                        display: 'block',
                        width: '60px',
                        margin: '0 auto',
                        marginBottom: '6px'
                      }}
                    />

                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        lineHeight: '18px',
                        fontSize: '12px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                    
                      { item.label }</span>
                  </CatalogItem>
                </React.Fragment>
              )

            }) : null }

            <Link style={{ textDecoration: 'none', color: 'black' }} to="/change">
              <CatalogLastItem  
                width={screen * 0.3} 
                height={screen * 0.3}
                marginBottom={(screen - (screen * 0.93)) / 3}
              >

                <img 
                  src={changeWhite} 
                  alt={""}
                  style={{
                    display: 'block',
                    width: '30px',
                    margin: '0 auto',
                    marginBottom: '12px'
                  }}
                />

                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '100%',
                    lineHeight: '18px',
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                
                  Подбор аккумуляторов</span>

              </CatalogLastItem>
            </Link>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '0px', 
            marginBottom: '4px', 
            justifyContent: 'space-between' 
          }}
        >

          <h4>Популярные товары</h4>
          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '13px',
              color: 'grey',
              cursor: 'pointer',
              paddingRight: '33px'
            }}
          >
            <img 
              style={{ 
                display: 'block', 
                position: 'absolute',
                width: '18px',
                left: '100%',
                marginLeft: '-24px',
                marginTop: '1px'
              }} 
              src={arrowRight} 
              alt={""}
            />
            Смотреть все</span>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine>

      </Wrapper>
    </React.Fragment>
  )

}

export default CatalogPage 