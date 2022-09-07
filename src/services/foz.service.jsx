/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import styled from 'styled-components'
import Input from '../bricks/comps/input/Input.jsx'
import Button from '../bricks/comps/button/Button.jsx'
import closeImg from '../img/closePicture.png'
import { useDispatch } from 'react-redux'
import { setModalShow } from '../appStore/reducers/mainReducer'

const FOS = {

  Wrapper: styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 470px;
    height: 570px;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 30px;
    padding-top: 26px;
  `

}

const Fos = () => {

  const dispatch = useDispatch()

  function closeModal() {

    document.documentElement.style.overflowY = 'scroll'
    dispatch(setModalShow(false)) 

  }

  return (
    <React.Fragment>
      <FOS.Wrapper>

        <img
          onClick={closeModal}
          alt={""}
          src={closeImg}
          style={{
            display: 'block',
            position: 'absolute',
            width: '30px',
            left: '100%',
            marginLeft: '-46px',
            top: '0%',
            marginTop: '16px'
          }}
        />

        <h3 
          style={{
            lineHeight: '30px',
            fontSize: '26px',
            fontWeight: '700',
            width: '70%',
            color: '#565656'
          }}>
          
          Оставьте заявку, и специалист Вам перезвонит</h3>

        <Input
          title={"Мобильный телефон для связи*"}
          params={{ width: 410 }}
          type={"text"}
          placeholder={"+7950.."}
          inputCss={{ 
            border: 'none',
            borderRight: '6px solid #F7F7F7'
          }}
          css={{ marginTop: '20px', color: '#565656' }}
          dispatchType={"address"}
        />
        <Input
          title={"Марка транспортного средства"}
          params={{ width: 410 }}
          type={"text"}
          placeholder={"Lada Vesta"}
          inputCss={{ 
            border: 'none',
            borderRight: '6px solid #F7F7F7',
            paddingBottom: '1px'
          }}
          css={{ marginTop: '22px', color: '#565656' }}
          dispatchType={"address"}
        />
        <Input
          title={"Ваши имя и фамилия"}
          params={{ width: 410 }}
          type={"text"}
          placeholder={"Введите ваше имя"}
          inputCss={{ 
            border: 'none',
            borderRight: '6px solid #F7F7F7',
            paddingBottom: '1px'
          }}
          css={{ marginTop: '22px', color: '#565656' }}
          dispatchType={"address"}
        />

        <span 
          style={{ 
            lineHeight: '25px', 
            fontSize: '15px',
            display: 'block',
            marginTop: '23px',
            fontWeight: 'bold',
            color: '#2E2E2E'
          }}
        >
          
          <i style={{ fontStyle: 'normal', fontSize: '18px', color: '#D62E2B' }}>*</i> Будьте внимательны, поля ввода, отмеченные звездочкой, обязательны для заполнения</span>

        <Button  
          params={{
            width: 190,
            height: 36,
            background: '#2E2E2E'
          }}
          inner={"Заказать звонок"}
          css={{
            fontSize: '13px',
            boxShadow: 'none',
            color: 'white',
            marginRight: '24px',
            marginTop: '23px',
          }}
        />

      </FOS.Wrapper>
    </React.Fragment>
  )

}

export default Fos