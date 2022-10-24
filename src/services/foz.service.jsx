/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Input from '../bricks/comps/input/Input.jsx'
import Button from '../bricks/comps/button/Button.jsx'
import RequestComponent from './request.service'
import closeImg from '../img/closePicture.png'
import error from '../img/error.png'
import { useDispatch, useSelector } from 'react-redux'
import { setModalShow } from '../appStore/reducers/mainReducer'
import Rds from '../appStore/reducers/storageReducers/mainReducer'
import { setNumber,
  setModel,
  setName,
  setEmail,
  setPaytype,
  setDiliverytype,
  setAddress } from '../appStore/reducers/makeOrderReducer'
  import { setInfoPageTitle, setOrdersCount } from '../appStore/reducers/mainReducer'
import { useEffect } from 'react'

const FOS = {

  Wrapper: styled.div`
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 470px;
    height: auto;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 30px;
    padding-top: 26px;
  `

}

const Fos = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const number = useSelector(state => state.newOrder.number)
  const model = useSelector(state => state.newOrder.model)
  const name = useSelector(state => state.newOrder.name)

  const [ sendOrderToTelegram, setSendOrderToTelegram ] = useState(false)
  const [ orderDataTelegram, setOrderDataTelegram ] = useState('test order')

  function dataValidate(param) {

    let answer = ''
    param ? answer = param : answer = ''
    return answer

  }

  function orderController() {

    if ( number ) {

      let userName
      let userMail
      let userPaytype
      let userDiliverytype
      let userAddress
      let orderSumm
      let orderBody

      let message = `Заявка с сайта, покупка. Номер клиента: ${number}. Модель транспортного средства: ${model}. `
      name ? userName = `Имя пользователя: ${name}. ` : null

      message = message                + 
        dataValidate(userName)         + 
        dataValidate(userMail)         + 
        dataValidate(userPaytype)      + 
        dataValidate(userDiliverytype) + 
        dataValidate(userAddress)      +
        dataValidate(orderSumm)        +
        dataValidate(orderBody)      

      dispatch(setNumber(null))
      dispatch(setModel(null))
      dispatch(setName(null))
      dispatch(setEmail(null))
      dispatch(setPaytype(null))
      dispatch(setDiliverytype(null))
      dispatch(setAddress(null))

      setOrderDataTelegram(message)
      setSendOrderToTelegram(true)

      console.log(message)

    }
  }

  function closeModal() {

    document.documentElement.style.overflowY = 'scroll'
    dispatch(setModalShow(false)) 

  }

  useEffect(() => {

    if ( sendOrderToTelegram === true ) {

      document.documentElement.style.overflowY = 'scroll'

      Rds.removeAllOrders()
      dispatch(setInfoPageTitle('Заказ успешно оформлен'))
      dispatch(setModalShow(false))
      dispatch(setOrdersCount(0))
      navigate('../order-success')

    }

  },[ sendOrderToTelegram ])

  return (
    <React.Fragment>

      { sendOrderToTelegram && <RequestComponent
        make={false}
        callbackAction={'SEND_ORDER_TO_TELEGRAM'}
        requestData={{
          type: 'GET',
          urlstring: `http://tebot.ck23435.tmweb.ru/akkmirbott.php?actionType=SEND_ORDER_TO_AKKMIR&getData=${orderDataTelegram}`,
        }}
      /> }

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
          placeholder={"+7900.."}
          inputCss={{ 
            border: 'none',
            borderRight: '6px solid #F7F7F7'
          }}
          css={{ marginTop: '20px', color: '#565656' }}
          dispatchType={"number"}
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
          dispatchType={"model"}
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
          dispatchType={"name"}
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
          action={orderController}
        />

        { false === true && <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            width: '100%', 
            marginTop: '20px'
          }}
        >

          <img
            alt={""}
            src={error}
            style={{
              display: 'block',
              position: 'relative',
              width: '32px'
            }}
          />
          <span 
            style={{ 
              display: 'block', 
              position: 'relative',
              marginLeft: '20px',
              paddingRight: '30px',
              lineHeight: '20px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'grey' 
            }}
          >
          
            На момент начала разработки формы ее дизайна не было в общем списке макетов в Figma, поэтому внешний вид на 06.10.22 может отличаться - временно</span>

        </div> }

      </FOS.Wrapper>
    </React.Fragment>
  )

}

export default Fos