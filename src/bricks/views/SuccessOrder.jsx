/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/make-order'
import success from '../../img/success.png'
import present from '../../img/present.png'

const MakeOrderWrapper = css.OrderWrapper

const SucessOrder = () => {

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
        />
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: '#2BC631',
            margin: '0 auto',
            marginTop: '60px'
          }}
        >

          <img
            style={{
              display: 'block',
              width: '34px',
            }}
            src={success}
            alt={""}
          />

        </span>
        <h3 style={{ fontSize: '22px', marginTop: '24px' }}>Спасибо за заказ!</h3>
        <span
          style={{
            fontSize: '15px',
            marginTop: '14px'
          }}
        >
        
          Мы свяжемся с вами через мгновение, чтобы обсудить детали</span>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
            width: '600px',
            height: 'auto',
            minHeight: '100px',
            boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #2BC631 0%, #34E13B 66.07%, #2BC631 100%)',
            marginTop: '44px',
            paddingLeft: '70px',
            paddingRight: '70px'
          }}
        >

          <span
            style={{
              color: 'white',
              fontSize: '20px',
              textAlign: 'center',
              lineHeight: '28px'
            }}
           >
           
            Дарим бесплатную диагностику ходовой в нашем сервисе!</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
            width: '220px',
            height: 'auto',
            minHeight: '40px',
            boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #2BC631 0%, #34E13B 66.07%, #2BC631 100%)',
            marginTop: '34px',
            cursor: 'pointer',
            marginBottom: '80px'
          }}
        >

          <img
            style={{
              display: 'block',
              position: 'absolute',
              left: '0',
              width: '19px',
              marginLeft: '12px',
              marginBottom: '1px'
            }}
            src={present}
            alt={""}
          />
          <span
            style={{
              color: 'white',
              fontSize: '14px',
              textAlign: 'center',
              marginBottom: '2px'
            }}
           >
           
            Забрать подарок</span>
        </div>

      </MakeOrderWrapper>
    </React.Fragment>
  )

}

export default SucessOrder