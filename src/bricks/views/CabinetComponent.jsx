/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import css from '../../styles/pages/cabinet-page'
import Input from '../comps/input/Input.jsx'
import Button from '../comps/button/Button.jsx'
import akkum from '../../img/category.png'

const Menu = css.CabinetMenu
const MenuItem = css.CabinetMenuItem
const Content = css.CabinetContent

// -------------------------------
// импорты для блока информации
// -------------------------------

const ContentLeft = css.CabinetContentInfo.LeftBlock
const ContentRight = css.CabinetContentInfo.RightBlock
const ContentRightContentLine = css.CabinetContentInfo.RightBlockContentLine
const ContentRightAddCar = css.CabinetContentInfo.RightBlockAddCar

// -------------------------------
// импорты для блока мои заказы
// -------------------------------

const OrderContentLeft = css.CabinetContentOrders.LeftBlock
const OrderContentLeftLine = css.CabinetContentOrders.LeftBlockContentLine
const {
  LeftBlockContentLineCellOrder,
  LeftBlockContentLineCellItem,
  LeftBlockContentLineCellDate,
  LeftBlockContentLineCellStatus,
  LeftBlockContentLineCellCount,
  LeftBlockContentLineCellSumm
} = css.CabinetContentOrders

// -------------------------------
// импорты для блока мои бонусы
// -------------------------------

const BonusContentLeft = css.CabinetContentBonuces.LeftBlock
const BonusBlock = css.CabinetContentBonuces.BonusBlock

// -------------------------------
// импорты для блока посещения сервиса
// -------------------------------

const ServiceContentLeft = css.CabinetContentServices.LeftBlock
const ServiceContentLeftLine = css.CabinetContentServices.LeftBlockContentLine
const {
  LeftBlockContentLineCellDateService,
  LeftBlockContentLineCellWorks,
  LeftBlockContentLineCellSummService,
  LeftBlockContentLineCellAdress,
  LeftBlockContentLineCellOrderDocument,
  LeftBlockContentLineCellButton
} = css.CabinetContentServices

