/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import css from '../../styles/make-order'
import image from '../../img/category.png'
import trash from '../../img/trash.png'
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

  const { data, setSC } = props
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

  {/* технический долг, потом все вынестии в стейт */}
  {/* либо в глобальный стор приложения */}

  let summary = 0
  let ids = ''
  let urlstring = '/order-products?items='
  data.forEach(item => ids = ids + item.id + '::' + item.count + '**')
  urlstring = urlstring + ids

  {/* технический долг, потом все вынестии в стейт */}
  {/* либо в глобальный стор приложения */}

  {/* технический долг, подсчет цены должен быть в реальном времени */}

  useEffect(() => { 
    
    let totalSumm = 0
    console.log(orderedProducts)

    orderedProducts.split('**').forEach((product, index) => {

      // eslint-disable-next-line use-isnan
      if ( Number(product.split('::')[3]) * Number(product.split('::')[2]) ) {

        totalSumm = totalSumm + Number(product.split('::')[3]) * Number(product.split('::')[2])

      }

    })
    setSC(totalSumm) 
  
  },[ orderedProducts ])

  {/* технический долг, подсчет цены должен быть в реальном времени */}

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
            <React.Fragment>
              { !removeProductsId.split('**').includes(item.split('::')[0]) && <Item key={index}>
                <Icon>{ index + 1 }</Icon>
                <ImageWrapper>

                  <img style={{ display: 'block', width: '60px' }} src={image} alt={""}/>

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
                <Counter>{ item.split('::')[2] }</Counter>
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
                    
                  }}
                >

                  <img style={{ display: 'block', width: '14px' }} src={trash} alt={""}/>

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