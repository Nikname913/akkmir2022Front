/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import css from '../../../styles/mobile/mobileStyles'
import { useSelector, useDispatch } from 'react-redux'
import image from '../../../img/category.png'

const { Wrapper, 
  ContentLine,
  CatalogPage: {
    CatalogItem,
    CatalogLastItem
  }} = css.ScreenStyles

const CatalogPage = (props) => {

  const mainMenu = useSelector(state => state.main.catalogMenu)
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
            marginBottom: '12px',
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
                        margin: '0 auto'
                      }}
                    />

                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        lineHeight: '18px',
                        fontSize: '13px',
                        textAlign: 'center',
                      }}
                    >
                    
                      { item.label }</span>
                  </CatalogItem>
                </React.Fragment>
              )

            }) : null }

            <CatalogLastItem  
              width={screen * 0.3} 
              height={screen * 0.3}
              marginBottom={(screen - (screen * 0.93)) / 3}>
            </CatalogLastItem>

        </ContentLine>

      </Wrapper>
    </React.Fragment>
  )

}

export default CatalogPage 