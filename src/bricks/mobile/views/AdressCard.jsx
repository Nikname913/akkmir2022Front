/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../../styles/mobile/mobileStyles'
import Button from '../../comps/button/Button.jsx'

const { Wrapper, ContentLine } = css.AdressCard

const AdressCard = () => {

  return (
    <React.Fragment>
      <Wrapper>

        <ContentLine>
          
          <h5 style={{ fontSize: '14px', paddingTop: '18px', paddingBottom: '18px' }}>ул. Раевского 9/1</h5>
          <Button  
            params={{
              width: 110,
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
              marginLeft: '-122px',
              top: '50%',
              marginTop: '-15px'
            }}
          />

        </ContentLine>
        { false && <ContentLine>

          <span style={{ color: 'grey', fontSize: '12px' }}>магазин + сервис</span>
        
        </ContentLine> }
        <ContentLine>

          <span style={{ fontSize: '13px', lineHeight: '22px' }}>
            
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>Телефон:</i> 8(343)261-61-62<br/>8(965)544-29-94 (СТО)
            
          </span>
          <Button  
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
          />

        </ContentLine>
        <ContentLine>
          <span style={{ fontSize: '13px', lineHeight: '22px' }}>
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>Часы работы:</i> с 09:00 до 19:00<br/>
            <i style={{ fontStyle: 'normal', fontWeight: 'bold' }}>СТО:</i> с 09:00 до 21:00
          </span>
        </ContentLine>
        <ContentLine>

          <span style={{ fontSize: '13px', color: 'grey', lineHeight: '22px', display: 'block' }}>Открыто</span>
          <span
            style={{
              display: 'block',
              position: 'relative',
              width: '12px',
              height: '12px',
              backgroundColor: '#2BC631',
              borderRadius: '50%',
              marginLeft: '6px'
            }}  
          >
          </span>
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