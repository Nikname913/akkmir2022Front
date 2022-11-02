/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../../styles/mobile/mobileStyles'
import Button from '../../comps/button/Button.jsx'
import servicePhoto from '../../../img/servicePhoto.png'

const { Wrapper, ContentLine } = css.AdressCard

const AdressCard = (props) => {

  const { marbottom = 0, shopID = '', regionID = '', name = '', isService = false, } = props

  return (
    <React.Fragment>
      <Wrapper marbo={marbottom}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a 
        href="tel: (343) 261-61-62"
        style={{
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0%',
          left: '0%',
          zIndex: 10
        }}
      ></a>

        <ContentLine>
          
          <h5 style={{ fontSize: '14px', paddingTop: '18px', paddingBottom: '18px' }}>{ name }</h5>
          <Button  
            params={{
              width: 130,
              height: 30,
              background: 'grey'
            }}
            inner={"На карте"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              position: 'absolute',
              left: '100%',
              marginLeft: '-142px',
              top: '50%',
              marginTop: '-15px'
            }}
          />

        </ContentLine>
        { true && <ContentLine style={{ marginTop: '-13px' }}>

          { isService ? <span style={{ color: 'grey', fontSize: '12px' }}>Магазин и сервис</span> 
            : <span style={{ color: 'grey', fontSize: '12px' }}>Магазин</span> }
        
        </ContentLine> }
        <ContentLine style={{ marginTop: '10px' }}>

          <span style={{ fontSize: '13px', lineHeight: '22px' }}>
            
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>Номер телефона:</i> 8 (343) 261-61-62<br/>8 (965) 544-29-94 для СТО
            
          </span>
          <img
            src={servicePhoto}
            alt={""}
            style={{
              display: 'block',
              position: 'absolute',
              width: '86px',
              height: '86px',
              left: '100%',
              top: '0%',
              marginLeft: '-98px'
            }}
          />

          { false && <Button  
            params={{
              width: 30,
              height: 30,
              background: '#2BC631'
            }}
            inner={""}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              position: 'absolute',
              left: '100%',
              marginLeft: '-42px',
              top: '50%',
              marginTop: '-15px'
            }}
          /> }

        </ContentLine>
        <ContentLine>
          <span style={{ fontSize: '13px', lineHeight: '22px' }}>
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>Магазин работает: </i>09:00 до 19:00<br/>
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>СТО работает: </i>09:00 до 21:00
          </span>
        </ContentLine>
        <ContentLine style={{ marginTop: '8px' }}>

          <span
            style={{
              display: 'block',
              position: 'relative',
              width: '12px',
              height: '12px',
              backgroundColor: '#2BC631',
              borderRadius: '50%',
              marginRight: '6px'
            }}  
          ></span>
          <span style={{ fontSize: '13px', color: 'grey', lineHeight: '22px', display: 'block' }}>Сейчас открыто</span>
          <span 
            style={{ 
              fontSize: '13px', 
              lineHeight: '22px', 
              display: 'block', 
              marginLeft: '10px' 
            }}
          >
            
            Закроется через 3 часа</span>

        </ContentLine>

      </Wrapper>
    </React.Fragment>

  )

}

export default AdressCard