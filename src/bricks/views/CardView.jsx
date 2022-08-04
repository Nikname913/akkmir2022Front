/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import css from '../../styles/card-view'
import CardInfo from './CardInfo'
import Button from '../comps/button/Button.jsx'
import image from '../../img/category.png'
import byOneClickImage from '../../img/byOneClick.png'
import byClickImage from '../../img/byClick.png'
import { useSelector, useDispatch } from 'react-redux'
import { productPageReducer, 
  setModalContent, 
  setModalShow,
  setOrdersCount } from '../../appStore/reducers/mainReducer'
import Rds from '../../appStore/reducers/storageReducers/mainReducer'

const Card = css.CardWrapper
const LevelOne = css.CardWrapperUpLevel
const Photo = css.ItemPhoto
const PhotoGallery = css.ItemPhotoGallery
const GalleryItem = css.ItemPhotoGalleryItem
const ItemDescription = css.ItemDescription
const ItemDescriptionLine = css.ItemDescriptionLine
const OrderForm = css.OrderForm
const LevelTwo = css.CardWrapperMiddleLevel
const LevelThree = css.CardWrapperDowmMiddleLevel

const CardView = (props) => {

  const [ powerCount, setPowerCount ] = useState(60)
  const [ makeOrder, setMakeOrder ] = useState(false)
  const [ makeOrderInner, setMakeOrderInner ] = useState('Добавить в корзину')
  const discrFork = useSelector(state => state.main.productPageDiscriptionFork)
  const actualItem = useSelector(state => state.main.actualItem)
  const dispatch = useDispatch()
  const { coast = null } = props

  function incrCount() { setPowerCount(prev => prev += 10) }
  function decrCount() { setPowerCount(prev => prev > 0 ? prev = prev - 10 : prev = 0) }

  function ordersCount() {

    Rds.setOrdersCount()
    dispatch(setOrdersCount(Rds.getOrdersCount()))

  }

  function ordersData(param) {

    Rds.makeNewOrder({ itemID: param })

  }

  function addressItem() {

    dispatch(productPageReducer(0))

  }

  function discrItem() {

    dispatch(productPageReducer(1))

  }

  function showModal() {

    document.documentElement.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    dispatch(setModalShow(true))

  }

  function contentModal() {

    dispatch(setModalContent(
      <Photo 
        style={{ 
          width: '520px', 
          height: '520px', 
          backgroundColor: 'white', 
          boxShadow: '0px 0px 4px black',
          borderRadius: '12px' 
        }}
      >
        <img 
          style={{ display: 'block', cursor: 'pointer' }} 
          src={image} 
          alt={""}
        />
      </Photo>
    ))

  }

  return (
    <Card>
      <LevelOne>
        <Photo>

          <img 
            style={{ display: 'block', cursor: 'pointer' }} 
            src={image} 
            alt={""}
            onClick={showModal}
            onMouseDown={contentModal}
          />

          <PhotoGallery>
            <GalleryItem>
              <img style={{ display: 'block', width: '60px', cursor: 'pointer' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem>
              <img style={{ display: 'block', width: '60px', cursor: 'pointer' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem>
              <img style={{ display: 'block', width: '60px', cursor: 'pointer' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem>
              <img style={{ display: 'block', width: '60px', cursor: 'pointer' }} src={image} alt={""}/>
            </GalleryItem>
          </PhotoGallery>

        </Photo>
        <ItemDescription>

          <Button  
            params={{
              width: 180,
              height: 36,
              background: '#C4C4C4'
            }}
            inner={"Сравнить товары"}
            css={{
              fontSize: '13px',
              color: 'white',
              marginRight: '24px',
              boxShadow: '0px 0px 1.5px grey',
              marginBottom: '16px'
            }}
          />

          <h5 style={{ fontSize: '18px', marginBottom: '12px'  }}>Характеристики аккумулятора:</h5>
          
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Гарантия</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>36 месяцев</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Бренд</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>ZEUS</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Емкость Ач</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>50</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Напряжение (В)</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>12</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Полярность</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Прямая</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Производитель</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Курский аккумуляторный завод</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Пусковой ток (А)</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>480</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Размер (Д*Ш*В)</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>207*175*175</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Тип клемм</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Европейская</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Тип крепления</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Нижний бурт</p>
          </ItemDescriptionLine>
          <ItemDescriptionLine>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Тип транспорта</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', color: 'grey' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
            <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px' }}>Легковой</p>
          </ItemDescriptionLine>

        </ItemDescription>

        <OrderForm>

          <h6 style={{ fontSize: '15px', marginBottom: '10px' }}>Итого:</h6>
          <h6 style={{ fontSize: '18px', marginBottom: '10px' }}>{ coast } RUB</h6>

          <p 
            style={{ 
              color: 'grey', 
              lineHeight: '18px', 
              fontSize: '13px',
              marginBottom: '12px' 
            }}
          >
            
            Цена с учетом скидки при сдаче вашего аккумулятора аналогичных размеров и характеристик
            
          </p>

          <div
            style={{
              display: 'block',
              position: 'relative',
              width: '100%',
              height: 'auto',
              minHeight: '60px',
              backgroundColor: '#F7F7F7',
              padding: '10px',
              paddingTop: '8px',
              borderRadius: '4px',
              marginBottom: '16px'
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                marginBottom: '8px'
              }}
            >
              <span
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '26px',
                  height: '26px',
                  borderRadius: '4px',
                  border: '1px solid #D3D3D3',
                  backgroundColor: 'white',
                  marginRight: '10px',
                  cursor: 'pointer'
                }}
              ></span>
              <span style={{ fontSize: '13px', width: '190px', lineHeight: '18px' }}>Сдать свой аккумулятор и получить скидку</span>
            </div>
            <span 
              style={{ 
                display: 'block',
                fontSize: '13px', 
                width: '86%', 
                lineHeight: '18px',
                marginBottom: '13px',
                color: 'grey'
              }}
            >
              
              Выберите емкость сдаваемого аккумулятора</span>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '240px',
                marginBottom: '14px'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '60%',
                  paddingRight: '12px'
                }}
              >
                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '22px',
                    height: '30px',
                    backgroundColor: 'white',
                    border: '1px solid #D3D3D3',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    lineHeight: '27px',
                    textAlign: 'center',
                    fontSize: '18px'
                  }}
                  onClick={decrCount}
                >{""}</span>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '64px',
                    height: '50px',
                    borderRadius: '10px',
                    border: '1px solid #D3D3D3',
                    overflow: 'hidden'
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '60%',
                      fontSize: '15px',
                      color: false ? '#D3D3D3' : 'grey',
                      textAlign: 'center'
                    }}
                  >
                    
                    { powerCount }

                  </span>
                </div>
                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '22px',
                    height: '30px',
                    backgroundColor: 'white',
                    border: '1px solid #D3D3D3',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    lineHeight: '29px',
                    textAlign: 'center',
                    fontSize: '16px'
                  }}
                  onClick={incrCount}
                >{""}</span>
              </div>
              <div>
                <span style={{ fontSize: '13px' }}>Скидка: </span>
                <span style={{ fontSize: '13px' }}>500р</span>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%'
              }}
            >
              <span
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '26px',
                  height: '26px',
                  borderRadius: '4px',
                  border: '1px solid #D3D3D3',
                  backgroundColor: 'white',
                  marginRight: '10px',
                  cursor: 'pointer'
                }}
              ></span>
              <span style={{ fontSize: '13px', width: '190px', lineHeight: '18px' }}>Мне требуется установка</span>
            </div>
          </div>

          <Button  
            params={{
              width: 200,
              height: 36,
              background: 'transparent'
            }}
            inner={"Купить в один клик"}
            css={{
              fontSize: '13px',
              color: '#2E2E2E',
              marginRight: '24px',
              boxShadow: '0px 0px 1.5px grey',
              marginBottom: '10px'
            }}
            children={
              <img 
                alt={""}
                src={byOneClickImage}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '16px',
                  left: 0,
                  marginLeft: '12px',
                  top: '50%',
                  marginTop: '-10px'
                }}
              />
            }
          />
          <Button  
            params={{
              width: 200,
              height: 36,
              background: !makeOrder ? '#2E2E2E' : 'rgb(43, 198, 49);'
            }}
            inner={makeOrderInner}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              marginRight: '24px',
              marginBottom: '18px'
            }}
            action={() => { 
              
              !makeOrder && ordersCount()
              !makeOrder && ordersData(actualItem) 
              setMakeOrder(true)
              setMakeOrderInner('Добавлено')
            
            }}
            children={
              <React.Fragment>
                <img 
                  alt={""}
                  src={byClickImage}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '17px',
                    left: 0,
                    marginLeft: '11px',
                    top: '50%',
                    marginTop: '-9px'
                  }}
                />

                { Rds.getOrdersData().map(item => {

                  if ( item.id === actualItem ) {

                    return (
                      <span
                        style={{
                          display: 'block',
                          position: 'absolute',
                          width: '30px',
                          height: '30px',
                          backgroundColor: 'rgb(247, 247, 247)',
                          borderRadius: '50%',
                          left: '100%',
                          marginLeft: '12px',
                          top: '50%',
                          marginTop: '-15px',
                          fontSize: '12px',
                          textAlign: 'center',
                          lineHeight: '28px',
                          color: 'grey'
                        }}
                      >
                        { item.count }
                      </span>
                    )
                  }
                })}

              </React.Fragment>
            }
          />

          <p style={{ color: 'grey', lineHeight: '18px', fontSize: '13px' }}>
            
            В наличии в 3 магазинах
            
          </p>

          <p style={{ color: 'grey', lineHeight: '18px', fontSize: '13px' }}>
            
            Доставка в екатеринбург сегодня
            
          </p>

        </OrderForm>
      
      </LevelOne>

      <LevelTwo>
        
        <Button  
          params={{
            width: 190,
            height: 36,
            background: discrFork === 0 ? '#2E2E2E' : 'transparent'
          }}
          inner={"Наличие в магазинах"}
          css={{
            fontSize: '13px',
            color: discrFork === 0 ? 'white' : '#2E2E2E',
            marginRight: '12px',
            boxShadow: '0px 0px 1.5px grey',
            boxSizing: 'border-box'
          }}
          action={addressItem}
        />
        <Button  
          params={{
            width: 190,
            height: 36,
            background: discrFork === 1 ? '#2E2E2E' : 'transparent'
          }}
          inner={"Описание товара"}
          css={{
            fontSize: '13px',
            color: discrFork === 1 ? 'white' : '#2E2E2E',
            marginRight: '12px',
            boxShadow: '0px 0px 1.5px grey',
            boxSizing: 'border-box'
          }}
          action={discrItem}
        />
        <Button  
          params={{
            width: 190,
            height: 36,
            background: 'transparent'
          }}
          inner={"Применяемые технологии"}
          css={{
            fontSize: '13px',
            color: '#2E2E2E',
            marginRight: '12px',
            boxShadow: '0px 0px 1.5px grey',
            boxSizing: 'border-box'
          }}
        />
        <Button  
          params={{
            width: 190,
            height: 36,
            background: 'transparent'
          }}
          inner={"Производитель"}
          css={{
            fontSize: '13px',
            color: '#2E2E2E',
            marginRight: '12px',
            boxShadow: '0px 0px 1.5px grey',
            boxSizing: 'border-box'
          }}
        />

      </LevelTwo>
      <LevelThree 
        style={ discrFork === 1
          ? { flexDirection: 'column' }
          : { flexDirection: 'row' }}
      >
        
        <CardInfo/>

      </LevelThree>
    </Card>
  )
}

export default CardView