/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
import css from '../../../styles/mobile/mobileStyles'
import catalog from '../../../img/menuMenu.png'
import tools from '../../../img/menuTools.png'
import cabinet from '../../../img/cabinet.png'

const { Wrapper, MenuItem } = css.MenuStyles

const MobileMenu = (props) => {

  const { screen } = props

  return (
    <React.Fragment>
      <Wrapper style={{ marginLeft: '20px' }}>

        <Link style={{ textDecoration: 'none', color: 'black' }} to="/home"><MenuItem width={screen}>
          <img 
            src={cabinet} 
            alt={""}
            style={{
              display: 'block',
              position: 'absolute',
              width: '20px',
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
          >
            
            Главная</span>
        </MenuItem></Link>
        <MenuItem width={screen}>
          <img 
            src={cabinet} 
            alt={""}
            style={{
              display: 'block',
              position: 'absolute',
              width: '20px',
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
          >
            
            Магазины</span>
        </MenuItem>
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
          >
            
            Каталог</span>
        </MenuItem>
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
          >
            
            Сервис</span>
        </MenuItem>
        <MenuItem width={screen}>
          <img 
            src={cabinet} 
            alt={""}
            style={{
              display: 'block',
              position: 'absolute',
              width: '20px',
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
          >
            
            Войти</span>
        </MenuItem>
        <MenuItem width={screen}>
          <img 
            src={cabinet} 
            alt={""}
            style={{
              display: 'block',
              position: 'absolute',
              width: '20px',
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
          >
            
            Корзина</span>
        </MenuItem>

      </Wrapper>
    </React.Fragment>
  )

}

export default MobileMenu