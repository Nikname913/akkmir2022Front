/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../../styles/mobile/mobileStyles'
import CardPreview from '../views/CardPreview'
import AdressCard from '../views/AdressCard'
import AboutCard from '../views/AboutCard'
import Button from '../../comps/button/Button.jsx'
import ReactSelect from '../../comps/ReactSelect'
import { useSelector } from 'react-redux'

import caricon from '../../../img/caricon.png'
import mobileShop from '../../../img/mobileShop.png'
import mobileService from '../../../img/mobileService.png'
import mobileCatalog from '../../../img/mobileCatalog.png'
import arrowRight from '../../../img/arrowRight.png'
import change from '../../../img/change.png'

const { Wrapper, 
  ContentLine, 
  UpMenuBlock, 
  DiliveryBanner, 
  SelectAkkum,
  LogoBlock,
  CatalogTagBlock,
  CatalogMenu,
  CatalogMenuItem,
  PopularScrollWrapper } = css.ScreenStyles

const MainPage = (props) => {

  const { screen = 420 } = props
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

          <UpMenuBlock width={screen} style={{ marginRight: '12px', cursor: 'pointer' }}>

            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'absolute',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#FFB600',
                left: '100%',
                top: '100%',
                marginTop: '-32px',
                marginLeft: '-33px',
                border: '2px solid rgba(86, 86, 86, 1)'
              }}
            >
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '11px'
                }} 
                src={mobileShop} 
                alt={""}
              />
            </span>
            <p
              style={{
                fontSize: '13px',
                textAlign: 'center',
                display: 'block',
                position: 'relative',
                lineHeight: '17px',
                fontWeight: 'bold'
              }}
            >
              
              Интернет магазин аккумуляторов и автотоваров</p>

          </UpMenuBlock>
          <UpMenuBlock width={screen} style={{ cursor: 'pointer' }}>
            
            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'absolute',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#FFB600',
                left: '100%',
                top: '100%',
                marginTop: '-32px',
                marginLeft: '-33px',
                border: '2px solid rgba(86, 86, 86, 1)'
              }}
            >
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '13px',
                  marginLeft: '0.2px',
                }} 
                src={mobileService} 
                alt={""}
              />
            </span>
            <p
              style={{
                fontSize: '13px',
                textAlign: 'center',
                display: 'block',
                position: 'relative',
                lineHeight: '17px',
                fontWeight: 'bold'
              }}
            >
              
              Автосервисы</p>

          </UpMenuBlock>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <DiliveryBanner width={screen}>

            <h2 style={{ color: '#FFB600' }}>МОЛНИЕНОСНАЯ</h2>
            <h2 style={{ color: 'white', marginBottom: '12px' }}>ДОСТАВКА</h2>

            <p
              style={{
                display: 'block',
                color: 'white',
                lineHeight: '20px',
                width: '200px'
              }}
            >
              
              Заказывай сегодня, доставим сегодня</p>

            <Button  
              params={{
                width: 160,
                height: 36,
                background: '#FFB600'
              }}
              inner={"В каталог"}
              css={{
                fontSize: '13px',
                boxShadow: 'none',
                color: 'white',
                marginRight: '24px',
                marginTop: '20px'
              }}
            />

            <img 
              style={{ 
                display: 'block', 
                position: 'absolute',
                width: `${screen * 0.4}px`,
                left: `${screen * 0.6}px`,
                top: '100%',
                marginLeft: '-36px',
                marginTop: '-100px'
              }} 
              src={caricon} 
              alt={""}
            />

          </DiliveryBanner>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <SelectAkkum width={screen}>
              

            <img 
              style={{ 
                display: 'block', 
                position: 'absolute',
                width: '19px',
                left: '0px',
                marginLeft: '19px'
              }} 
              src={change} 
              alt={""}
            />  
            <h4 
              style={{ 
                marginBottom: '1px', 
                marginTop: '0px', 
                textAlign: 'center',
                cursor : 'pointer',
              }}
            >
            
              Подбор аккумулятора</h4>
          </SelectAkkum>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <SelectAkkum width={screen}>
            <h4 style={{ marginBottom: '18px', marginTop: '2px' }}>Подбор аккумулятора</h4>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >

              <Button  
                params={{
                  width: 154,
                  height: 35,
                  background: '#2E2E2E'
                }}
                inner={"По характеристикам"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '10px'
                }}
              />

              <Button  
                params={{
                  width: 154,
                  height: 35,
                  background: '#2E2E2E'
                }}
                inner={"По характеристикам"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px'
                }}
              />

            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >

              <Button  
                params={{
                  width: 154,
                  height: 35,
                  background: '#2E2E2E'
                }}
                inner={"Автомобильные"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '10px'
                }}
              />

              <Button  
                params={{
                  width: 154,
                  height: 35,
                  background: '#2E2E2E'
                }}
                inner={"Грузовые авто"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px'
                }}
              />

            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Выберите марку"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
              <div style={{ width: '12px' }}></div>
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Модель авто"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Поколение авто"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
              <div style={{ width: '12px' }}></div>
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Двигатель авто"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >

              <Button  
                params={{
                  width: 154,
                  height: 35,
                  background: '#2E2E2E'
                }}
                inner={"Показать"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '10px'
                }}
              />

              <Button  
                params={{
                  width: 174,
                  height: 35,
                  background: '#2BC631'
                }}
                inner={"Подбор специалистом"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px'
                }}
              />

            </div>

          </SelectAkkum>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '2px', minHeight: '0px' }}>

          <LogoBlock style={{ fontWeight: 'bold' }}>VARTA</LogoBlock>
          <LogoBlock style={{ fontWeight: 'bold' }}>VARTA AKKUM</LogoBlock>
          <LogoBlock style={{ fontWeight: 'bold' }}>VARTA</LogoBlock>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '8px', marginBottom: '2px', minHeight: '0px' }}>

          <CatalogTagBlock>для легковых</CatalogTagBlock>
          <CatalogTagBlock>для грузовых</CatalogTagBlock>
          <CatalogTagBlock>для мотоциклов</CatalogTagBlock>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '30px' }}>

          <CatalogMenu width={screen}>

            <CatalogMenuItem width={screen}>
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '30px'
                }} 
                src={mobileCatalog} 
                alt={""}
              />
              <span 
                style={{ 
                  textAlign: 'center', 
                  fontSize: '13px',
                  display: 'block',
                  position: 'absolute',
                  top: '100%',
                  marginTop: '8px' 
                }}
              >Масла</span>
            </CatalogMenuItem>
            <CatalogMenuItem width={screen}>
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '30px'
                }} 
                src={mobileCatalog} 
                alt={""}
              />
              <span
                style={{ 
                  textAlign: 'center', 
                  fontSize: '13px',
                  display: 'block',
                  position: 'absolute',
                  top: '100%',
                  marginTop: '8px' 
                }}
              >Жидкости</span>
            </CatalogMenuItem>
            <CatalogMenuItem width={screen}>
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '30px'
                }} 
                src={mobileCatalog} 
                alt={""}
              />
              <span
                style={{ 
                  textAlign: 'center', 
                  fontSize: '13px',
                  display: 'block',
                  position: 'absolute',
                  top: '100%',
                  marginTop: '8px' 
                }}
              >Электро</span>
            </CatalogMenuItem>
            <CatalogMenuItem width={screen}>
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '30px'
                }} 
                src={mobileCatalog} 
                alt={""}
              />
              <span
                style={{ 
                  textAlign: 'center', 
                  fontSize: '13px',
                  display: 'block',
                  position: 'absolute',
                  top: '100%',
                  marginTop: '8px' 
                }}
              >ИБП</span>
            </CatalogMenuItem>
            <CatalogMenuItem width={screen}>
              <img 
                style={{ 
                  display: 'block', 
                  position: 'relative',
                  width: '30px'
                }} 
                src={mobileCatalog} 
                alt={""}
              />
              <span
                style={{ 
                  textAlign: 'center', 
                  fontSize: '13px',
                  display: 'block',
                  position: 'absolute',
                  top: '100%',
                  marginTop: '8px' 
                }}
              >Инструмент</span>
            </CatalogMenuItem>

          </CatalogMenu>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '5px', 
            marginBottom: '6px', 
            justifyContent: 'space-between' 
          }}
        >

          <h4>Популярные товары</h4>
          <span
            style={{
              display: 'block',
              position: 'relative',
              fontSize: '13px',
              color: 'grey',
              cursor: 'pointer',
              paddingRight: '33px'
            }}
          >
            <img 
              style={{ 
                display: 'block', 
                position: 'absolute',
                width: '18px',
                left: '100%',
                marginLeft: '-24px',
                marginTop: '1px'
              }} 
              src={arrowRight} 
              alt={""}
            />
            Смотреть все</span>

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
        <ContentLine width={screen} style={{ marginTop: '5px', marginBottom: '6px' }}>

          <h4>Адреса магазинов и сервисов</h4>

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>

          <PopularScrollWrapper>

            <AdressCard></AdressCard>

          </PopularScrollWrapper>

        </ContentLine>
        { false && <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>
              
          <AboutCard></AboutCard>

        </ContentLine> }

      </Wrapper>
    </React.Fragment>
  )

}

export default MainPage 