/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from "react-router-dom"
import css from '../../styles/make-order'
import image from '../../img/category.png'
import trash from '../../img/trash.png'
import { useDispatch } from 'react-redux'
import { setActualItem } from '../../appStore/reducers/mainReducer'

const Item = css.ItemOneLine
const Icon = css.ItemOneLineComps.Icon
const ImageWrapper = css.ItemOneLineComps.ImageWrapper
const Coast = css.ItemOneLineComps.Coast
const Counter = css.ItemOneLineComps.Counter

const OrderItemsLine = (props) => {

  const { data } = props
  const dispatch = useDispatch()

  return (
    <React.Fragment>

      { data.map((item, index) => {

        return (
          <Item key={index}>
            <Icon>{ index + 1 }</Icon>
            <ImageWrapper>

              <img style={{ display: 'block', width: '60px' }} src={image} alt={""}/>

            </ImageWrapper>
            <h6 
              style={{ fontSize: '13px' }}
              onClick={() => dispatch(setActualItem(item.id))}
            >
              <Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/product">
                
                Аккумулятор ZEUS RED 50 Ач п.п
              
              </Link>
            </h6>
            <Coast>2550</Coast>
            <Counter>{ item.count }</Counter>
            <Icon 
              style={{
                backgroundColor: 'transparent',
                borderRadius: '0px',
                marginLeft: '-6px',
                cursor: 'pointer'
              }}
            >

              <img style={{ display: 'block', width: '14px' }} src={trash} alt={""}/>

            </Icon>

            { false && <p>{ item }</p> }

          </Item>
        )

      })}

    </React.Fragment>
  )

}

export default OrderItemsLine