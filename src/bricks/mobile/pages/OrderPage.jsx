/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../comps/button/Button.jsx'
import css from '../../../styles/mobile/mobileStyles'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'
import CardPreview from '../views/CardPreview'
import OrderItemsLineMobile from '../../comps/OrderItemLineMobile.jsx'
import category from '../../../img/category.png'
import like from '../../../img/like.png'
import trash from '../../../img/trash.png'

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

const OrderPage = (props) => {

  const { screen = 420 } = props
  const orders = useSelector(state => state.main.ordersCount)
  const orderedProducts = useSelector(state => state.catalog.orderProducts)
  const popularItems = useSelector(state => state.catalog.popular)
  const [ summ, setSumm ] = useState(0)

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
        <ContentLine width={screen} style={{ marginTop: '12px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656' }}>Корзина с товарами</h2>
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '11px', marginBottom: '4px' }}>
          <OrdersWrapper>

            <OrderItemsLineMobile 
              productsData={orderedData}
              setSC={setSumm}
            />
            <OrdersWrapperContentLine style={{ marginTop: '20px', paddingLeft: '16px' }}>
              <h5
                style={{
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
              
                Ваша корзина: { orders } товаров</h5>
            </OrdersWrapperContentLine>
            <OrdersWrapperContentLine style={{ marginTop: '8px', paddingLeft: '16px' }}>
              <span 
                style={{ 
                  fontSize: '14px', 
                  marginRight: '12px',
                  fontWeight: 'bold' 
                }}
              >Итого к оплате:</span>
              <h5
                style={{
                  display: 'block',
                  fontSize: '20px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
              
                { summ } рублей</h5>
            </OrdersWrapperContentLine>

          </OrdersWrapper>
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '6px' }}>
          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '13px',
            }}
          >
          
            Доставка по Екатеринбургу 
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}> сегодня</i>
          </span>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '0px', 
            marginBottom: '5px',
            justifyContent: 'space-between',
          }}
        >

          <Link style={{ textDecoration: 'none' }} to="/oformit-zakaz"><Button  
            params={{
              width: 232,
              height: 40,
              background: '#565656'
            }}
            inner={"Перейти к оформлению"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: 'white',
              fontWeight: 'bold',
            }}
          /></Link>

          <Button  
            params={{
              width: 150,
              height: 40,
              background: 'white'
            }}
            inner={"Купить в 1 клик"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: 'black',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.11)',
              fontWeight: 'bold',
            }}
          />

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '5px', 
            marginBottom: '6px', 
            justifyContent: 'space-between' 
          }}
        >

          <h4>Добавьте к вашему заказу</h4>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment key={index}>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine> : <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>

          <PopularScrollWrapper>

            { generalCatalog ? generalCatalog.map((item, index) => {

              if ( index === 70 || index === 74 ) {
                return (
                  <React.Fragment key={index}>
                    <CardPreview 
                      itemID={item.id[0]}
                      title={item.name[0]}
                      description={item.description[0]}
                      coast1={+item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]}
                      coast2={+item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]}
                    ></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine> }
      </Wrapper>
    </React.Fragment>
  )

}

export default OrderPage 