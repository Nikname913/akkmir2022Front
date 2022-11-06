/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import css from '../../../styles/mobile/mobileStyles'
import CardPreview from '../views/CardPreview'
import AdressCard from '../views/AdressCard'
import AboutCard from '../views/AboutCard'
import Button from '../../comps/button/Button.jsx'
import ReactSelect from '../../comps/ReactSelect'
import RequestComponent from '../../../services/request.service'
import { setActualCategory } from '../../../appStore/reducers/mainReducer'
import { useDispatch, useSelector } from 'react-redux'

import caricon from '../../../img/caricon.png'
import mobileShop from '../../../img/mobileShop.png'
import mobileService from '../../../img/mobileService.png'
import mobileCatalog from '../../../img/mobileCatalog.png'
import arrowRight from '../../../img/arrowRight.png'
import change from '../../../img/change.svg'
import akkum from '../../../img/catalog/akkum.png'
import aksessuar from '../../../img/catalog/aksessuar.png'
import freeze from '../../../img/catalog/freeze.png'
import ibp from '../../../img/catalog/ibp.png'
import kosmetik from '../../../img/catalog/kosmetik.png'
import oil from '../../../img/catalog/oil.png'
import tools from '../../../img/catalog/tools.png'
import zaradka from '../../../img/catalog/zaradka.png'

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
  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  function selectCategory(catid, title) { 
    
    dispatch(setActualCategory({ id: catid, label: title })) 
  
  }

  return (
    <React.Fragment>

      <RequestComponent
        make={false}
        callbackAction={'GET_CATEGORIES'}
        requestData={{
          type: 'GET',
          urlstring: '/categories',
        }}
      />

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
                fontWeight: 'bold',
                marginBottom: '2px'
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
              action={() => {
                navigate(`../catalog`)
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
          
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/podbor-akkumulyatora">
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
          </Link>

        </ContentLine>
        { false && <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

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

        </ContentLine> }
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '2px', minHeight: '0px' }}>

          <LogoBlock style={{ fontWeight: 'bold' }}>NO LOGO</LogoBlock>
          <LogoBlock style={{ fontWeight: 'bold' }}>NO LOGO</LogoBlock>
          <LogoBlock style={{ fontWeight: 'bold' }}>NO LOGO</LogoBlock>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{
            marginTop: '8px', 
            marginBottom: '2px', 
            minHeight: '0px',
            overflowX: 'scroll',
            overflowY: 'hidden' 
          }}
        >

          { mainMenuRemote && JSON.parse(mainMenuRemote)[0].group.map((item, index) => {

            if ( item.parent_id[0] === 'f863771d-8620-11e6-a171-14dae9fa0260' 
            
              && item.name[0].indexOf('Rossko') === -1
              && item.name[0].indexOf('LC-1187') === -1
              && item.name[0].indexOf('AP182/10') === -1 
              && item.name[0].indexOf('PCA-035') === -1 ) {

                if ( item.name[0] === 'Клеммы, перемычки, провода')
                  item.name[0] = 'Клеммы' 

                if ( item.name[0] === 'Аккумуляторы автомобильные')
                  item.name[0] = 'Автоаккумуляторы'

                if ( item.name[0] === 'Аккумуляторы мотоциклетные')
                  item.name[0] = 'Мотоаккумуляторы'

                if ( item.name[0] === 'Аккумуляторы промышленные')
                  item.name[0] = 'Промышленные'   

                if ( item.name[0] === 'Крепление для АКБ')
                  item.name[0] = 'Крепления' 

                if ( index < 74 ) { 

                  const ID = item.id[0]
                  let idsArray = [ ID ]  

                  JSON.parse(mainMenuRemote)[0].group.forEach(itemm => {

                    if ( itemm.parent_id[0] === ID ) idsArray.push(itemm.id[0])

                  })
                  
                  return (
                    <CatalogTagBlock 
                      key={index}
                      onClick={() => {
                        selectCategory(idsArray, item.name[0])
                        navigate(`../catalog/${item.name[0]}`)
                      }}
                    >
                      { item.name[0] }
                    </CatalogTagBlock>
                  ) 
                  
                }
              }
          })}

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '0px' }}>

          <CatalogMenu width={screen}>

            { mainMenuRemote && JSON.parse(mainMenuRemote)[0].group.map(item => {

              if ( item.parent_id[0] === '' 
              
                && item.name[0].indexOf('Rossko') === -1
                && item.name[0].indexOf('LC-1187') === -1
                && item.name[0].indexOf('AP182/10') === -1 
                && item.name[0].indexOf('PCA-035') === -1
                && item.name[0] !== 'Трансстартер'
                && item.name[0] !== 'Акции и уценка'
                && item.name[0] !== 'Шины и диски'
                && item.name[0] !== 'Элементы питания' ) {

                  let NAME = item.name[0]

                  if ( NAME === 'Автоаксессуары' ) NAME = 'Аксессуары'
                  if ( NAME === 'Масла автомобильные' ) NAME = 'Автомасла'

                  const ID = item.id[0]
                  let idsArray = [ ID ]  

                  JSON.parse(mainMenuRemote)[0].group.forEach(itemm => {

                    if ( itemm.parent_id[0] === ID ) idsArray.push(itemm.id[0])

                  })

                  {/* import akkum from '../../../img/catalog/akkum.png' */}
                  {/* import aksessuar from '../../../img/catalog/aksessuar.png' */}
                  {/* import freeze from '../../../img/catalog/freeze.png' */}
                  {/* import ibp from '../../../img/catalog/ibp.png' */}
                  {/* import kosmetik from '../../../img/catalog/kosmetik.png' */}
                  {/* import oil from '../../../img/catalog/oil.png' */}
                  {/* import tools from '../../../img/catalog/tools.png' */}
                  {/* import zaradka from '../../../img/catalog/zaradka.png' */}

                  return (
                    <CatalogMenuItem
                      style={{ backgroundColor: 'white', borderRadius: '10px' }}
                      key={ID} 
                      width={screen}
                      onClick={() => {
                        selectCategory(idsArray, item.name[0])
                        navigate(`../catalog/${item.name[0]}`)
                      }}>
                      <img 
                        style={{ 
                          display: 'block', 
                          position: 'relative',
                          width: '50px',
                          backgroundColor: 'white'
                        }} 
                        src={
                          item.name[0] === 'Специальные жидкости'
                          ? freeze
                          : item.name[0] === 'Масла автомобильные'
                          ? oil
                          : item.name[0] === 'Автотовары'
                          ? aksessuar
                          : item.name[0] === 'Автоаксессуары'
                          ? aksessuar
                          : item.name[0] === 'Инструменты'
                          ? tools
                          : item.name[0] === 'Зарядные и пусковые устройства'
                          ? zaradka
                          : item.name[0] === 'Автохимия и автокосметика'
                          ? kosmetik
                          : item.name[0] === 'Аккумуляторы и клеммы'
                          ? akkum : null
                        } 
                        alt={""}
                      />
                      <span 
                        style={{ 
                          textAlign: 'center', 
                          fontSize: '12px',
                          display: 'block',
                          position: 'absolute',
                          top: '100%',
                          marginTop: '8px',
                          lineHeight: '16px',
                          height: '34px',
                          overflow: 'hidden', 
                        }}
                      >{ NAME }</span>
                    </CatalogMenuItem>
                  )

                }

            })}

          </CatalogMenu>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '0px', 
            marginBottom: '12px', 
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

        </ContentLine> : <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>

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
        
        { false && <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '12px' }}>
              
          <AboutCard></AboutCard>

        </ContentLine> }

      </Wrapper>
    </React.Fragment>
  )

}

export default MainPage 