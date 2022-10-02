/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import css from '../../styles/make-order'
import Input from '../comps/input/Input.jsx'
import ReactSelect from '../comps/ReactSelect'
import Button from '../comps/button/Button.jsx'
import RequestComponent from '../../services/request.service'
import OrderItemsLine from '../comps/OrderItemsLine'
import Fos from '../../services/foz.service'
import Rds from '../../appStore/reducers/storageReducers/mainReducer'
import { useSelector, useDispatch } from 'react-redux'
import { setMessageShow, 
  setMessageContent, 
  setModalShow,
  setModalContent,
  setInfoPageTitle,
  setOrdersCount } from '../../appStore/reducers/mainReducer'
import { setNumber,
  setModel,
  setName,
  setEmail,
  setPaytype,
  setDiliverytype,
  setAddress } from '../../appStore/reducers/makeOrderReducer'
import { useNavigate } from 'react-router-dom'

const MakeOrderWrapper = css.OrderWrapper
const Form = css.OrderWrapperForm
const OrderData = css.OrderWrapperData
const OrderDataTitleLine = css.OrderWrapperDataTitleLine
const OrderItems = css.OrderItemsTable
const Items = css.Items
const DiliveryCoast = css.DiliveryCoast
const OrderForm = css.OrderWrapperDataForm
const MapWrapper = css.MapWrapper