const CabinetComponent = (props) => {

  const [ fork, setFork ] = useState('contacts')

  return (
    <React.Fragment>
      <Menu>
        <MenuItem 
          style={ fork === 'contacts' ? {
            color: 'white',
            backgroundColor: '#565656',
            boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)'
          } : null }
          onClick={() => setFork('contacts')}
        >
        
          Контактная информация и адрес доставки моих заказов
        </MenuItem>
        <MenuItem
          style={ fork === 'orders' ? {
            color: 'white',
            backgroundColor: '#565656',
            boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)'
          } : null }
          onClick={() => setFork('orders')}
        >

          Мои заказы
        </MenuItem>
        <MenuItem
          style={ fork === 'bonuces' ? {
            color: 'white',
            backgroundColor: '#565656',
            boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)'
          } : null }
          onClick={() => setFork('bonuces')}
        >
        
          Мои бонусы
        </MenuItem>
        <MenuItem
          style={ fork === 'services' ? {
            color: 'white',
            backgroundColor: '#565656',
            boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)'
          } : null }
          onClick={() => setFork('services')}
        >
        
          Мой сервис
        </MenuItem>
        <MenuItem>Мои компании</MenuItem>
        <MenuItem>Электронные чеки</MenuItem>
      </Menu>
      
      { fork === 'contacts' 
      
        ? <Content style={{ alignItems: 'flex-start' }}>

          <ContentLeft>

            <h5 style={{ fontSize: '18px', marginBottom: '6px', marginTop: '4px' }}>Контактная информация</h5>
            <Input
              params={{ width: 300 }}
              type={"text"}
              placeholder={"+7800.."}
              inputCss={{ border: 'none' }}
              title={"Мобильный телефон"}
              css={{ marginTop: '14px' }}
            />
            <Input
              params={{ width: 300 }}
              type={"text"}
              placeholder={"Александр"}
              inputCss={{ border: 'none' }}
              title={"Введите ваше имя"}
              css={{ marginTop: '14px' }}
            />
            <Input
              params={{ width: 300 }}
              type={"text"}
              placeholder={"nik.shipov@gmail.com"}
              inputCss={{ border: 'none' }}
              title={"Введите вашу почту"}
              css={{ marginTop: '14px' }}
            />

            <span
              style={{
                color: 'grey',
                fontSize: '13px',
                marginTop: '14px',
                marginBottom: '8px',
                width: '80%',
                lineHeight: '18px'
              }}
            >
              
              За добавление почты начислено вам 300 бонусных баллов. нажмите, чтобы посмотреть</span>

            <Input
              params={{ width: 300 }}
              type={"password"}
              placeholder={"qwerty12345 так не надо"}
              inputCss={{ border: 'none' }}
              title={"Придумать или изменить пароль"}
              css={{ marginTop: '14px' }}
            />

            <Button  
              params={{
                width: 180,
                height: 36,
                background: '#2E2E2E'
              }}
              inner={"Сохранить пароль"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: 'white',
                marginRight: '24px',
                marginTop: '20px'
              }}
            />

          </ContentLeft>
          <ContentRight>

            <h5 style={{ fontSize: '18px', marginBottom: '6px', marginTop: '4px' }}>Адрес для доставки заказа</h5>
            <span
              style={{
                color: 'grey',
                fontSize: '13px',
                marginTop: '2px',
                marginBottom: '8px',
                width: '80%',
                lineHeight: '18px'
              }}
            >
              
              Вы можете добавить до трех адресов</span>
            
            <ContentRightContentLine>

              <Button  
                params={{
                  width: 140,
                  height: 36,
                  background: '#2E2E2E',
                }}
                inner={"Адрес 1"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  marginRight: '10px'
                }}
              />
              <Button  
                params={{
                  width: 140,
                  height: 36,
                  background: 'transparent',
                }}
                inner={"Адрес 2"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: '#2E2E2E',
                  marginRight: '10px'
                }}
              />
              <Button  
                params={{
                  width: 140,
                  height: 36,
                  background: 'transparent',
                }}
                inner={"Адрес 3"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: '#2E2E2E'
                }}
              />

            </ContentRightContentLine>
            <ContentRightContentLine>

              <Input
                params={{ width: 260 }}
                type={"password"}
                placeholder={"Введите город"}
                inputCss={{ border: 'none' }}
                title={"Введите город"}
                css={{ marginTop: '14px' }}
              />

            </ContentRightContentLine>
            <ContentRightContentLine>

              <Input
                params={{ width: 260 }}
                type={"password"}
                placeholder={"Введите название улицы"}
                inputCss={{ border: 'none' }}
                title={"Ваша улица"}
                css={{ marginTop: '14px', marginRight: '12px' }}
              />
              <Input
                params={{ width: 60 }}
                type={"password"}
                placeholder={"13"}
                inputCss={{ border: 'none' }}
                title={"Дом"}
                css={{ marginTop: '14px', marginRight: '12px' }}
              />
              <Input
                params={{ width: 60 }}
                type={"password"}
                placeholder={"98"}
                inputCss={{ border: 'none' }}
                title={"Квартира"}
                css={{ marginTop: '14px' }}
              />

            </ContentRightContentLine>
            <ContentRightContentLine>

              <Input
                params={{ width: 360 }}
                type={"password"}
                placeholder={"Toyota Avensis 2005"}
                inputCss={{ border: 'none' }}
                title={"Марка транспортного средства"}
                css={{ marginTop: '14px', marginRight: '12px' }}
              />

              <ContentRightAddCar/>

            </ContentRightContentLine>
            <span
              style={{
                color: 'grey',
                fontSize: '13px',
                marginTop: '21px',
                marginBottom: '8px',
                width: '80%',
                lineHeight: '18px'
              }}
            >
              
              добавьте марку и модель вашего ТС, чтобы мы могли быстро подобрать для вас товар или правильно записать к нам в сервис. вы можете добавить несколько авто</span>
            
            <Button  
              params={{
                width: 180,
                height: 36,
                background: '#2E2E2E'
              }}
              inner={"Добавить адрес"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: 'white',
                marginRight: '24px',
                marginTop: '14px'
              }}
            />
            
          </ContentRight>
        </Content>
        : fork === 'orders' 
        ? <Content>

          <OrderContentLeft>

            <h5 style={{ fontSize: '18px', marginBottom: '6px', marginTop: '4px' }}>Список моих заказов</h5>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder style={{ fontWeight: 'bold' }}>Заказ ID</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ fontWeight: 'bold' }}>Название товара</LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate style={{ fontWeight: 'bold' }}>Дата оформления</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold' }}>Статус</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount style={{ fontWeight: 'bold' }}>Количество</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm style={{ fontWeight: 'bold' }}>Сумма</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>

            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19564</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>25.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: 'grey' }}>Ожидание оплаты</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19565</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>26.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: '#2BC631' }}>В обработке</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19566</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>28.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: '#2BC631' }}>В обработке</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19568</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>30.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold' }}>Доставлен</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19564</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>25.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: 'grey' }}>Ожидание оплаты</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19565</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>26.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: '#2BC631' }}>В обработке</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19566</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>28.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: '#2BC631' }}>В обработке</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19568</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>30.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold' }}>Доставлен</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19564</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>25.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: 'grey' }}>Ожидание оплаты</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19565</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>26.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: '#2BC631' }}>В обработке</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19566</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>28.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold', color: '#2BC631' }}>В обработке</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <OrderContentLeftLine>

              <LeftBlockContentLineCellOrder>19568</LeftBlockContentLineCellOrder>
              <LeftBlockContentLineCellItem style={{ paddingLeft: '52px' }}>
                
                <img 
                  style={{ 
                    display: 'block', 
                    width: '40px', 
                    cursor: 'pointer',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    marginTop: '-20px'
                  }} 
                  src={akkum} 
                  alt={""}
                />
                Автомобильный аккумулятор ZEUS RED LB 50 Ач п.п.
                
              </LeftBlockContentLineCellItem>
              <LeftBlockContentLineCellDate>30.05.22</LeftBlockContentLineCellDate>
              <LeftBlockContentLineCellStatus style={{ fontWeight: 'bold' }}>Доставлен</LeftBlockContentLineCellStatus>
              <LeftBlockContentLineCellCount>2 шт.</LeftBlockContentLineCellCount>
              <LeftBlockContentLineCellSumm>8800</LeftBlockContentLineCellSumm>

            </OrderContentLeftLine>
            <span
              style={{
                color: 'grey',
                fontSize: '13px',
                marginTop: '26px',
                marginBottom: '4px',
                width: '80%',
                lineHeight: '18px'
              }}
            >
              
              Все посещения сервиса и список ваших заказов вы можете посмотреть в разделе сайта Мой сервис</span>

          </OrderContentLeft>

        </Content>
        : fork === 'bonuces'
        ? <Content>

          <BonusContentLeft>

            <h5 style={{ fontSize: '18px', marginBottom: '6px', marginTop: '4px' }}>Мои бонусы</h5>
            <span
              style={{
                color: 'grey',
                fontSize: '13px',
                marginTop: '18px',
                marginBottom: '6px',
                width: '74%',
                lineHeight: '22px'
              }}
            >
              
              Совершая покупку в магазинах Автомобильный аккумуляторный мир Вы становитесь участником бонусной программы, проходящей во всех магазинах и сервисных центрах «Автомобильный аккумуляторный мир» и в интернет-магазине www.akkmir.ru</span>

            <Button  
              params={{
                width: 320,
                height: 36,
                background: '#F3F3F3'
              }}
              inner={"Узнать подробнее о бонусной программе"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                marginRight: '24px',
                marginTop: '14px',
                borderRadius: '10px',
                color: 'black'
              }}
            />
            <span
              style={{
                color: 'grey',
                fontSize: '14px',
                marginTop: '18px',
                marginBottom: '4px',
                width: '80%',
                lineHeight: '18px',
                fontWeight: 'bold'
              }}
            >
              
              У вас на счету:</span>

            <BonusBlock>

              <span
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '35%',
                  height: '100%',
                  fontSize: '36px',
                  textAlign: 'center',
                  lineHeight: '99px'
                }}
              >
                
                146</span>
              <span
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '65%',
                  height: '100%',
                  fontSize: '32px',
                  textAlign: 'center',
                  lineHeight: '99px',
                  backgroundColor: 'rgba(43, 198, 49, 1)',
                  color: 'white'
                }}
              >
                
                Бонусов</span>

            </BonusBlock>

          </BonusContentLeft>

        </Content>
        : fork === 'services'
        ? <Content>

          <ServiceContentLeft>

            <h5 style={{ fontSize: '18px', marginBottom: '6px', marginTop: '4px' }}>
              
              Мои посещения сервисных центров</h5>

            <ServiceContentLeftLine>

              <LeftBlockContentLineCellDateService style={{ fontWeight: 'bold' }}>Дата посещения</LeftBlockContentLineCellDateService>
              <LeftBlockContentLineCellWorks style={{ fontWeight: 'bold' }}>Работы</LeftBlockContentLineCellWorks>
              <LeftBlockContentLineCellSummService style={{ fontWeight: 'bold' }}>Сумма</LeftBlockContentLineCellSummService>
              <LeftBlockContentLineCellAdress style={{ fontWeight: 'bold' }}>Адрес</LeftBlockContentLineCellAdress>
              <LeftBlockContentLineCellOrderDocument style={{ fontWeight: 'bold' }}>Заказ наряд</LeftBlockContentLineCellOrderDocument>
              <LeftBlockContentLineCellButton style={{ fontWeight: 'bold' }}></LeftBlockContentLineCellButton>
            
            </ServiceContentLeftLine>
            
            <React.Fragment>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService>26.05.22</LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Замена масла</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>0</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress>Автомагистральная 34</LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument>000</LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(86, 86, 86, 1)',
                    paddingTop: '10px',
                    paddingBottom: '11px',
                    cursor: 'pointer'
                  }}
                >
                  
                  Обратная связь
                </LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Ремонт стартера</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Диагностика электрики</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Шиномонтаж</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks style={{ fontWeight: 'bold' }}>Итого</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService style={{ fontWeight: 'bold' }}>2000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
            </React.Fragment>

            <React.Fragment>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService>26.05.22</LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Замена масла</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>0</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress>Автомагистральная 34</LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument>000</LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(86, 86, 86, 1)',
                    paddingTop: '10px',
                    paddingBottom: '11px',
                    cursor: 'pointer'
                  }}
                >
                  
                  Обратная связь
                </LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Ремонт стартера</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Диагностика электрики</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Шиномонтаж</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks style={{ fontWeight: 'bold' }}>Итого</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService style={{ fontWeight: 'bold' }}>2000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
            </React.Fragment>

            <React.Fragment>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService>26.05.22</LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Замена масла</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>0</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress>Автомагистральная 34</LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument>000</LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(86, 86, 86, 1)',
                    paddingTop: '10px',
                    paddingBottom: '11px',
                    cursor: 'pointer'
                  }}
                >
                  
                  Обратная связь
                </LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Ремонт стартера</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Диагностика электрики</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Шиномонтаж</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks style={{ fontWeight: 'bold' }}>Итого</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService style={{ fontWeight: 'bold' }}>2000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
            </React.Fragment>

            <React.Fragment>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService>26.05.22</LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Замена масла</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>0</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress>Автомагистральная 34</LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument>000</LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(86, 86, 86, 1)',
                    paddingTop: '10px',
                    paddingBottom: '11px',
                    cursor: 'pointer'
                  }}
                >
                  
                  Обратная связь
                </LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Ремонт стартера</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Диагностика электрики</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>500</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks>Шиномонтаж</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService>1000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
              <ServiceContentLeftLine>

                <LeftBlockContentLineCellDateService></LeftBlockContentLineCellDateService>
                <LeftBlockContentLineCellWorks style={{ fontWeight: 'bold' }}>Итого</LeftBlockContentLineCellWorks>
                <LeftBlockContentLineCellSummService style={{ fontWeight: 'bold' }}>2000</LeftBlockContentLineCellSummService>
                <LeftBlockContentLineCellAdress></LeftBlockContentLineCellAdress>
                <LeftBlockContentLineCellOrderDocument></LeftBlockContentLineCellOrderDocument>
                <LeftBlockContentLineCellButton></LeftBlockContentLineCellButton>
              
              </ServiceContentLeftLine>
            </React.Fragment>

          </ServiceContentLeft>

        </Content>
        : fork === 'companies'
        ? <Content></Content> 
        : fork === 'pays'
        ? <Content></Content>
        : <Content></Content> }

    </React.Fragment>
  )

}

export default CabinetComponent