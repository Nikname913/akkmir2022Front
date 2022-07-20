/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/make-order'
import Input from '../comps/input/Input.jsx'
import ReactSelect from '../comps/ReactSelect'
import Button from '../comps/button/Button.jsx'
import OrderItemsLine from '../comps/OrderItemsLine'
import Rds from '../../appStore/reducers/storageReducers/mainReducer'
import { useSelector } from 'react-redux'

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

  const number = useSelector(state => state.newOrder.number)
  const model = useSelector(state => state.newOrder.model)
  const name = useSelector(state => state.newOrder.name)
  const email = useSelector(state => state.newOrder.email)
  const paytype = useSelector(state => state.newOrder.paytype)
  const diliverytype = useSelector(state => state.newOrder.diliverytype)
  const address = useSelector(state => state.newOrder.address)

  function dataValidate(param) {

    let answer = ''
    param ? answer = param : answer = ''
    return answer

  }

  function orderController() {

    if ( number && model ) {

      let userName
      let userMail
      let userPaytype
      let userDiliverytype
      let userAddress

      let message = `
        Заявка с сайта, покупка. Номер клиента: ${number}. 
        Модель транспортного средства: ${model}. 
      `
      name ? userName = `Имя пользователя: ${name}. ` : null
      email ? userMail = `Почта пользователя: ${email}. ` : null
      paytype ? userPaytype = `Выбранный вариант оплаты: ${paytype}. ` : null
      diliverytype ? userDiliverytype = `Выбранный вариант получения: ${diliverytype}. ` : null
      address ? userAddress = `Адрес доставки: ${address}. ` : null

      message = message                + 
        dataValidate(userName)         + 
        dataValidate(userMail)         + 
        dataValidate(userPaytype)      + 
        dataValidate(userDiliverytype) + 
        dataValidate(userAddress)

    }
  }

  return (
    <React.Fragment>
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
          <p style={{ fontSize: '13px', lineHeight: '20px' }}>
            
            Уже регистрировались на сайте? Войдите и вам не придется заполнять форму снова, а заказ сохраниться в личном кабинете
            
          </p>

          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"+7800.."}
            inputCss={{ 
              border: 'none',
              borderRight: number 
                ? '6px solid rgb(43, 198, 49)' 
                : '6px solid rgb(214, 46, 43)'
            }}
            title={"Мобильный телефон*"}
            css={{ marginTop: '14px' }}
            dispatchType={"number"}

          />
          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Mitsubishi"}
            inputCss={{ 
              border: 'none',
              borderRight: model 
                ? '6px solid rgb(43, 198, 49)' 
                : '6px solid rgb(214, 46, 43)'
            }}
            title={"Марка транспортного средства*"}
            css={{ marginTop: '14px' }}
            dispatchType={"model"}
          />
          <Input
            params={{ width: 300 }}
            type={"text"}
            placeholder={"Введите ваше имя"}
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
            placeholder={"example@mail.com"}
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

          <h5 style={{ fontSize: '16px', marginBottom: '14px', marginTop: '30px' }}>Выберите способ получения</h5>
          <ReactSelect 
            params={{ width: 300 }}
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
              <OrderItemsLine data={Rds.getOrdersData()}/>
              <DiliveryCoast>

                <p style={{ display: 'block', fontSize: '14px' }}>Доставка</p>
                <p style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>450 RUB</p>

              </DiliveryCoast>
            </Items>

            <OrderForm>

              <h6 style={{ fontSize: '15px', marginBottom: '10px', color: 'grey' }}>Итого:</h6>
              <h6 style={{ fontSize: '18px', marginBottom: '26px', color: 'grey' }}>3550 RUB</h6>

              <h6 style={{ fontSize: '15px', marginBottom: '10px' }}>Итого со скидкой:</h6>
              <h6 style={{ fontSize: '18px', marginBottom: '10px' }}>3150 RUB</h6>

              <p 
                style={{ 
                  color: 'grey', 
                  lineHeight: '18px', 
                  fontSize: '13px',
                  marginBottom: '50px' 
                }}
              >
                
                Цена с учетом скидки при сдаче вашего аккумулятора аналогичных размеров
                
              </p>

              <Button  
                params={{
                  width: 190,
                  height: 36,
                  background: '#2E2E2E'
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
              />
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
              />

              <p style={{ color: 'grey', lineHeight: '18px', fontSize: '13px' }}>
                
                В наличии в 3 магазинах
                
              </p>

              <p style={{ color: 'grey', lineHeight: '18px', fontSize: '13px' }}>
                
                Доставка в Екатеринбург сегодня
                
              </p>

            </OrderForm>

          </OrderItems>
          <MapWrapper/>

        </OrderData>

      </MakeOrderWrapper>
    </React.Fragment>
  )

}

export default MakeOrder