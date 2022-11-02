/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import css from '../../../styles/mobile/mobileStyles'
import catalog from '../../../img/menuMenu.svg'
import tools from '../../../img/menuTools.svg'
import cabinet from '../../../img/cabinet.svg'
import home from '../../../img/home.svg'
import shops from '../../../img/shops.svg'
import mobileShop from '../../../img/mobileShop.svg'

import { useSelector, useDispatch } from 'react-redux'
import { setOrdersCount, setMobile, setInfoPageTitle } from '../../../appStore/reducers/mainReducer'
import { changeActive } from '../../../appStore/reducers/mobileMenuReducer'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'

const { Wrapper, MenuItem } = css.MenuStyles

const MobileMenu = (props) => {

  const { screen } = props
  const orders = useSelector(state => state.main.ordersCount)
  const active = useSelector(state => state.mobileMenu.active)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Wrapper style={{ marginLeft: '20px', zIndex: 40 }}>

        <Link 
          style={ active === 0 
            ? { textDecoration: 'none', color: 'black', backgroundColor: '#F7F7F7', borderRadius: '6px' }
            : { textDecoration: 'none', color: 'black' }} 
          to="/glavnaya"
          onClick={() => dispatch(changeActive(0))}
        >
          <MenuItem width={screen}>
            <img 
              src={home} 
              alt={""}
              style={{
                display: 'block',
                position: 'absolute',
                width: '23px',
                marginBottom: '16px'
              }}
            />
            <span 
              style={{ 
                fontSize: '11px', 
                textAlign: 'center',
                width: '100%',
                display: 'block',
              }}
            >Главная</span>
          </MenuItem>
        </Link>
        <Link 
          style={ active === 1 
            ? { textDecoration: 'none', color: 'black', backgroundColor: '#F7F7F7', borderRadius: '6px' }
            : { textDecoration: 'none', color: 'black' }} 
          to="/magaziny"
          onClick={() => dispatch(changeActive(1))}
        >
          <MenuItem width={screen}>
            <img 
              src={shops} 
              alt={""}
              style={{
                display: 'block',
                position: 'absolute',
                width: '19px',
                marginBottom: '16px'
              }}
            />
            <span 
              style={{ 
                fontSize: '11px', 
                textAlign: 'center',
                width: '100%',
                display: 'block'
              }}
            >Магазины</span>
          </MenuItem>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/catalog">
          <MenuItem width={screen}>
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'absolute',
                width: '48px',
                height: '48px',
                backgroundColor: '#565656',
                borderRadius: '4px',
                marginBottom: '20px' 
              }}
            >
              <img 
                src={catalog} 
                alt={""}
                style={{
                  display: 'block',
                  width: '22px',
                }}
              />
            </span>
            <span 
              style={{ 
                fontSize: '11px', 
                textAlign: 'center',
                width: '100%',
                display: 'block'
              }}
            >Каталог</span>
          </MenuItem>
        </Link>
        <MenuItem width={screen}>
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              position: 'absolute',
              width: '48px',
              height: '48px',
              backgroundColor: '#D62E2B',
              borderRadius: '4px',
              marginBottom: '20px' 
            }}
          >
            <img 
              src={tools} 
              alt={""}
              style={{
                display: 'block',
                width: '22px',
              }}
            />
          </span>
          <span 
            style={{ 
              fontSize: '11px', 
              textAlign: 'center',
              width: '100%',
              display: 'block' 
            }}
          >Сервис</span>
        </MenuItem>
        <MenuItem width={screen}>
          <img 
            src={cabinet} 
            alt={""}
            style={{
              display: 'block',
              position: 'absolute',
              width: '22px',
              marginBottom: '16px'
            }}
          />
          <span 
            style={{ 
              fontSize: '11px', 
              textAlign: 'center',
              width: '100%',
              display: 'block' 
            }}
          >Войти</span>
        </MenuItem>
        <Link 
          style={ active === 3 
            ? { textDecoration: 'none', color: 'black', backgroundColor: '#F7F7F7', borderRadius: '6px' }
            : { textDecoration: 'none', color: 'black' }} 
          to="/order"
          onClick={() => dispatch(changeActive(3))}
        >
          <MenuItem width={screen}>
            <img 
              src={mobileShop} 
              alt={""}
              style={{
                display: 'block',
                position: 'absolute',
                width: '22px',
                marginBottom: '16px'
              }}
            />
            <span 
              style={{ 
                fontSize: '11px', 
                textAlign: 'center',
                width: '100%',
                display: 'block' 
              }}
            >Корзина</span>
            <span
              style={{
                display: 'block',
                position: 'absolute',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: '#2BC631',
                top: '0px',
                left: '100%',
                marginLeft: '-32px',
                marginTop: '4px',
                fontSize: '10px',
                textAlign: 'center',
                lineHeight: '18px',
                color: 'white'
              }}
            >{ orders }</span>
          </MenuItem>
        </Link>

      </Wrapper>
    </React.Fragment>
  )

}

export default MobileMenu