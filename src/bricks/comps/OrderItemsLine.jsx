/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import css from '../../styles/make-order'
import image from '../../img/category.png'
import trash from '../../img/trash.svg'
import RequestComponent from '../../services/request.service'
import { useDispatch, useSelector } from 'react-redux'
import { setActualItem, setOrdersCount } from '../../appStore/reducers/mainReducer'
import { removeProductFromOrder } from '../../appStore/reducers/catalogReducer'
import Rds from '../../appStore/reducers/storageReducers/mainReducer'

const Item = css.ItemOneLine
const Icon = css.ItemOneLineComps.Icon
const ImageWrapper = css.ItemOneLineComps.ImageWrapper
const Coast = css.ItemOneLineComps.Coast
const Counter = css.ItemOneLineComps.Counter

const OrderItemsLine = (props) => {

  const { data, setSC, setCOD } = props
  const orderedProducts = useSelector(state => state.catalog.orderProducts)
  const orderCount = useSelector(state => state.main.ordersCount)
  const dispatch = useDispatch()
  const orderedData = orderedProducts.split('**')

  const [ summ, setSumm ] = useState(0)
  const [ idxs, setIdxs ] = useState('')
  const [ urlstr, setUrlstr ] = useState('')
  const [ ordersData, setOrdersData ] = useState('')

  const [ goRemoveProduct, setGoRemoveProduct ] = useState(false)
  const [ removeProductsId, setRemoveProductsId ] = useState('')

  function removeItem(id, count = 1) {

    Rds.removeOrder({ itemID: id })
    dispatch(removeProductFromOrder(id))
    setRemoveProductsId(prev => prev + id + '**')

  }

  function decrementCounter(param) {

    Rds.decrementOrdersCount({ decr: param })

  }

  {/* технический долг, потом все вынестии в стейт */}
  {/* либо в глобальный стор приложения */}

  let summary = 0
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
        productNames = productNames + product.split('::')[1] + ' - ' + product.split('::')[2] + ' шт. '

      }

    })

    setSC(totalSumm)
    setCOD(productNames) 
  
  },[ orderedProducts ])

  return (
    <React.Fragment>
      <RequestComponent
        make={false}
        callbackAction={'GET_ORDERED_PRODUCTS'}
        requestData={{
          type: 'GET',
          urlstring,
        }}
      />

      { orderedData.map((item, index) => {

        if ( item.length > 0 ) {

          summary = summary + Number(item.split('::')[3]) * Number(item.split('::')[2])

          return (
            <React.Fragment key={index}>
            
              { !removeProductsId.split('**').includes(item.split('::')[0]) && <Item key={index}>

                <Icon>{ index + 1 }</Icon>
                <ImageWrapper style={{
                  boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px'
                }}>

                  <img style={{ display: 'block', width: '60px', borderRadius: '4px' }} src={image} alt={""}/>

                </ImageWrapper>
                <h6 
                  style={{ fontSize: '13px', width: '42%', lineHeight: '20px'}}
                  onClick={() => dispatch(setActualItem(item.split('::')[0]))}
                >
                  <Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/product">
                    
                    { item.split('::')[1] }
                  
                  </Link>
                </h6>
                <Coast>{ item.split('::')[3] }</Coast>
                <Counter>

                  { item.split('::')[2] }
                
                  <span
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '16px',
                      height: '16px',
                      borderRadius: '13px',
                      backgroundColor: '#D62E2B',
                      left: '0%',
                      marginLeft: '0px',
                      top: '100%',
                      marginTop: '10px',
                      cursor: 'pointer'
                    }}
                  />
                  <span
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '16px',
                      height: '16px',
                      borderRadius: '13px',
                      backgroundColor: 'rgb(43, 198, 49)',
                      left: '100%',
                      marginLeft: '-15px',
                      top: '100%',
                      marginTop: '10px',
                      cursor: 'pointer'
                    }}
                  />
                
                </Counter>
                <Icon 
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: '0px',
                    marginLeft: '-6px',
                    cursor: 'pointer'
                  }}
                  onClick={() => { 
                    
                    removeItem(item.split('::')[0], item.split('::')[2])
                    let orCount = orderCount

                    orCount = Number(orCount) - Number(item.split('::')[2])
                    dispatch(setOrdersCount(orCount))
                    decrementCounter(orCount)
                    
                  }}
                >

                  <img style={{ display: 'block', width: '18px' }} src={trash} alt={""}/>

                </Icon>

                { false && <p>{ item }</p> }

              </Item> }
            </React.Fragment>
          )
        }

      })}

    </React.Fragment>
  )

}

export default OrderItemsLine