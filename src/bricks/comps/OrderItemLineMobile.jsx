/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RequestComponent from '../../services/request.service'
import Rds from '../../appStore/reducers/storageReducers/mainReducer'
import { setActualItem } from '../../appStore/reducers/mainReducer'
import css from '../../styles/mobile/mobileStyles'
import category from '../../img/category.png'
import like from '../../img/like.svg'
import trash from '../../img/trash.svg'

const { OrderPage: {
    OrdersWrapperContentLine,
    OrderIndex,
    OrderCoastBlock
  }} = css.ScreenStyles

function OrderItemsLineMobile(props) {

  const { productsData, setSC } = props
  const orderedProducts = useSelector(state => state.catalog.orderProducts)
  const dispatch = useDispatch()

  {/* технический долг, потом все вынестии в стейт */}
  {/* либо в глобальный стор приложения */}

  let summary = 0
  let data = Rds.getOrdersData()
  let ids = ''
  let urlstring = '/order-products?items='
  data.forEach(item => ids = ids + item.id + '::' + item.count + '**')
  urlstring = urlstring + ids

  {/* технический долг, потом все вынестии в стейт */}
  {/* либо в глобальный стор приложения */}

  useEffect(() => { 
    
    let totalSumm = 0
    let productNames = ''

    console.log('---------- orderedProducts ----------')
    console.log(orderedProducts)

    orderedProducts.split('**').forEach(product => {

      if ( Number(product.split('::')[3]) * Number(product.split('::')[2]) ) {

        totalSumm = totalSumm + Number(product.split('::')[3]) * Number(product.split('::')[2])

      }

    })

    setSC(totalSumm)
  
  },[ orderedProducts ])

  return (
    <React.Fragment>

      { true &&  <RequestComponent
        make={false}
        callbackAction={'GET_ORDERED_PRODUCTS'}
        requestData={{
          type: 'GET',
          urlstring,
        }}
      /> }

      { productsData.map((item, index) => {

        if ( item.length > 0 ) {

          return (
            <React.Fragment key={index}>
              <OrdersWrapperContentLine>
                <OrderIndex>{ ++index }</OrderIndex>
                <img
                  alt={""}
                  src={category}
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '80px',
                    marginRight: '10px',
                    borderRadius: '8px'
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
                    lineHeight: '20px'
                  }}
                  onClick={() => dispatch(setActualItem(item.split('::')[0]))}
                >
                
                <Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/product">
                  { String(item).split('::')[1] }</Link></span>
                  
                <OrderCoastBlock>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#C4C4C4', marginBottom: '4px' }}>{ String(item).split('::')[3] } Р</span>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#565656' }}>{ String(item).split('::')[3] } Р</span>
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
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                
                { String(item).split('::')[2] } единиц</span>
              </OrdersWrapperContentLine>
            </React.Fragment>
          )

        }})}

    </React.Fragment>
  )
}

export default OrderItemsLineMobile