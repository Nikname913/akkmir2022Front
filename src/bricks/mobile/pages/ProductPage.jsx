/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import css from '../../../styles/mobile/mobileStyles'
import Button from '../../comps/button/Button.jsx'
import CardPreview from '../views/CardPreview'
import { useSelector } from 'react-redux'
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

  const { screen = 420, amperHour = 60 } = props
  const [ amper, setAmper ] = useState(amperHour)
  const popularItems = useSelector(state => state.catalog.popular)

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
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '0px' }}>

          <h4>Аккумулятор ZEUS RED LB 50 Ач п.п.</h4>

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
              
              <span style={{ fontSize: '13px', color: 'grey' }}>Этот товар купили: 500 раз</span>
            </OrderWrapperContentLine>

            <OrderWrapperContentLine 
              style={{ 
                justifyContent: 'space-between', 
                paddingLeft: '14px', 
                paddingRight: '14px',
                marginBottom: '14px'
              }}
            >
              
              <span style={{ fontSize: '23px', fontWeight: 'bold' }}>2550 руб.</span>
              <span style={{ fontSize: '23px', fontWeight: 'bold' }}>3550 руб.</span>
            </OrderWrapperContentLine>
            
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
                  height: 40,
                  background: '#565656'
                }}
                inner={"Добавить в корзину"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  border: '1px solid #565656',
                  borderRadius: '8px',
                  marginRight: '12px'
                }}
              />

              <Button  
                params={{
                  width: 120,
                  height: 40,
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
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>

          <span
            style={{
              display: 'block',
              position: 'relative',
              width: '30px',
              height: '30px',
              backgroundColor: 'grey',
              borderRadius: '8px',
              marginRight: '12px',
              cursor: 'pointer'
            }}
          ></span>
          <span>Показать характеристики</span>

        </ContentLine>
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
        <ContentLine width={screen} style={{ marginTop: '0px', marginBottom: '6px' }}>

          <h4>Популярные товары</h4>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '2px', marginBottom: '6px' }}>

          <h4>Не забудьте купить</h4>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>

          <PopularScrollWrapper>

            { popularItems ? popularItems.map((item, index) => {

              if ( index < 2 ) {
                return (
                  <React.Fragment>
                    <CardPreview itemID={item.itemID}></CardPreview>
                  </React.Fragment>
                )
              }

            }) : null }

          </PopularScrollWrapper>

        </ContentLine>

      </Wrapper>
    </React.Fragment>
  )

}

export default ProductPage 