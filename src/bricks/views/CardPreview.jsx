/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import css from '../../styles/card-preview'
import Button from '../comps/button/Button.jsx'
import imageItem from '../../img/category.png'
import likeImg from '../../img/likeWhite.svg'
import sravnenieImg from '../../img/sravnenieWhite.svg'
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
    popular = false,
    newProduct = false,
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
      style={ coast1 === '--' ? { filter: 'grayscale(0)', marginBottom: '13px' } : { marginBottom: '13px' }} 
    >

      { false ? <img src={image} alt={""}/> : 
        
        <FakeImage styles={params}>

          { itemID.indexOf('oil') < 0 ? <img 
            style={ coast1 !== '--' 
            ? { display: 'block', width: '100%', borderRadius: '8px' }
            : { display: 'block', width: '100%', filter: 'grayscale(0)', borderRadius: '8px' }} 
            src={imageItem} 
            alt={""}
          /> : <img 
            style={{ display: 'block', width: '100%', filter: 'grayscale(0)', borderRadius: '8px' }} 
            src={imageItem} 
            alt={""}
          /> }

          { itemID.indexOf('oil') < 0 && <React.Fragment>

            { popular && <Labels>

              <Button  
                params={{
                  width: 122,
                  height: 32,
                  background: 'rgb(43, 198, 49)',
                }}
                inner={"Наш бестселлер"}
                css={{
                  fontSize: '12px',
                  color: 'white',
                  marginBottom: '8px',
                  borderRadius: '15px',
                  boxShadow: 'none'
                }}
              />

            </Labels> }
            { newProduct && <Labels>

              <Button  
                params={{
                  width: 122,
                  height: 32,
                  background: 'rgb(214, 46, 43)',
                }}
                inner={"Новинка!"}
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
          marginTop: '14px', 
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
          marginTop: '14px', 
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
                    lineHeight: '22px',
                    display: 'block',
                    width: '100%',
                    height: '22px',
                    overflow: 'hidden'
                  }}>{ item.split(' : ')[0] } <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>{ item.split(' : ')[1] }</i></p> }
            
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
            width: 160,
            height: 26,
            background: '#F4F4F4'
          }}
          inner={"есть в 10 магазинах"}
          css={{
            fontSize: '12px',
            color: '#858585',
            marginTop: '10px',
            marginBottom: '20px',
            boxShadow: 'none',
            borderRadius: '15px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        /> }

      { itemID.indexOf('oil') < 0 ? <React.Fragment>

        { coast1 !== '--' ? <CoastWrapper>

          <span 
            style={{ 
              display: 'block', 
              fontSize: '19px', 
              fontWeight: 'bold',
              marginRight: '0px',
              width: '48%'
            }}
          >
            
            { coast1 && coast1 } <i style={{ fontStyle: 'normal', fontSize: '18px' }}>₽</i>
            
          </span>
          <span 
            style={{ 
              display: 'block', 
              fontSize: '19px', 
              fontWeight: 'bold', 
              color: 'grey',
              width: '48%',
              textAlign: 'right',
            }}
          >
            
            { coast2 && coast2 } <i style={{ fontStyle: 'normal', fontSize: '18px' }}>₽</i>
            
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

      <CoastWrapper style={{ marginTop: '20px', justifyContent: 'flex-start' }}>

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
              paddingRight: '14px',
              paddingLeft: '14px',
              boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px'
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
              paddingRight: '14px',
              paddingLeft: '14px',
              color: 'transparent',
              boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px'
            }}
          />}

        </React.Fragment> }

        <Button  
          params={{
            width: 34,
            height: 34,
            background: '#C4C4C4'
          }}
          inner={""}
          css={{
            fontSize: '13px',
            boxShadow: 'none',
            color: '#858585',
            borderRadius: '8px',
            marginLeft: '6px',
            boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px'
          }}
          children={
            <React.Fragment>
              <img 
                alt={""}
                src={sravnenieImg}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '22px',
                  height: '18px',
                  left: 0,
                  marginLeft: '6px',
                  top: '50%',
                  marginTop: '-10px'
                }}
              />
            </React.Fragment>
          }
        />
        <Button  
          params={{
            width: 34,
            height: 34,
            background: '#C4C4C4'
          }}
          inner={""}
          css={{
            fontSize: '13px',
            boxShadow: 'none',
            color: '#858585',
            borderRadius: '8px',
            marginLeft: '6px',
            boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px'
          }}
          children={
            <React.Fragment>
              <img 
                alt={""}
                src={likeImg}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '19px',
                  height: '17px',
                  left: 0,
                  marginLeft: '7px',
                  top: '50%',
                  marginTop: '-8px'
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