const MakeOrder = () => {

  const [ summaryCoast, setSummaryCoast ] = useState(0)
  const [ configOrdersData, setConfigOrdersData ] = useState(null)
  const [ sendOrderToTelegram, setSendOrderToTelegram ] = useState(false)
  const [ emailFromAuth, setEmailFromAuth ] = useState('') 
  const [ orderDataTelegram, setOrderDataTelegram ] = useState('test order')
  const [ isDiscount, setIsDiscount ] = useState(true)
  const [ createUserCabinet, setCreateUserCabinet ] = useState(true)
  const [ newUserCabinetRequest, setNewUserCabinetRequest ] = useState(false)
  const [ newUserCabinetBody, setNewUserCabinetBody ] = useState('')

  const number = useSelector(state => state.newOrder.number)
  const model = useSelector(state => state.newOrder.model)
  const name = useSelector(state => state.newOrder.name)
  const email = useSelector(state => state.newOrder.email)
  const paytype = useSelector(state => state.newOrder.paytype)
  const diliverytype = useSelector(state => state.newOrder.diliverytype)
  const address = useSelector(state => state.newOrder.address)

  const dispatch = useDispatch()
  let navigate = useNavigate()

  function showModal() {

    document.documentElement.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    dispatch(setModalShow(true))

  }

  function contentModal() {

    dispatch(setModalContent(<Fos></Fos>))

  }

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
      email ? userMail = `Почта пользователя: ${email}. ` : null
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

      setNewUserCabinetBody(`?number=${number}&auth=sms&name=${name}&email=${email}&car=${model}`)
      setNewUserCabinetRequest(true)

      Rds.setAuthData({ number, auth: 'AFTER_ORDER', name, email, car: model })
      Rds.setAuthStatus({ status: true })
      Rds.setAuthToken({ token: 'num' + String(number).split('+7')[1] })

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
        type: 'error'
      }))
      dispatch(setMessageShow(true))

    }
  }
  
  useEffect(() => {

    if ( Rds.getAuthStatus() === false ) {

      {/* технический долг, вынести логику в useRef */}
      {/* или другое более подходящее решение" */}

    } else { 
      
      if ( Rds.getAuthUserToken().split('.').length === 2 ) {
      
        const [ header, payload ] = Rds.getAuthUserToken().split('.')
        false && console.log(window.atob(header))
        false && console.log(window.atob(payload))
        
        const data = JSON.parse(window.atob(payload))
        const email = data.email

        setEmailFromAuth(email)
        dispatch(setEmail(email))

      }
      
    }

    if ( sendOrderToTelegram === true ) {

      Rds.removeAllOrders()
      dispatch(setOrdersCount(0))
      dispatch(setInfoPageTitle('Заказ успешно оформлен'))
      navigate('../order-success')

    }

  }, [ sendOrderToTelegram ])

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

      { newUserCabinetRequest && <RequestComponent
        make={false}
        callbackAction={'NON_ACTION'}
        requestData={{
          type: 'GET',
          urlstring: `/newUserGet${newUserCabinetBody}`,
        }}
      /> }

      <MakeOrderWrapper style={{ overflow: 'hidden' }}>
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

        <Form>
          <h5 style={{ fontSize: '18px', marginBottom: '12px'  }}>Контактная информация</h5>
          <p style={{ fontSize: '13px', lineHeight: '24px' }}>Уже регистрировались на сайте? Войдите и вам не придется заполнять форму снова, а заказ сохраниться в личном кабинете</p>

          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"+7950.."}
            inputCss={{ 
              border: 'none',
              borderRight: number 
                ? '6px solid rgb(43, 198, 49)' 
                : '6px solid rgb(214, 46, 43)'
            }}
            title={"Мобильный телефон*"}
            css={{ marginTop: '22px' }}
            dispatchType={"number"}
          />
          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Lada Vesta"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7'
            }}
            title={"Марка транспортного средства"}
            css={{ marginTop: '14px' }}
            dispatchType={"model"}
          />
          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Иван Иванов"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7'
            }}
            title={"Ваше имя"}
            css={{ marginTop: '14px ' }}
            dispatchType={"name"}
          />
          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={ emailFromAuth ? emailFromAuth : "example@mail.com"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7'
            }}
            title={"Адрес электронной почты"}
            css={{ marginTop: '14px' }}
            dispatchType={"email"}
          />

          <span 
            style={{ 
              fontSize: '13px', 
              marginTop: '16px',
              marginBottom: '16px',
              display: 'block' 
            }}
          >
            
            * - поля отмеченные звездочкой обязательны
            
          </span>

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '30px' }}>Выберите способ оплаты</h5>
          <ReactSelect 
            params={{ width: 300 }}
            data={[
              { value: 'card', label: 'банковская карта' },
              { value: 'cash', label: 'наличными курьеру' },
              { value: 'online', label: 'оплата онлайн на сайте' }
            ]}
          />

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '30px' }}>Получить скидку</h5>
          <ReactSelect 
            actionType={"DISCOUNT_REDUCER"}
            actionParams={isDiscount}
            action={setIsDiscount}
            params={{ width: 300 }}
            placeholder={"Сдать старый аккумулятор"}
            data={[
              { value: 'card', label: 'сдать аккумулятор' },
              { value: 'cash', label: 'не сдавать - по умолчанию' },
            ]}
          />

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '30px' }}>Выберите способ получения</h5>
          <ReactSelect 
            params={{ width: 300 }}
            placeholder={"Доставка или самовывоз"}
            data={[
              { value: 'card', label: 'доставка курьером' },
              { value: 'cash', label: 'самовывоз из магазина' },
              { value: 'online', label: 'самовывоз со склада' }
            ]}
          />

          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Введите адрес вашей доставки"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7'
            }}
            css={{ marginTop: '14px' }}
            dispatchType={"address"}
          />

          <span 
            style={{ 
              fontSize: '13px', 
              width: '300px',
              display: 'block',
              marginTop: '18px',
              marginBottom: '18px',
              lineHeight: '18px'
            }}
          >
            
            Вводите адрес, включая город, после чего нажмите кнопку проверки адреса
            
          </span>

          <Button  
            params={{
              width: 180,
              height: 40,
              background: 'transparent'
            }}
            inner={"Проверить адрес"}
            css={{
              fontSize: '13px',
              color: '#2E2E2E',
              marginRight: '24px',
              border: '2px solid #565656',
              boxShadow: 'none',
              lineHeight: '35px'
            }}
          />
        
        </Form>

        <OrderData>

          <h5 style={{ fontSize: '18px', marginBottom: '24px' }}>Данные вашего заказа</h5>
          <OrderDataTitleLine>

            <Button  
              params={{
                width: 160,
                height: 36,
                background: '#2E2E2E'
              }}
              inner={"Физическое лицо"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: 'white',
                marginRight: '24px'
              }}
            />
            <Button  
              params={{
                width: 160,
                height: 36,
                background: '#F7F7F7'
              }}
              inner={"Юридическое лицо"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: '#2E2E2E',
                marginRight: '24px'
              }}
            />
            <Button  
              params={{
                width: 160,
                height: 36,
                background: '#F7F7F7'
              }}
              inner={"ИП"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: '#2E2E2E',
                marginRight: '24px',
                paddingTop: '1px'
              }}
            />

          </OrderDataTitleLine>
          <OrderItems>

            <Items>
              <OrderItemsLine 
                data={Rds.getOrdersData()} 
                setSC={setSummaryCoast}
                setCOD={setConfigOrdersData}
              />
              <DiliveryCoast>

                <p style={{ display: 'block', fontSize: '14px' }}>Доставка</p>
                <p style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>450 RUB</p>

              </DiliveryCoast>
            </Items>

            <OrderForm>

              <h6 style={{ fontSize: '15px', marginBottom: '10px', color: 'grey' }}>Итого:</h6>
              <h6 style={{ fontSize: '18px', marginBottom: '26px', color: 'grey' }}>{ summaryCoast } RUB</h6>

              <h6 style={{ fontSize: '15px', marginBottom: '10px' }}>Итого со скидкой:</h6>
              <h6 style={{ fontSize: '18px', marginBottom: '10px' }}>{ isDiscount ? ( Number(summaryCoast) - ( summaryCoast * 0.25 ) ).toFixed(0) : summaryCoast } RUB</h6>

              <p 
                style={{ 
                  color: 'grey', 
                  lineHeight: '18px', 
                  fontSize: '13px',
                  marginBottom: '50px' 
                }}
              >
                
                Цена с учетом скидки при сдаче вашего аккумулятора аналогичных размеров</p>

              { createUserCabinet ? <Button  
                params={{
                  width: 190,
                  height: 36,
                  background: '#2E2E2E'
                }}
                inner={"К оформлению"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  marginRight: '24px',
                  marginBottom: '10px'
                }}
                action={() => {

                  number && dispatch(setMessageShow(true))
                  number && dispatch(setMessageContent({
                    title: 'Заказ почти оформлен!',
                    message: 'Мы создадим вам учетную запись в личном кабинете, чтобы при дальнейших покупках вы не вводили снова контактные данные',
                    type: 'success',
                    windowHeight: '330px',
                    children: <Button  
                      params={{
                        width: 190,
                        height: 36,
                        background: 'rgb(43, 198, 49)'
                      }}
                      inner={"Все понятно"}
                      css={{
                        fontSize: '13px',
                        boxShadow: 'none',
                        color: 'white',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginTop: '20px',
                      }}
                      action={() => {
                        setCreateUserCabinet(false)
                      }}
                    />
                  }))

                  !number && dispatch(setMessageContent({
                    title: 'Ошибка заполнения формы',
                    message: 'Пожалуйста, заполните обязательные поля и попробуйте оформить заказ повторно',
                    type: 'error'
                  }))
                  !number && dispatch(setMessageShow(true))

                }}
              /> : <Button  
                params={{
                  width: 190,
                  height: 36,
                  background: 'rgb(43,198,49)'
                }}
                inner={"Оформить заказ"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  marginRight: '24px',
                  marginBottom: '10px'
                }}
                action={orderController}
              /> }
              <Button  
                params={{
                  width: 190,
                  height: 36,
                  background: 'transparent'
                }}
                inner={"Купить в один клик"}
                css={{
                  fontSize: '13px',
                  color: '#2E2E2E',
                  marginRight: '24px',
                  boxShadow: '0px 0px 1.5px grey',
                  marginBottom: '18px'
                }}
                action={() => {
                  
                  false && dispatch(setMessageShow(true))
                  false && dispatch(setMessageContent({
                    title: 'Данная функция в разработке',
                    message: 'Функция "Купить в один клик" находится в стадии формирования тз и скоро будет реализована',
                    type: 'error',
                  }))

                  showModal()
                  contentModal()

                }}
              />

              <p style={{ color: 'grey', lineHeight: '18px', fontSize: '13px' }}>В наличии в 3 магазинах</p>
              <p style={{ color: 'grey', lineHeight: '18px', fontSize: '13px' }}>Доставка в Екатеринбург сегодня</p>

            </OrderForm>

          </OrderItems>
          <MapWrapper/>

        </OrderData>

      </MakeOrderWrapper>
    </React.Fragment>
  )

}

export default MakeOrder