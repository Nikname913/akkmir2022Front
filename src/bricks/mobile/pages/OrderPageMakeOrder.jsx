/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
// ------------------------------
// ------------------------------

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../comps/button/Button.jsx'
import Input from '../../comps/input/Input.jsx'
import RequestComponent from '../../../services/request.service'
import css from '../../../styles/mobile/mobileStyles'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'

import { useSelector, useDispatch } from 'react-redux'
import { setMessageShow, 
  setMessageContent, 
  setInfoPageTitle,
  setOrdersCount } from '../../../appStore/reducers/mainReducer'
import { setNumber,
  setModel,
  setName,
  setEmail,
  setPaytype,
  setDiliverytype,
  setAddress } from '../../../appStore/reducers/makeOrderReducer'
import { useEffect } from 'react'

const { Wrapper, 
  ContentLine,
  MakeOrderPage: {
    LoginForm,
    LoginFormContentLine
  }} = css.ScreenStyles

const OrderPageMakeOrder = (props) => {

  const { screen = 420 } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orderedProducts = useSelector(state => state.catalog.orderProducts)

  const number = useSelector(state => state.newOrder.number)
  const name = useSelector(state => state.newOrder.name)
  const paytype = useSelector(state => state.newOrder.paytype)
  const diliverytype = useSelector(state => state.newOrder.diliverytype)
  const address = useSelector(state => state.newOrder.address)

  const [ summaryCoast, setSummaryCoast ] = useState(0)
  const [ configOrdersData, setConfigOrdersData ] = useState(null)
  const [ sendOrderToTelegram, setSendOrderToTelegram ] = useState(false)
  const [ orderDataTelegram, setOrderDataTelegram ] = useState('test order')
  const [ getSale, setGetSale ] = useState(false)
  const [ diliveryType, setDiliveryType ] = useState(false)
  const [ payTypeActive, setPayTypeActive ] = useState(0)
  const [ discount, setDiscount ] = useState(0)
  const [ payType, ] = useState([
    'Картой на сайте',
    'При получении',
    'Оплата по QR'
  ])

  let orderedData 
  let totalSumm = 0
  let productNames = ''

  if ( orderedProducts.indexOf('**') !== -1 ) orderedData = orderedProducts.split('**')
  else orderedData = []

  if ( orderedProducts.indexOf('**') !== -1 ) { orderedProducts.split('**').forEach(product => {

    if ( Number(product.split('::')[3]) * Number(product.split('::')[2]) ) {

      totalSumm = totalSumm + Number(product.split('::')[3]) * Number(product.split('::')[2])
      productNames = productNames + product.split('::')[1] + ' - ' + product.split('::')[2] + ' шт. '

    }

  })}

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

      let message = `Заявка с сайта, покупка. Номер клиента: ${number}. `
      name ? userName = `Имя пользователя: ${name}. ` : null
      paytype ? userPaytype = `Выбранный вариант оплаты: ${paytype}. ` : null
      diliverytype ? userDiliverytype = `Выбранный вариант получения: ${diliverytype}. ` : null
      address ? userAddress = `Адрес доставки: ${address}. ` : null
      summaryCoast ? orderSumm = `Сумма заказа: ${summaryCoast} руб. ` : null
      configOrdersData ? orderBody = `Данные о заказе: ${configOrdersData}` : null

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

    } else {

      dispatch(setMessageContent({
        title: 'Ошибка заполнения формы',
        message: 'Пожалуйста, заполните обязательные поля и попробуйте оформить заказ повторно',
        type: 'error',
        isMobile: true
      }))
      dispatch(setMessageShow(true))

    }

  }

  useEffect(() => {
    
    setConfigOrdersData(productNames)

    if ( sendOrderToTelegram === true ) {

      Rds.removeAllOrders()
      dispatch(setOrdersCount(0))
      navigate('../glavnaya')

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

      <Wrapper 
        style={{ 
          marginLeft: '20px', 
          borderRadius: '0px',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px' 
        }}
      >
        <ContentLine width={screen} style={{ marginTop: '12px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656' }}>Оформление заказа</h2>
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>
          
          <Button  
            params={{
              width: 232,
              height: 40,
              background: 'white'
            }}
            inner={"Физическое лицо"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
              marginRight: '12px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.11)'
            }}
          />
          { false ? <Button  
            params={{
              width: 232,
              height: 40,
              background: 'transparent'
            }}
            inner={"Юридическое лицо"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
            }}
          /> : <span
            style={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
              marginRight: '12px',
              width: '232px',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            
            Юридическое лицо</span> }
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <LoginForm>
            <LoginFormContentLine>
              <h5 style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                color: '#565656',
                fontSize: '16px',
                marginBottom: '8px'
              }}>Есть учетная запись?</h5>
            </LoginFormContentLine>
            <LoginFormContentLine>
              <p style={{
                display: 'block',
                position: 'relative',
                width: '66%',
                lineHeight: '20px',
                color: '#565656',
                fontSize: '14px'
              }}>Вы уже регистрировались на сайте? Войдите, и вам не придется заполнять форму снова, а заказ сохранится в личном кабинете</p>
            </LoginFormContentLine>
            <LoginFormContentLine 
              style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}
            >

              <Input
                params={{ width: 300 }}
                type={"text"}
                placeholder={"+7900.."}
                inputCss={{ 
                  border: 'none',
                  borderRight: number
                    ? '6px solid rgb(43, 198, 49)' 
                    : '6px solid rgb(214, 46, 43)'
                }}
                title={"Мобильный телефон*"}
                css={{ marginTop: '16px' }}
                dispatchType={"number"}
                maxlength={12}
              />
              <Input
                params={{ width: 300 }}
                type={"text"}
                placeholder={"Введите ваше имя"}
                inputCss={{ 
                  border: 'none',
                  borderRight: name
                    ? '6px solid rgb(43, 198, 49)' 
                    : '6px solid rgb(214, 46, 43)'
                }}
                title={"Имя пользователя*"}
                css={{ marginTop: '16px' }}
                dispatchType={"name"}
              />

              <p style={{
                display: 'block',
                position: 'relative',
                width: '66%',
                lineHeight: '20px',
                color: '#565656',
                fontSize: '14px',
                marginTop: '14px',
                fontWeight: 'bold',
                opacity: '0.9',
              }}>Поля, отмеченные звездочкой, обязательны для заполнения</p>

            </LoginFormContentLine>
          </LoginForm>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '4px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656', fontSize: '18px' }}>Способы получения</h2>
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>
          
          { diliveryType === true && <React.Fragment><Button  
            params={{
              width: 180,
              height: 40,
              background: 'white'
            }}
            inner={"Доставка"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
              marginRight: '12px',
              boxShadow: 'rgb(0 0 0 / 11%) 0px 2px 8px'
            }}
            action={() => setDiliveryType(true)}
          /><span
            onClick={() => setDiliveryType(false)}
            style={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
              marginRight: '12px',
              width: '180px',
              height: '40px',
              lineHeight: '38px',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0px 0px 1.5px transparent',
            }}
          >Самовывоз</span></React.Fragment> }
          { diliveryType === false && <React.Fragment><span
            onClick={() => setDiliveryType(true)}
            style={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
              marginRight: '12px',
              width: '180px',
              height: '40px',
              lineHeight: '38px',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: '0px 0px 1.5px transparent'
            }}
          >Доставка</span><Button  
            params={{
              width: 180,
              height: 40,
              background: 'white'
            }}
            inner={"Самовывоз"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: '#565656',
              fontWeight: 'bold',
              boxShadow: 'rgb(0 0 0 / 11%) 0px 2px 8px'
            }}
            action={() => setDiliveryType(false)}
            children={
              <span
                style={{
                  display: 'block',
                  position: 'absolute',
                  backgroundColor: '#2BC631',
                  color: 'white',
                  fontSize: '11px',
                  textAlign: 'center',
                  borderRadius: '20px',
                  height: '20px',
                  lineHeight: '18px',
                  padding: '0 14px',
                  top: '0',
                  left: '100%',
                  marginTop: '-10px',
                  marginLeft: '-52px'
                }}
              >удобно</span>
            }
          /></React.Fragment> }
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          { diliveryType ? <LoginForm>
              <Input
                params={{}}
                type={"text"}
                placeholder={"Введите адрес доставки"}
                inputCss={{ 
                  border: 'none',
                  borderRight: false 
                    ? '6px solid rgb(43, 198, 49)' 
                    : '6px solid rgb(214, 46, 43)',
                  paddingBottom: '2px'
                }}
                title={""}
                css={{}}
                dispatchType={"none"}
              />
            </LoginForm> : <LoginForm>
            <Input
              params={{}}
              type={"text"}
              placeholder={"Выберите магазин для самовывоза"}
              inputCss={{ 
                border: 'none',
                borderRight: false 
                  ? '6px solid rgb(43, 198, 49)' 
                  : '6px solid rgb(214, 46, 43)',
                paddingBottom: '2px'
              }}
              title={""}
              css={{}}
              dispatchType={"none"}
            />
          </LoginForm> }

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656', fontSize: '18px' }}>Способы оплаты</h2>
        
        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '6px', 
            marginBottom: '2px',
            flexWrap: 'wrap' 
          }}
        >

          { payType.map((item, index) => {

            const styles = {
              display: 'block',
              position: 'relative',
              fontSize: '14px',
              textAlign: 'center',
              borderRadius: '10px',
              backgroundColor: payTypeActive !== index ? 'white' : '#565656',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.11)',
              padding: '11px 34px 13px',
              marginRight: '12px',
              marginBottom: '12px',
              cursor: 'pointer',
              color: payTypeActive === index ? 'white' : '#565656',
            }

            return <span key={index} style={styles} onClick={() => setPayTypeActive(index)}>
              { item }
              { index === 2 && 
                <span
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '120px',
                    backgroundColor: '#2BC631',
                    color: 'white',
                    fontSize: '11px',
                    textAlign: 'center',
                    borderRadius: '20px',
                    height: '20px',
                    lineHeight: '18px',
                    padding: '0 14px',
                    top: '100%',
                    left: '100%',
                    marginTop: '-10px',
                    marginLeft: '-72px'
                  }}
                >больше бонусов</span> }
            </span>

          })}

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656', fontSize: '15px' }}>Скидка за сдачу аккумулятора</h2>
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '8px', marginBottom: '13px' }}>

          <LoginForm onClick={() => setDiscount(prev => prev === 0 ? 5 : 0)}>
            <Input
              params={{}}
              type={"text"}
              placeholder={
                discount === 5
                  ? 'Я хочу сдать свой аккумулятор'
                  : 'Не буду сдавать аккумулятор'
              }
              inputCss={{ 
                border: 'none',
                borderRight: discount !== 0
                  ? '6px solid rgb(43, 198, 49)' 
                  : '6px solid rgb(214, 46, 43)',
                backgroundColor: discount !== 0 
                  ? 'rgba(43, 198, 49, 0.4)'
                  : 'transparent', 
                fontWeight: discount !== 0 ? 'bold' : 'normal',
                paddingBottom: '2px',
                cursor: 'pointer'
              }}
              title={""}
              css={{}}
              dispatchType={"number"}
              disabled={true}
            />
          </LoginForm>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '0px', 
            marginBottom: '6px',
            justifyContent: 'space-between'
          }}
        >
          
          <h2 style={{ color: '#565656', fontSize: '18px', display: 'block' }}>
            { discount === 5 ? 'Со скидкой' : 'Без скидки' }
          </h2>
          <h2 
            style={{ 
              color: discount === 5 ? 'rgb(43, 198, 49)' : '#565656', 
              fontSize: '18px', 
              display: 'block' 
            }}
          >К оплате: { totalSumm - ( totalSumm / 100 * discount )} руб
          </h2>
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '24px' }}>
          
          <Button  
            params={{
              width: 500,
              height: 50,
              background: '#565656'
            }}
            inner={"Оформить заказ"}
            css={{
              fontSize: '13px',
              borderRadius: '10px',
              border: 'none',
              color: 'white',
              fontWeight: 'bold',
            }}
            action={orderController}
          />
        
        </ContentLine>

      </Wrapper>
    </React.Fragment>
  )

}

export default OrderPageMakeOrder 