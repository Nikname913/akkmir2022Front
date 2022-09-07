import React from 'react'
import { Link } from 'react-router-dom'
import css from '../../styles/make-order'

const MakeOrderWrapper = css.OrderWrapper

const MakeOrderNonProducts = () => {

  return (
    <React.Fragment>
      <MakeOrderWrapper
        style={{ 
          overflow: 'hidden', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <span
          style={{
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '12px',
            backgroundColor: '#2BC631',
            top: '0px',
            left: '0px'
          }}
        ></span>
        <span
          style={{
            fontSize: '140px',
            color: '#D62E2B',
            fontWeight: 'bold',
            marginTop: '50px'
          }}
        >
        
          ...</span>
        <h3 style={{ fontSize: '22px', marginTop: '24px' }}>Ой!</h3>
        <span
          style={{
            fontSize: '15px',
            marginTop: '14px'
          }}
        >
        
          Корзина пуста</span>
        <Link style={{ width: '100%', textDecoration: 'none', color: 'black' }} to="/glavnaya">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              position: 'relative',
              width: '190px',
              height: 'auto',
              minHeight: '40px',
              boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)',
              borderRadius: '12px',
              background: 'linear-gradient(90deg, #2BC631 0%, #34E13B 66.07%, #2BC631 100%)',
              marginTop: '34px',
              cursor: 'pointer',
              marginBottom: '100px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <span
              style={{
                color: 'white',
                fontSize: '14px',
                textAlign: 'center',
                marginBottom: '2px'
              }}
            >
            
              За покупками</span>
          </div>
        </Link>

      </MakeOrderWrapper>
    </React.Fragment>
  )

}

export default MakeOrderNonProducts