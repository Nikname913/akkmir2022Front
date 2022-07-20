/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import css from '../../../styles/mobile/mobileStyles'
import Button from '../../comps/button/Button.jsx'
import testImg from '../../../img/category.png'
import { useDispatch } from 'react-redux'
import { setActualItem, setOrdersCount } from '../../../appStore/reducers/mainReducer'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'

const { Wrapper, ImageBlock } = css.CardPreview

const CardPreview = (props) => {

  const { 
    params,
    image = null,
    title = null,
    description = null,
    coast1 = null,
    coast2 = null,
    itemID = null } = props
  const dispatch = useDispatch()
  const [ makeOrder, setMakeOrder ] = useState(false)
  const [ makeOrderInner, setMakeOrderInner ] = useState('В корзину')

  function ordersCount() {

    Rds.setOrdersCount()
    dispatch(setOrdersCount(Rds.getOrdersCount()))

  }

  function ordersData(param) {

    Rds.makeNewOrder({ itemID: param })
    setMakeOrderInner('Добавлено')
    setMakeOrder(true)

  }

  return (
    <React.Fragment>
      <Wrapper>
        <ImageBlock>

          <img 
            src={testImg} 
            alt={""}
            style={{
              display: 'block',
              position: 'relative',
              width: '100px',
              margin: '0 auto'
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              height: 'auto',
              marginTop: '8px'
            }}
          >
            <span style={{ display: 'block', width: '50%', fontSize: '16px', fontWeight: 'bold' }}>1200 Р</span>
            <span 
              style={{ 
                display: 'block', 
                width: '50%', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: 'grey', 
                textAlign: 'right' 
              }}
            >
              
              1400 Р
            </span>
          </div>

        </ImageBlock>

        <h4 
          style={{
            display: 'block',
            fontSize: '13px',
            lineHeight: '18px',
            marginTop: '8px',
            marginBottom: '10px'
          }}
          onClick={() => dispatch(setActualItem(itemID))}
        >
          
          <Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/product">
            Аккумулятор ZEUS RED LB 50 Ач п.п.</Link></h4>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: 'auto',
            marginTop: '8px'
          }}
        >

          <Button  
            params={{
              width: 100,
              height: 30,
              background: !makeOrder ? '#2E2E2E' : 'rgb(43,198,49)'
            }}
            inner={makeOrderInner}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              borderRadius: '6px'
            }}
            action={() => {
              ordersCount()
              ordersData(itemID)
            }}
          />
          <Button  
            params={{
              width: 30,
              height: 30,
              background: 'grey'
            }}
            inner={""}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              borderRadius: '6px'
            }}
          />
          
        </div>

      </Wrapper>
    </React.Fragment>
  )

}

export default CardPreview