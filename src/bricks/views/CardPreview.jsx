/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import css from '../../styles/card-preview'
import Button from '../comps/button/Button.jsx'
import imageItem from '../../img/category.png'
import likeImg from '../../img/like.png'
import { useDispatch } from 'react-redux'
import { setActualItem, setOrdersCount } from '../../appStore/reducers/mainReducer'
import Rds from '../../appStore/reducers/storageReducers/mainReducer'

const Card = css.Card
const FakeImage = css.FakeImage
const CoastWrapper = css.CoastWrapper
const Labels = css.Labels

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
    <Card styles={params} itemid={itemID}>

      { false ? <img src={image} alt={""}/> : 
        
        <FakeImage styles={params}>

          <img style={{ display: 'block', width: '90%' }} src={imageItem} alt={""}/>

          <Labels>

            <Button  
              params={{
                width: 118,
                height: 24,
                background: 'rgb(43, 198, 49)',
              }}
              inner={"наш бестселлер"}
              css={{
                fontSize: '12px',
                color: 'white',
                marginBottom: '8px',
                borderRadius: '15px',
                boxShadow: 'none'
              }}
            />
            <Button  
              params={{
                width: 150,
                height: 24,
                background: 'rgb(43, 198, 49)',
              }}
              inner={"лучший товар недели"}
              css={{
                fontSize: '12px',
                color: 'white',
                marginBottom: '8px',
                borderRadius: '15px',
                boxShadow: 'none'
              }}
            />
            <Button  
              params={{
                width: 124,
                height: 24,
                background: 'rgb(214, 46, 43)',
              }}
              inner={"хорошая скидка"}
              css={{
                fontSize: '12px',
                color: 'white',
                marginBottom: '8px',
                borderRadius: '15px',
                boxShadow: 'none'
              }}
            />

          </Labels>
        </FakeImage> 
        
      }

      <h5 
        style={{ 
          fontSize: '15px', 
          marginBottom: '10px',
          marginTop: '10px', 
          width: '90%',
          lineHeight: '22px' 
        }}
        onClick={() => dispatch(setActualItem(itemID))}
      ><Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/product">
          
          { title }
          
      </Link></h5>

      { description && description.map((item, index) => {

        return (
          <React.Fragment>
            { index < 2 && <p key={index + 640} style={{ color: 'grey', fontSize: '14px', lineHeight: '22px' }}>{ item }</p> }
          </React.Fragment>
        )

      })}

      <Button  
        params={{
          width: 180,
          height: 26,
          background: '#F4F4F4'
        }}
        inner={"в наличии в 10 магазинах"}
        css={{
          fontSize: '12px',
          color: '#858585',
          marginTop: '10px',
          marginBottom: '20px',
          boxShadow: 'none',
          borderRadius: '15px'
        }}
      />

      <CoastWrapper>

        <span 
          style={{ 
            display: 'block', 
            fontSize: '26px', 
            fontWeight: '500',
            marginRight: '30px' 
          }}
        >
          
          { coast1 && coast1 }*
          
        </span>
        <span 
          style={{ 
            display: 'block', 
            fontSize: '26px', 
            fontWeight: '500', 
            color: 'grey' 
          }}
        >
          
          { coast2 && coast2 }**
          
        </span>

      </CoastWrapper>
      <CoastWrapper style={{ marginTop: '20px', justifyContent: 'space-between' }}>

        { false ? <Link style={{ textDecoration: 'none', color: 'black' }} to="/product"><Button  
          params={{
            height: 36,
            background: '#2E2E2E',
          }}
          inner={"В корзину"}
          css={{
            fontSize: '13px',
            boxShadow: 'none',
            color: 'white',
            paddingRight: '20px',
            paddingLeft: '20px'
          }}
        /></Link> : <Button  
          params={{
            height: 36,
            background: !makeOrder ? '#2E2E2E' : 'rgb(43,198,49)'
          }}
          inner={makeOrderInner}
          css={{
            fontSize: '13px',
            boxShadow: 'none',
            color: 'white',
            paddingRight: '20px',
            paddingLeft: '20px'
          }}
          action={() => {
            ordersCount()
            ordersData(itemID)
          }}
        /> }
        <Button  
          params={{
            width: 36,
            height: 36,
            background: '#F4F4F4'
          }}
          inner={""}
          css={{
            fontSize: '13px',
            boxShadow: 'none',
            color: '#858585',
          }}
          children={
            <React.Fragment>
              <img 
                alt={""}
                src={likeImg}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '17px',
                  left: 0,
                  marginLeft: '10px',
                  top: '50%',
                  marginTop: '-7px'
                }}
              />
            </React.Fragment>
          }
        />

      </CoastWrapper>
    </Card>
  )

}

export default CardPreview