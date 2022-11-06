/* eslint-disable no-unused-vars */
import React from 'react'
import css from '../../styles/mobile/mobileStyles'
import vkon from '../../img/vkon.png'
import Button from '../comps/button/Button.jsx'

const { Wrapper, ContentColumn } = css.FooterStyles

const MobileFooter = () => {

  return (
    <React.Fragment>
      <Wrapper
        style={{ 
          marginBottom: '20px', 
          marginLeft: '20px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px'  
        }}
      >

        <ContentColumn>

          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Оплата и доставка</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Корпоративным клиентам</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Сертификаты</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Прием аккумуляторов</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Полезно знать</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Новости</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Есть замечания или предложения</span>

          <Button  
            params={{
              width: 150,
              height: 34,
              background: 'white'
            }}
            inner={"Написать директору"}
            css={{
              fontSize: '12px',
              borderRadius: '12px',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          />

        </ContentColumn>
        <ContentColumn>

          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Бонусная программа</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Вакансии</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Договор публичной аферты</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Акции</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Услуги сервисных центров</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            261-62-62</span>
          <span 
            style={{ 
              fontSize: '12px', 
              color: 'white', 
              display: 'block', 
              position: 'relative',
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              lineHeight: '18px'
            }}
          >
            
            Мы в соцсетях
            <img 
              style={{ 
                width: '24px', 
                height: '24px',
                display: 'block',
                position: 'absolute',
                top: '50%',
                left: '100%',
                marginTop: '-12px',
                marginLeft: '-88px' 
              }} 
              src={vkon} 
              alt={""}
            />
            <img 
              style={{ 
                width: '24px', 
                height: '24px',
                display: 'block',
                position: 'absolute',
                top: '50%',
                left: '100%',
                marginTop: '-12px',
                marginLeft: '-56px' 
              }} 
              src={vkon} 
              alt={""}
            />
            
          </span>

        </ContentColumn>

      </Wrapper>
    </React.Fragment>
  )

}

export default MobileFooter