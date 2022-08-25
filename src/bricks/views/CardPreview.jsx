/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react'
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
    if ( coast1 !== '--' ) {
      Rds.setOrdersCount()
      dispatch(setOrdersCount(Rds.getOrdersCount()))
    }
  }

  function ordersData(param) {
    if ( coast1 !== '--' ) {
      Rds.makeNewOrder({ itemID: param })
      setMakeOrderInner('Добавлено')
      setMakeOrder(true)
    }

  }

  useEffect(() => false && console.log(itemID))

  return (
    <Card 
      styles={params} 
      itemid={itemID}
      style={ coast1 === '--' ? { filter: 'grayscale(1)', marginBottom: '13px' } : { marginBottom: '13px' }} 
    >

      { false ? <img src={image} alt={""}/> : 
        
        <FakeImage styles={params}>

          { itemID.indexOf('oil') < 0 ? <img 
            style={ coast1 !== '--' 
            ? { display: 'block', width: '90%' }
            : { display: 'block', width: '90%', filter: 'grayscale(1)' }} 
            src={imageItem} 
            alt={""}
          /> : <img 
            style={{ display: 'block', width: '90%', filter: 'grayscale(1)' }} 
            src={imageItem} 
            alt={""}
          /> }

          { itemID.indexOf('oil') < 0 && <React.Fragment>

            { coast1 !== '--' && <Labels>

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

            </Labels> }
          </React.Fragment> }
        </FakeImage> 
        
      }

      { itemID.indexOf('oil') < 0 ? <h5 
        style={{ 
          fontSize: '15px', 
          marginBottom: '8px',
          marginTop: '10px', 
          width: '90%',
          height: '44px',
          lineHeight: '22px',
          overflow: 'hidden'
        }}
        onClick={() => dispatch(setActualItem(itemID))}
      ><Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/product">
          
          { title[0] }
          
      </Link></h5> : <h5 
        style={{ 
          fontSize: '15px', 
          marginBottom: '10px',
          marginTop: '10px', 
          width: '90%',
          height: '66px',
          lineHeight: '22px',
          overflow: 'hidden',
          backgroundColor: 'grey',
          borderRadius: '6px',
          opacity: '0.8'
        }}
        onClick={() => dispatch(setActualItem(itemID))}
      >{ false }</h5> }

      { description && description.map((item, index) => {

        if ( itemID.indexOf('oil') < 0 ) {

          return (
            <React.Fragment key={index}>

              { index < 2 && 
              
                <p key={index + 640} 
                  style={{ color: 'grey', 
                    fontSize: '14px', 
                    lineHeight: '22px' 
                  }}>{ item }</p> }
            
            </React.Fragment>
          )

        } else {

          return (
            <React.Fragment key={index}>

              { index < 2 && 
                
                <p key={index + 640} 
                  style={{ backgroundColor: 'grey', 
                    fontSize: '14px', 
                    lineHeight: '22px', 
                    height: '20px', 
                    marginBottom: '8px', 
                    borderRadius: '6px', 
                    opacity: '0.8' 
                  }}>{ false }</p> }
            
            </React.Fragment>
          )

        }

      })}

      { itemID.indexOf('oil') < 0 && 
      
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
        /> }

      { itemID.indexOf('oil') < 0 ? <React.Fragment>

        { coast1 !== '--' ? <CoastWrapper>

          <span 
            style={{ 
              display: 'block', 
              fontSize: '20px', 
              fontWeight: 'bold',
              marginRight: '30px',
              width: '90%'
            }}
          >
            
            { coast1 && coast1 } <i style={{ fontStyle: 'normal', fontSize: '16px' }}> Рублей</i>
            
          </span>
          <span 
            style={{ 
              display: 'block', 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: 'grey',
              width: '90%'
            }}
          >
            
            { coast2 && coast2 } <i style={{ fontStyle: 'normal', fontSize: '16px' }}>Рублей</i>
            
          </span>

        </CoastWrapper> : 
        <CoastWrapper>

          <span 
            style={{ 
              display: 'block', 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: 'grey' 
            }}
          >
            
            Извините, пока нет в продаже
            
          </span>
          
        </CoastWrapper> }

      </React.Fragment> : <React.Fragment>

        <CoastWrapper>

          <span 
            style={{ 
              display: 'block', 
              fontSize: '20px', 
              fontWeight: 'bold',
              marginRight: '30px',
              width: '90%',
              marginTop: '12px'
            }}
          >
            
            100 <i style={{ fontStyle: 'normal', fontSize: '16px' }}> Рублей</i>
            
          </span>
          <span 
            style={{ 
              display: 'block', 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: 'grey',
              width: '90%'
            }}
          >
            
            100 <i style={{ fontStyle: 'normal', fontSize: '16px' }}>Рублей</i>
            
          </span>

        </CoastWrapper>

      </React.Fragment> }

      <CoastWrapper style={{ marginTop: '20px', justifyContent: 'space-between' }}>

        { itemID.indexOf('oil') < 0 ? <React.Fragment>

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
          />}

        </React.Fragment> : <React.Fragment>

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
              paddingLeft: '20px',
              color: 'transparent'
            }}
          />}

        </React.Fragment> }

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