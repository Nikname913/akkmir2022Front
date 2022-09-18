/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import css from '../../../styles/mobile/mobileStyles'
import Button from '../../comps/button/Button.jsx'
import CardPreview from '../views/CardPreview'
import { useSelector, useDispatch } from 'react-redux'
import { setOrdersCount } from '../../../appStore/reducers/mainReducer'
import Rds from '../../../appStore/reducers/storageReducers/mainReducer'
import akkum from '../../../img/category.png'

const { Wrapper, 
  PopularScrollWrapper,
  ContentLine,
  ProductCard: {
    ProductPhoto,
    OrderWrapper,
    OrderWrapperContentLine,
    TradeInBlock
  }} = css.ScreenStyles

const ProductPage = (props) => {

  const actualItem = useSelector(state => state.main.actualItem)
  const popularItems = useSelector(state => state.catalog.popular)
  const propsRemote = useSelector(state => state.main.catalogPropsRemote)
  const itemLocal = useSelector(state => state.main.actualItem)
  const [ showCharacteristics, setShowCharacteristics ] = useState(false)
  const dispatch = useDispatch()

  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  const { screen = 420, amperHour = 60 } = props
  const [ amper, setAmper ] = useState(amperHour)
  const [ makeOrderInner, setMakeOrderInner ] = useState('Добавить в корзину')
  const [ makeOrder, setMakeOrder ] = useState(false)
  const [ productProps, ] = useState(propertiesConfig())

  function propertiesConfig() {

    let properties = []

    generalCatalog && generalCatalog.map(item => {

      if ( item.id[0] === itemLocal ) {

        properties = item.properties

      }

    })

    const props = properties[0].property
    let returnedPropsArray = []

    propsRemote && props.forEach(prop => {

      const ppropsRemote = JSON.parse(propsRemote)[0].property
      const propID = prop.id[0]
      const propValue = prop.value[0]

      ppropsRemote.forEach(pprop => {

        if ( pprop.id[0] === propID ) returnedPropsArray.push({ id: pprop.name[0], value: propValue })

      }) 

    })

    console.log(returnedPropsArray)
    return returnedPropsArray

  }

  function ordersCount() {

    Rds.setOrdersCount()
    dispatch(setOrdersCount(Rds.getOrdersCount()))

  }

  function ordersData(param) { Rds.makeNewOrder({ itemID: param }) }

  return (
    <React.Fragment>
      <Wrapper
        style={{ 
          marginLeft: '20px', 
          borderRadius: '0px',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px' 
        }}
      >

        <ContentLine width={screen} style={{ marginTop: '12px', marginBottom: '6px' }}>

          <ProductPhoto>
            <img 
              style={{ 
                display: 'block', 
                position: 'relative',
                width: `${screen * 0.6}px`,
                borderRadius: '6px'
              }} 
              src={akkum} 
              alt={""}
            />
          </ProductPhoto>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '6px', 
            marginBottom: '12px', 
            minHeight: '0px',
            justifyContent: 'space-around' 
          }}
        >

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              position: 'relative',
              width: '80px'
            }}
          >
            <span style={{
              display: 'block',
              position: 'relative',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C4C4C4'
            }}></span>
            <span style={{
              display: 'block',
              position: 'relative',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C4C4C4'
            }}></span>
            <span style={{
              display: 'block',
              position: 'relative',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C4C4C4'
            }}></span>
            <span style={{
              display: 'block',
              position: 'relative',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C4C4C4'
            }}></span>
          </div>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '10px' }}>

          { generalCatalog && generalCatalog.map(item => {

            if ( item.id[0] === itemLocal ) {

              return (
                <h4 style={{ fontSize: '18px' }}>{ item.name }</h4>
              )

          }})}

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '4px', flexWrap: 'wrap' }}>

          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '13px',
              marginRight: '10px',
              marginBottom: '10px',
              fontWeight: 'bold'
            }}
          >
            
            Подходит для:</span>
          
          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"lada vesta"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '10px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"kia optima"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '10px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"corolla 2017"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '10px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"kia optima"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '10px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"corolla 2017"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '10px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"kia optima"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '10px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '6px', justifyContent: 'space-between' }}>

          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '13px',
              width: '160px',
              lineHeight: '18px',
              fontWeight: 'bold'
            }}
          >
            
            Доставка в Екатеринбурге сегодня</span>
          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '13px',
              lineHeight: '18px',
              fontWeight: 'bold'
            }}
          >
            
            В наличии в 5 магазинах</span>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>
          <OrderWrapper>

            <OrderWrapperContentLine 
              style={{ 
                justifyContent: 'flex-end', 
                paddingLeft: '14px', 
                paddingRight: '14px',
                marginBottom: '12px' 
              }}
            >
              
              <span style={{ fontSize: '13px', color: 'grey' }}>Этот товар купили <i style={{ fontWeight: 'bold', fontStyle: 'normal' }}>500 раз</i></span>
            </OrderWrapperContentLine>
            
            { generalCatalog && generalCatalog.map(item => {

              false && console.log(item)
              false && console.log('--------------------------------')

              if ( item.id[0] === itemLocal ) {

                return (
                  <OrderWrapperContentLine 
                    style={{ 
                      justifyContent: 'space-between', 
                      paddingLeft: '14px', 
                      paddingRight: '14px',
                      marginBottom: '14px'
                    }}
                  >
                    
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                      { +item.pre_order_prices[0].region[0].price[0] === 0
                      ? 'Нет в наличии' : item.pre_order_prices[0].region[0].price[0] + ' RUB' }
                    </span>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                      { +item.pre_order_prices[0].region[0].price[0] === 0
                      ? '' : item.pre_order_prices[0].region[0].price[0] + ' RUB' }
                    </span>
                  </OrderWrapperContentLine>
                )

            }})}
            
            <OrderWrapperContentLine>
              <TradeInBlock>

                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    height: 'auto',
                    marginBottom: '12px'
                  }}
                >

                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'grey',
                      borderRadius: '8px',
                      marginRight: '10px',
                      cursor: 'pointer'
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: '13px',
                      display: 'block'
                    }}
                  >
                    
                    Сдать свой аккумулятор и получить скидку</span>

                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    height: 'auto'
                  }}
                >

                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      color: 'grey',
                      fontSize: '13px'
                    }}
                  >
                    
                    Выберите емкость сдаваемого аккумулятора</span>

                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    height: 'auto',
                    marginTop: '14px'
                  }}
                >

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      position: 'relative',
                      width: '180px',
                      height: 'auto',
                    }}
                  >

                    <span 
                      style={{
                        display: 'block',
                        position: 'relative',
                        width: '20px',
                        height: '28px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        border: '1px solid #D3D3D3',
                        cursor: 'pointer'
                      }}
                      onClick={() => setAmper(prev => prev - 10)}
                    ></span>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        position: 'relative',
                        width: '120px',
                        height: 'auto',
                        minHeight: '40px',
                        boxSizing: 'border-box',
                        marginLeft: '12px',
                        marginRight: '12px',
                        backgroundColor: 'transparent'
                      }}
                    >

                      <span
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '55%',
                          height: '60px',
                          backgroundColor: 'white',
                          textAlign: 'center',
                          fontSize: '22px',
                          lineHeight: '60px',
                          borderTopLeftRadius: '8px',
                          borderBottomLeftRadius: '8px',
                          boxSizing: 'border-box',
                        }}
                      >{ amper }</span>
                      <span
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '45%',
                          height: '60px',
                          backgroundColor: '#858585',
                          textAlign: 'center',
                          fontSize: '16px',
                          lineHeight: '60px',
                          color: 'white',
                          borderTopRightRadius: '8px',
                          borderBottomRightRadius: '8px',
                          boxSizing: 'border-box',
                        }}
                      >{"Ah"}</span>

                    </div>
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        width: '20px',
                        height: '28px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        border: '1px solid #D3D3D3',
                        cursor: 'pointer'
                      }}
                      onClick={() => setAmper(prev => prev + 10)}
                    ></span>

                  </div>

                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginLeft: '18px'
                    }}
                  >
                    
                    Скидка 1000 руб.</span>

                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    position: 'relative',
                    height: 'auto',
                    marginTop: '14px'
                  }}
                >

                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '30px',
                      height: '30px',
                      backgroundColor: 'grey',
                      borderRadius: '8px',
                      marginRight: '10px',
                      cursor: 'pointer'
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: '13px',
                      display: 'block'
                    }}
                  >
                    
                    Мне требуется установка</span>

                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '26px',
                      height: '26px',
                      backgroundColor: '#C3C3C3',
                      borderRadius: '13px',
                      marginLeft: '20px',
                      cursor: 'pointer'
                    }}
                  ></span>

                </div>
                
              </TradeInBlock>
            </OrderWrapperContentLine>
            <OrderWrapperContentLine 
              style={{ 
                marginTop: '18px',
                paddingLeft: '12px',
                marginBottom: '6px' 
              }}
            >

              <Button  
                params={{
                  width: 160,
                  height: 44,
                  background: makeOrder ? 'rgb(43, 198, 49)' : '#565656'
                }}
                inner={makeOrderInner}
                css={{
                  boxSizing: 'border-box',
                  lineHeight: '40px',
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  border: makeOrder ? '1px solid rgb(43, 198, 49)' : '1px solid #565656',
                  borderRadius: '8px',
                  marginRight: '12px',
                }}
                action={() => { 
              
                  !makeOrder && ordersCount()
                  !makeOrder && ordersData(actualItem) 
                  setMakeOrder(true)
                  setMakeOrderInner('Добавлено')
                
                }}
              />

              <Button  
                params={{
                  width: 120,
                  height: 44,
                  background: 'transparent'
                }}
                inner={"Купить в 1 клик"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: '#858585',
                  border: '1px solid #858585',
                  borderRadius: '8px',
                }}
              />

            </OrderWrapperContentLine>

          </OrderWrapper>
        </ContentLine>
        <ContentLine 
          width={screen} 
          style={ showCharacteristics 
            ? { marginTop: '6px', marginBottom: '12px' }
            : { marginTop: '6px', marginBottom: '12px' }}
        >

          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              position: 'relative',
              width: '30px',
              height: '30px',
              backgroundColor: 'grey',
              borderRadius: '8px',
              marginRight: '12px',
              cursor: 'pointer',
              fontSize: '15px'
            }}
            onClick={() => setShowCharacteristics(prev => !prev)}
          >

            { showCharacteristics && <span
              style={{
                display: 'block',
                position: 'relative',
                width: '14px',
                height: '14px',
                borderRadius: '8px',
                backgroundColor: 'rgb(43, 198, 49)'
              }}
            /> }

          </span>
          <span>Показать характеристики</span>

        </ContentLine>
        { showCharacteristics && <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '0px', 
            marginBottom: '12px',
            flexDirection: 'column' 
          }}
        >
          { productProps.length === 0 ? 
            
            <React.Fragment/> : <React.Fragment>

              { productProps.map((prop, index) => {

                let bgc; ( index % 2 === 0 ) ? bgc = 'rgb(247, 247, 247)' : bgc = 'transparent'

                return (
                  <div
                    key={index}
                    style={{ 
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                      width: '100%',
                      backgroundColor: bgc,
                      borderRadius: '4px',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingBottom: '6px',
                      paddingTop: index === 0 ? '0px' : '6px' 
                    }}
                  >
                    <p style={{ display: 'block', fontSize: '14px', lineHeight: '26px' }}>
                      { prop.id }</p>
                    <p style={{ display: 'block', fontSize: '14px', lineHeight: '26px', paddingLeft: '24px', fontWeight: 'bold' }}>
                      { prop.value }</p>
                  </div>
                )

              })}

            </React.Fragment> }
        </ContentLine> }
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '0px', flexWrap: 'wrap' }}>
          
          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"Наличие в магазинах"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '15px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"Описание"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '15px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

          <Button  
            params={{
              width: '',
              height: 30,
              background: 'white'
            }}
            inner={"Технологии"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: '#858585',
              border: '1px solid #858585',
              borderRadius: '15px',
              paddingRight: '8px',
              paddingLeft: '8px',
              marginRight: '10px',
              marginBottom: '10px'
            }}
          />

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '7px' }}>

          <h4>Популярные товары</h4>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment key={index}>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine> : <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { generalCatalog ? generalCatalog.map((item, index) => {

              index < 2 && console.log(item)

              if ( index === 70 || index === 74 ) {
                return (
                  <React.Fragment key={index}>
                    <CardPreview 
                      itemID={item.id[0]}
                      title={item.name[0]}
                      description={item.description[0]}
                      coast1={+item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]}
                      coast2={+item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]}
                    ></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine> }
        <ContentLine width={screen} style={{ marginTop: '2px', marginBottom: '6px' }}>

          <h4>Не забудьте купить</h4>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment key={index}>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine> : <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { generalCatalog ? generalCatalog.map((item, index) => {

              index < 2 && console.log(item)

              if ( index === 70 || index === 74 ) {
                return (
                  <React.Fragment key={index}>
                    <CardPreview 
                      itemID={item.id[0]}
                      title={item.name[0]}
                      description={item.description[0]}
                      coast1={+item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]}
                      coast2={+item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]}
                    ></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine> }

      </Wrapper>
    </React.Fragment>
  )

}

export default ProductPage 