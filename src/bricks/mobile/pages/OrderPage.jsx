/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import Button from '../../comps/button/Button.jsx'
import css from '../../../styles/mobile/mobileStyles'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'
import CardPreview from '../views/CardPreview'
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
  const popularItems = useSelector(state => state.catalog.popular)

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

            { Rds.getOrdersData().map((item, index) => {

              return (
                <React.Fragment>
                  <OrdersWrapperContentLine>
                    <OrderIndex>{ ++index }</OrderIndex>
                    <img
                      alt={""}
                      src={category}
                      style={{
                        display: 'block',
                        position: 'relative',
                        width: '80px',
                        marginRight: '10px'
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position:'relative',
                        width: '170px',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                    
                      Масло моторное G-Energy Synthetic Active 5W-40 4л</span>
                    <OrderCoastBlock>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#C4C4C4' }}>3550 Р</span>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#565656' }}>2550 Р</span>
                    </OrderCoastBlock>
                  </OrdersWrapperContentLine>
                  <OrdersWrapperContentLine style={{ paddingLeft: '14px' }}>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'relative',
                        marginRight: '20px'
                      }}
                    >
                      
                      <img
                        alt={""}
                        src={like}
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '18px',
                          marginRight: '6px',
                          cursor: 'pointer'
                        }}
                      />
                      <span 
                        style={{ 
                          fontSize: '13px', 
                          color: '#C4C4C4',
                          cursor: 'pointer' 
                        }}
                      >В избранное</span>

                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'relative',
                        marginRight: '20px'
                      }}
                    >

                      <img
                        alt={""}
                        src={trash}
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '14px',
                          marginRight: '6px',
                          marginTop: '-2px',
                          cursor: 'pointer'
                        }}
                      />
                      <span 
                        style={{ 
                          fontSize: '13px', 
                          color: '#C4C4C4',
                          cursor: 'pointer' 
                        }}
                      >Отмена покупки</span>

                    </div>
                    <span
                      style={{ 
                        fontSize: '13px', 
                        color: '#C4C4C4',
                        cursor: 'pointer' 
                      }}
                    >
                    
                      { item.count } шт.</span>
                  </OrdersWrapperContentLine>
                </React.Fragment>
              )
            })}

            <OrdersWrapperContentLine style={{ marginTop: '20px', paddingLeft: '16px' }}>
              <h5
                style={{
                  fontSize: '16px',
                  cursor: 'pointer'
                }}
              >
              
                Ваша корзина: { orders } товара</h5>
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
              
                { 2550 * orders } Р</h5>
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

          <Button  
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
          />

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
      </Wrapper>
    </React.Fragment>
  )

}

export default OrderPage 