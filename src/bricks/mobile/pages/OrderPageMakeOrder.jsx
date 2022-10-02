/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from '../../comps/button/Button.jsx'
import css from '../../../styles/mobile/mobileStyles'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'

import { useSelector, useDispatch } from 'react-redux'
import { setMessageShow, 
  setMessageContent, 
  setInfoPageTitle,
  setOrdersCount } from '../../../appStore/reducers/mainReducer'

const { Wrapper, 
  ContentLine,
  PopularScrollWrapper,
  OrderPage: {
    OrdersWrapper,
    OrdersWrapperContentLine,
    OrderIndex,
    OrderCoastBlock
  }} = css.ScreenStyles

const OrderPageMakeOrder = (props) => {

  const { screen = 420 } = props
  const orders = useSelector(state => state.main.ordersCount)
  const orderedProducts = useSelector(state => state.catalog.orderProducts)

  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  let orderedData 

  if ( orderedProducts.indexOf('**') !== -1 ) orderedData = orderedProducts.split('**')
  else orderedData = []
  
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

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
        <ContentLine width={screen} style={{ marginTop: '12px', marginBottom: '12px' }}>
          
          <h2 style={{ color: '#565656' }}>Оформление заказа</h2>
        
        </ContentLine>
        
      </Wrapper>
    </React.Fragment>
  )

}

export default OrderPageMakeOrder 