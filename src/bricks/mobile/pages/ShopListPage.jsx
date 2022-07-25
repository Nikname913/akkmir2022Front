/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import css from '../../../styles/mobile/mobileStyles'
import AdressCard from '../views/AdressCard'

const { Wrapper, 
  ContentLine } = css.ScreenStyles

const ShopListPage = (props) => {

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

        <ContentLine width={screen} style={{ marginTop: '10px', marginBottom: '8px' }}>
          
          <h2 style={{ color: '#565656' }}>Адреса наших магазинов</h2>
        
        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '6px', 
            marginBottom: '12px', 
            flexWrap: 'wrap' 
          }}
        >

          <AdressCard></AdressCard>
          <AdressCard></AdressCard>
          <AdressCard marbottom={0.00000011}></AdressCard>

        </ContentLine>
      </Wrapper>
    </React.Fragment>
  )

}

export default ShopListPage 