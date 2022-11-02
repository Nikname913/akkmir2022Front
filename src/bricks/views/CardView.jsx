/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import css from '../../styles/card-view'
import CardInfo from './CardInfo'
import Button from '../comps/button/Button.jsx'
import Fos from '../../services/foz.service'
import image from '../../img/category.png'
import quest from '../../img/quest.svg'
import byClickImage from '../../img/byClick.svg'
import likeImg from '../../img/like.svg'
import likeImgWhite from '../../img/likeWhite.svg'
import minus from '../../img/minus.png'
import eco from '../../img/eco.svg'
import { useSelector, useDispatch } from 'react-redux'
import { productPageReducer, 
  setModalContent, 
  setModalShow,
  setOrdersCount,
  setMessageShow, 
  setMessageContent } from '../../appStore/reducers/mainReducer'
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

  const { 
    coast = null, 
    coastDiscount = null,
    descr = '',
    tech = '',
    manufacturer = '', 
    title = '', 
    properties = [], 
    shops = [],
    group = '', } = props

  const discrFork = useSelector(state => state.main.productPageDiscriptionFork)
  const actualItem = useSelector(state => state.main.actualItem)
  const propsRemote = useSelector(state => state.main.catalogPropsRemote)
  const shopsRemote = useSelector(state => state.main.catalogShopsRemote)
  const [ powerCount, setPowerCount ] = useState(60)
  const [ makeOrder, setMakeOrder ] = useState(false)
  const [ makeOrderInner, setMakeOrderInner ] = useState('Добавить в корзину')
  const [ tradeinAkkum, setTradeinAkkum ] = useState(false)
  const [ installAkkum, setInstallAkkum ] = useState(false)
  const [ productProps, ] = useState(propertiesConfig())
  const [ productShops, ] = useState(shopsConfig())
  const dispatch = useDispatch()

  function incrCount() { setPowerCount(prev => prev += 10) }
  function decrCount() { setPowerCount(prev => prev > 0 ? prev = prev - 10 : prev = 0) }

  function propertiesConfig() {

    const props = properties[0].property
    let returnedPropsArray = []

    false && console.log(props)

    propsRemote && props.forEach(prop => {

      const ppropsRemote = JSON.parse(propsRemote)[0].property
      const propID = prop.id[0]
      const propValue = prop.value[0]

      ppropsRemote.forEach(pprop => {

        if ( pprop.id[0] === propID ) returnedPropsArray.push({ id: pprop.name[0], value: propValue })

      }) 

    })
    
    false && console.log(returnedPropsArray)
    return returnedPropsArray

  }

  function shopsConfig() {

    const warehouses = shops[0].warehouse
    let returnedWarehousesArray = []

    false && console.log(shopsRemote)
    false && console.log(shops)
    false && console.log(warehouses)

    shopsRemote && warehouses.forEach(warehouse => {

      const sshopsRemote = JSON.parse(shopsRemote)[0].warehouse
      const shopID = warehouse.id[0]
      const itemsCount = warehouse.count[0]
      const ekbRegion = 'f662faa5-029b-11e8-8dcf-0015179b1da1'

      sshopsRemote.forEach(sshop => {

        if ( sshop.region_id[0] === ekbRegion && sshop.id[0] === shopID ) {

          sshop.count = [ itemsCount ]
          returnedWarehousesArray.push(sshop)        

        }

      })

    })

    false && console.log(returnedWarehousesArray)
    return returnedWarehousesArray

  }

  function ordersCount() {

    Rds.setOrdersCount()
    dispatch(setOrdersCount(Rds.getOrdersCount()))

  }

  function ordersData(param) { Rds.makeNewOrder({ itemID: param }) }
  function addressItem() { dispatch(productPageReducer(0)) }
  function discrItem() { dispatch(productPageReducer(1)) }
  function techItem() { dispatch(productPageReducer(2)) }
  function manufacturerItem() { dispatch(productPageReducer(3)) }

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
          borderRadius: '12px',
          boxShadow: 'none',
          zIndex: '30'
        }}
      >
        <img 
          style={{ 
            display: 'block', 
            cursor: 'pointer', 
            width: '100%', 
            borderRadius: '8px',
            zIndex: '30' }} 
          src={image} 
          alt={""}
        />
      </Photo>
    ))

  }

  function contentModalFos() {

    dispatch(setModalContent(<Fos></Fos>))

  }

  return (
    <Card>
      <LevelOne>
        <Photo style={{ boxShadow: 'none' }}>

          <img 
            style={{ 
              display: 'block', 
              cursor: 'pointer', 
              width: '100%', 
              boxSizing: 'border-box',
              borderRadius: '8px' }}  
            src={image} 
            alt={""}
            onClick={showModal}
            onMouseDown={contentModal}
          />

          <PhotoGallery>
            <GalleryItem style={{ boxShadow: 'none' }}>
              <img style={{ display: 'block', width: '70px', cursor: 'pointer', borderRadius: '8px' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem style={{ boxShadow: 'none' }}>
              <img style={{ display: 'block', width: '70px', cursor: 'pointer', borderRadius: '8px' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem style={{ boxShadow: 'none' }}>
              <img style={{ display: 'block', width: '70px', cursor: 'pointer', borderRadius: '8px' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem style={{ boxShadow: 'none' }}>
              <img style={{ display: 'block', width: '70px', cursor: 'pointer', borderRadius: '8px' }} src={image} alt={""}/>
            </GalleryItem>
            <GalleryItem style={{ boxShadow: 'none' }}>
              <img style={{ display: 'block', width: '70px', cursor: 'pointer', borderRadius: '8px' }} src={image} alt={""}/>
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
              boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)',
              marginBottom: '16px'
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

          <h5 style={{ fontSize: '18px', marginBottom: '16px'  }}>Характеристики продукта:</h5>
          
          { productProps.length === 0 ? 
          
            <React.Fragment/> : <React.Fragment>

              { productProps.map((prop, index) => {

                false && console.log(prop.id)
                false && console.log(prop.value)

                let bgc; ( index % 2 === 0 ) ? bgc = 'rgb(247, 247, 247)' : bgc = 'transparent'

                return (
                  <ItemDescriptionLine
                    key={index}
                    style={{ 
                      backgroundColor: bgc,
                      borderRadius: '4px',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingBottom: '6px',
                      paddingTop: '6px' 
                    }}
                  >
                    <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', height: '32px', overflow: 'hidden' }}>{ prop.id }</p>
                    <p style={{ display: 'block', fontSize: '14px', lineHeight: '32px', height: '32px', overflow: 'hidden' }}>{ prop.value }</p>
                  </ItemDescriptionLine>
                )

              })}

            </React.Fragment> }

        </ItemDescription>
        <OrderForm>

          <h6 style={{ fontSize: '16px', marginBottom: '10px' }}>
            <img
              alt={""}
              src={eco}
              style={{ width: '90px' }}
            />
          </h6>
          <h6 
            style={coast === '--' 
              ? { display: 'block', position: 'relative', fontSize: '24px', marginBottom: '10px', color: 'grey' }
              : { display: 'block', position: 'relative', fontSize: '24px', marginBottom: '10px' }}>
          
            { coast === '--' ? 'Нет в наличии' : `${coast} ₽/шт.` }

            <h6 
              style={{
                display: 'block',
                position: 'absolute',
                color: 'grey',
                fontSize: '24px',
                top: '0%',
                left: '100%',
                marginLeft: '-130px'
              }}
            >
            
              { coastDiscount === '--' ? `${coast} ₽/шт.` : `${coastDiscount} ₽/шт.` }
              
            </h6>
            
          </h6>
          <p 
            style={{ 
              color: 'grey', 
              lineHeight: '20px', 
              fontSize: '13px',
              marginBottom: '12px' 
            }}
          >
            
            Цена с учетом скидки при сдаче вашего аккумулятора аналогичных размеров и характеристик</p>
          
          { true && ![ '1f53350f-d52f-11ec-8174-00155d0bfb06', 
             '8430edaa-bb83-11e6-963a-0015179b1da1', 
             'eaab84da-d536-11ec-8174-00155d0bfb06', 
             '7bdd4e64-bb83-11e6-963a-0015179b1da1' ].includes(group) && <React.Fragment>
            
            <div
              style={{
                display: 'block',
                position: 'relative',
                width: '130%',
                height: 'auto',
                minHeight: '60px',
                backgroundColor: '#F7F7F7',
                padding: '10px',
                paddingTop: '16px',
                paddingBottom: '22px',
                borderRadius: '4px',
                marginBottom: '23px',
                marginTop: '16px',
                marginLeft: '-15%',
                paddingLeft: '15%'
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
                  marginBottom: '14px'
                }}
              >
                <span
                  onClick={() => setTradeinAkkum(prev => !prev)}
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

                  { tradeinAkkum && <span

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
                    lineHeight: '18px' 
                  }}
                >
                
                  Сдать свой аккумулятор и получить скидку
                  
                </span>
              </div>
              { false && <React.Fragment><span 
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
                <div style={{ fontWeight: 'bold' }}>
                  <span style={{ fontSize: '13px' }}>Скидка: </span>
                  <span style={{ fontSize: '13px' }}>400р</span>
                </div>
              </div></React.Fragment> }
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
                    lineHeight: '18px' 
                  }}
                >
                  
                  Мне требуется установка
                  
                </span>
                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    position: 'absolute',
                    width: '26px',
                    height: '26px',
                    borderRadius: '16px',
                    backgroundColor: '#C3C3C3',
                    left: '100%',
                    marginLeft: '-62px'
                  }}
                >

                  <img
                    alt={""}
                    src={quest}
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '8px',
                      marginTop: '-2px'
                    }}
                  />

                </span>
              </div>
            </div>
          </React.Fragment> }

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
              marginBottom: '10px',
              marginTop: '16px',
              lineHeight: '35px'
            }}
            children={
              <React.Fragment>
              <img 
                alt={""}
                src={likeImg}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '18px',
                  left: 0,
                  marginLeft: '12px',
                  top: '50%',
                  marginTop: '-7px'
                }}
              />
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  position: 'absolute',
                  width: '76px',
                  height: '36px',
                  borderRadius: '12px',
                  backgroundColor: '#C4C4C4',
                  left: '100%',
                  marginLeft: '10px',
                  paddingLeft: '12px'
                }}
              >

                <img
                  alt={""}
                  src={likeImgWhite}
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '20px'
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    color: 'white',
                    paddingBottom: '1px',
                    marginLeft: '12px',
                    textAlign: 'center',
                  }}
                >10</span>

              </span>
              </React.Fragment>
            }
            action={() => {
                  
              false && dispatch(setMessageContent({
                title: 'Данная функция в разработке',
                message: 'Функция "Купить в один клик" находится в стадии формирования тз и скоро будет реализована',
                type: 'error',
              }))
              false && dispatch(setMessageShow(true))

              showModal()
              contentModalFos()

            }}
          />
          { Rds.getOneOrder({ itemID: actualItem }) === undefined ? <Button  
            params={{
              width: 288,
              height: 38,
              background: Rds.getOneOrder({ itemID: actualItem }) === undefined ? '#2E2E2E' : 'rgb(43, 198, 49);'
            }}
            inner={makeOrderInner}
            css={{
              fontSize: '13px',
              color: 'white',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '23px',
              lineHeight: '35px',
              boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)'
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
                    width: '19px',
                    left: 0,
                    marginLeft: '12px',
                    top: '50%',
                    marginTop: '-10px'
                  }}
                />

                { Rds.getOrdersData().map((item, index) => {

                  if ( item.id === actualItem ) {

                    return (
                      <span
                        key={index}
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
                    )}
                })}

              </React.Fragment>
            }
          /> : <Button  
            params={{
              width: 200,
              height: 42,
              background: Rds.getOneOrder({ itemID: actualItem }) === undefined ? '#2E2E2E' : 'rgb(43, 198, 49);'
            }}
            inner={"Товар в корзине"}
            css={{
              fontSize: '13px',
              color: 'white',
              marginBottom: '23px',
              marginLeft: '42px',
              boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)'
            }}
            action={() => { 
              
              !makeOrder && ordersCount()
              !makeOrder && ordersData(actualItem) 
              setMakeOrder(true)
              setMakeOrderInner('Добавлено')
            
            }}
            children={
              <React.Fragment>

                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    position: 'absolute',
                    width: '34px',
                    height: '39px',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '8px',
                    left: '0%',
                    marginLeft: '-42px',
                    paddingRight: '1px',
                    top: '0%',
                    marginTop: '1.4px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: '35px',
                    color: 'grey',
                    cursor: 'pointer',
                    boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)'
                  }}
                >{""}
                  <img
                    alt={""}
                    src={minus}
                    style={{ display: 'none' }}
                  />
                </span>

                { Rds.getOrdersData().map((item, index) => {

                  if ( item.id === actualItem ) {

                    return (
                      <span
                        key={index}
                        style={{
                          display: 'block',
                          position: 'absolute',
                          width: '24px',
                          height: '24px',
                          backgroundColor: 'rgb(247, 247, 247)',
                          borderRadius: '50%',
                          left: '0%',
                          marginLeft: '12px',
                          paddingRight: '0px',
                          top: '50%',
                          marginTop: '-12px',
                          fontSize: '12px',
                          textAlign: 'center',
                          lineHeight: '24px',
                          color: 'grey'
                        }}
                      >
                        
                        { item.count }
                      
                      </span>
                    )}
                })}

                <span
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    position: 'absolute',
                    width: '35px',
                    height: '39px',
                    backgroundColor: '#C4C4C4',
                    borderRadius: '8px',
                    left: '100%',
                    marginLeft: '9px',
                    top: '0%',
                    marginTop: '1.4px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: '39px',
                    color: 'grey',
                    cursor: 'pointer',
                    boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)'
                  }}
                >{""}
                  <img
                    alt={""}
                    src={minus}
                    style={{ display: 'none' }}
                  />
                  <img
                    alt={""}
                    src={minus}
                    style={{
                      display: 'none',
                      position: 'absolute',
                      transform: 'rotate(90deg)'
                    }}
                  />
                </span>

              </React.Fragment>
            }

          /> }

          <p style={{ lineHeight: '22px', fontSize: '13px', fontWeight: 'bold' }}>Доставка в Екатеринбург сегодня</p>

        </OrderForm>
      </LevelOne>
      <LevelTwo>
        
        <Button  
          params={{
            width: 190,
            height: 39,
            background: discrFork === 0 ? '#2E2E2E' : 'rgb(247, 247, 247)'
          }}
          inner={"Наличие в магазинах"}
          css={{
            fontSize: '13px',
            color: discrFork === 0 ? 'white' : '#2E2E2E',
            marginRight: '12px',
            boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)',
            boxSizing: 'border-box',
            paddingTop: '0px'
          }}
          action={addressItem}
        />
        <Button  
          params={{
            width: 190,
            height: 39,
            background: discrFork === 1 ? '#2E2E2E' : 'rgb(247, 247, 247)'
          }}
          inner={"Описание товара"}
          css={{
            fontSize: '13px',
            color: discrFork === 1 ? 'white' : '#2E2E2E',
            marginRight: '12px',
            boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)',
            boxSizing: 'border-box',
            paddingTop: '0px'
          }}
          action={discrItem}
        />
        <Button  
          params={{
            width: 190,
            height: 39,
            background: discrFork === 2 ? '#2E2E2E' : 'rgb(247, 247, 247)'
          }}
          inner={"Применяемые технологии"}
          css={{
            fontSize: '13px',
            color: discrFork === 2 ? 'white' : '#2E2E2E',
            marginRight: '12px',
            boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)',
            boxSizing: 'border-box',
            paddingTop: '0px'
          }}
          action={techItem}
        />
        <Button  
          params={{
            width: 190,
            height: 39,
            background: discrFork === 3 ? '#2E2E2E' : 'rgb(247, 247, 247)'
          }}
          inner={"Производитель"}
          css={{
            fontSize: '13px',
            color: discrFork === 3 ? 'white' : '#2E2E2E',
            marginRight: '12px',
            boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)',
            boxSizing: 'border-box',
            paddingTop: '0px'
          }}
          action={manufacturerItem}
        />

      </LevelTwo>
      <LevelThree 
        style={ discrFork > 0
          ? { flexDirection: 'column' }
          : { flexDirection: 'row' }}
      >
        
        <CardInfo 
          descr={descr} 
          title={title}
          tech={tech}
          manufacturer={manufacturer}
          shops={shops}
        />

      </LevelThree>
    </Card>
  )
}

export default CardView