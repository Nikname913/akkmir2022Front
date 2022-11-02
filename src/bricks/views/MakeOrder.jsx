/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
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
import lepestok from '../../img/orderLepestok.svg'
import bankCard from '../../img/bankCard.svg'
import molniya from '../../img/molniya.svg'
import dilivery from '../../img/dilivery.svg'

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
  const [ isDiscount, setIsDiscount ] = useState(false)
  const [ createUserCabinet, setCreateUserCabinet ] = useState(true)
  const [ newUserCabinetRequest, setNewUserCabinetRequest ] = useState(false)
  const [ newUserCabinetBody, setNewUserCabinetBody ] = useState('')
  const [ agree, setAgree ] = useState(false)
  const [ installAkkum, setInstallAkkum ] = useState(false)
  const mapElement = useRef()

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

  function actionAgree() {

    setAgree(prev => !prev)

  }

  function actionDiscount() {

    setIsDiscount(prev => !prev)

  }

  function orderController() {

    if ( number && agree ) {

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
          <p style={{ fontSize: '13px', lineHeight: '24px' }}>Уже регистрировались на сайте? Войдите и вам не придется заполнять форму снова, а заказ сохранится в личном кабинете</p>

          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"+7900.."}
            inputCss={{ 
              border: 'none',
              borderRight: number
                ? '6px solid rgb(43, 198, 49)' 
                : '6px solid rgb(214, 46, 43)',
              borderRadius: '10px'
            }}
            title={"Мобильный телефон*"}
            css={{ marginTop: '22px' }}
            dispatchType={"number"}
            maxlength={12}
            inpValue={number}
          />
          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Lada Vesta"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7',
            borderRadius: '10px'
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
              borderRight: '6px solid #F7F7F7',
            borderRadius: '10px'
            }}
            title={"Введите ваше имя"}
            css={{ marginTop: '14px' }}
            dispatchType={"name"}
          />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              marginTop: '16px'
            }}
          >
            <span
              onClick={() => setInstallAkkum(prev => !prev)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative',
                width: '26px',
                height: '26px',
                borderRadius: '4px',
                border: '1px solid #D3D3D3',
                backgroundColor: 'white',
                marginRight: '10px',
                cursor: 'pointer'
              }}
            >

              { installAkkum && <span

                style={{
                  display: 'block',
                  position: 'relative',
                  width: '15px',
                  height: '15px',
                  borderRadius: '4px',
                  backgroundColor: '#565656',
                }}

              /> }

            </span>
            <span 
              style={{ 
                fontSize: '13px', 
                width: '190px', 
                lineHeight: '20px' 
              }}
            >
              
              Принимаю условия обработки персональных данных
              
            </span>
          </div>

          { false && <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={ agree ? "Согласие на обработку данных" : "Нажмите для согласия"}
            inputCss={{ 
              border: 'none',
              borderRight: agree ? '6px solid rgb(43, 198, 49)' : '6px solid rgb(214, 46, 43)',
              paddingBottom: '3px',
              cursor: 'pointer',
              backgroundColor: agree && 'rgba(43, 198, 49, 0.4)',
              fontWeight: agree && 'bold',
              borderRadius: '10px'
            }}
            title={"Согласие на обработку данных"}
            css={{ marginTop: '14px' }}
            dispatchType={"order-checker"}
            action={actionAgree}
            disabled={true}
          /> }

          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '14px',
              fontWeight: 'bold',
              marginTop: '10px',
              color: '#2E2E2E',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
          
            Политика конфиденциальности</span>

          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={ emailFromAuth ? emailFromAuth : "example@mail.com"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7',
              paddingBottom: '2px',
              borderRadius: '10px'
            }}
            title={"Адрес электронной почты"}
            css={{ marginTop: '18px' }}
            dispatchType={"email"}
          />

          <span 
            style={{ 
              fontSize: '13px', 
              marginTop: '16px',
              marginBottom: '16px',
              display: 'block',
              fontWeight: 'bold'
            }}
          >
            
            * - поля отмеченные звездочкой обязательны
            
          </span>

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '22px' }}>Выберите способ оплаты</h5>
          <ReactSelect 
            params={{ width: 300 }}
            data={[
              { value: 'card', label: 'Банковской картой курьеру' },
              { value: 'cash', label: 'Наличными курьеру' },
              { value: 'online', label: 'Оплата онлайн на сайте' },
              { value: 'code', label: 'Оплата по QR коду' }
            ]}
            showIcon={true}
            icon={bankCard}
            iconStyles={{
              marginTop: '-9px',
              marginLeft: '10px',
              width: '24px',
            }}
          />
          <ReactSelect 
            params={{ width: 300, mt: '14px', borra: '12px' }}
            placeholder={"Используйте ваши бонусы"}
            data={[
              { value: 'card', label: 'Потратить бонусы' },
              { value: 'cash', label: 'Накопить бонусы' },
            ]}
            showIcon={true}
            icon={molniya}
            iconStyles={{
              marginTop: '-12px',
              marginLeft: '16px',
              width: '14px',
            }}
          />

          { false && <React.Fragment>

            <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '20px' }}>Получить скидку</h5>
            <Input
              params={{ width: 300 }}
              type={"text"}
              placeholder={ isDiscount ? "Сдаю старый аккумулятор" : "Не буду сдавать аккумулятор"}
              inputCss={{ 
                border: 'none',
                borderRight: isDiscount ? '6px solid rgb(43, 198, 49)' : '6px solid rgb(247, 247, 247)',
                paddingBottom: '3px',
                cursor: 'pointer',
                backgroundColor: isDiscount && 'rgba(43, 198, 49, 0.4)',
                fontWeight: isDiscount && 'bold',
                borderRadius: '10px'
              }}
              title={"Вы можете получить скидку на заказ, сдав нам свой старый аккумулятор"}
              css={{ marginTop: '14px', lineHeight: '22px' }}
              dispatchType={"order-checker"}
              action={actionDiscount}
              disabled={true}
            />

          </React.Fragment> }

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '22px' }}>Получить скидку</h5>
          <ReactSelect 
            params={{ width: 300 }}
            placeholder={"Сдать свой АКБ"}
            data={[
              { value: 'card', label: 'Доставка курьером' },
              { value: 'cash', label: 'Самовывоз из магазина' },
              { value: 'online', label: 'Самовывоз со склада' }
            ]}
            showIcon={true}
            icon={bankCard}
            iconStyles={{
              marginTop: '-9px',
              marginLeft: '10px',
              width: '24px',
            }}
          />

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '22px' }}>Выберите способ получения</h5>
          <ReactSelect 
            params={{ width: 300 }}
            placeholder={"Доставка или самовывоз"}
            data={[
              { value: 'card', label: 'Доставка курьером' },
              { value: 'cash', label: 'Самовывоз из магазина' },
              { value: 'online', label: 'Самовывоз со склада' }
            ]}
            showIcon={true}
            icon={bankCard}
            iconStyles={{
              marginTop: '-9px',
              marginLeft: '10px',
              width: '24px',
            }}
          />

          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Введите адрес вашей доставки"}
            inputCss={{ 
              border: 'none',
              borderRight: '6px solid #F7F7F7',
              paddingBottom: '2px',
              borderRadius: '10px'
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
            action={() => {

                dispatch(setMessageContent({
                  title: 'Необходимо тз на функционал',
                  message: 'Данный раздел необходимо согласовать и добавить в общий макет для реализации',
                  type: 'error'
                }))
                dispatch(setMessageShow(true))

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
                boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
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
                boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
                color: '#2E2E2E',
                marginRight: '24px'
              }}
              action={() => {

                dispatch(setMessageContent({
                  title: 'Необходимо тз на функционал',
                  message: 'Данный раздел необходимо согласовать и добавить в общий макет для реализации',
                  type: 'error'
                }))
                dispatch(setMessageShow(true))

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
                boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
                color: '#2E2E2E',
                marginRight: '24px',
                paddingTop: '1px'
              }}
              action={() => {

                dispatch(setMessageContent({
                  title: 'Необходимо тз на функционал',
                  message: 'Данный раздел необходимо согласовать и добавить в общий макет для реализации',
                  type: 'error'
                }))
                dispatch(setMessageShow(true))

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

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                  }}
                >
                  <img
                    alt={""}
                    src={dilivery}
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '52px',
                      marginRight: '20px'
                    }}
                  />
                  <p style={{ display: 'block', fontSize: '16px', fontWeight: 'bold', color: '#2E2E2E' }}>Доставка</p>
                </div>
                <p style={{ display: 'block', fontSize: '20px', fontWeight: 'bold', color: '#2E2E2E' }}>0 RUB</p>

              </DiliveryCoast>
            </Items>

            <OrderForm>

              <h6 style={{ fontSize: '15px', marginBottom: '10px', color: 'grey' }}>Итого:</h6>
              <h6 style={{ fontSize: '18px', marginBottom: '12px', color: 'grey' }}>{ summaryCoast } RUB</h6>

              <h6 style={{ fontSize: '15px', marginBottom: '13px', lineHeight: '22px' }}>Итого со скидкой от сданного аккумулятора:</h6>
              <h6 style={{ fontSize: '18px', marginBottom: '14px', display: 'block', position: 'relative' }}>
                { ( Number(summaryCoast) - ( summaryCoast * 0.05 ) ).toFixed(0) } RUB
                <img
                  alt={""}
                  src={lepestok}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '24px',
                    top: '0%',
                    left: '100%',
                    marginTop: '-4px',
                    marginLeft: '-30%'
                  }}
                />
              </h6>

              <p 
                style={{ 
                  color: 'grey', 
                  lineHeight: '20px', 
                  fontSize: '13px',
                  marginBottom: '50px' 
                }}
              >
                
                Цена с учетом скидки при сдаче вашего аккумулятора аналогичных размеров</p>

              { createUserCabinet === false ? <Button  
                params={{
                  width: 190,
                  height: 42,
                  background: '#2E2E2E'
                }}
                inner={"К оформлению"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
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
                        height: 42,
                        background: 'rgb(43, 198, 49)'
                      }}
                      inner={"Все понятно"}
                      css={{
                        fontSize: '13px',
                        boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
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
                  height: 42,
                  background: 'rgb(43,198,49)'
                }}
                inner={"Оформить заказ"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
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
                  background: '#F7F7F7'
                }}
                inner={"Купить в один клик"}
                css={{
                  fontSize: '13px',
                  color: '#2E2E2E',
                  marginRight: '24px',
                  boxShadow: 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
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

              <p style={{ color: 'grey', lineHeight: '20px', fontSize: '13px' }}>В наличии в 3 магазинах</p>
              <p style={{ color: 'grey', lineHeight: '20px', fontSize: '13px' }}>Доставка в Екатеринбург сегодня</p>

            </OrderForm>

          </OrderItems>
          <MapWrapper ref={mapElement} id="map-element">
            <Helmet></Helmet>
          </MapWrapper>

        </OrderData>

      </MakeOrderWrapper>
    </React.Fragment>
  )

}

export default MakeOrder