/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import css from '../../../styles/mobile/mobileStyles'
import { useDispatch, useSelector } from 'react-redux'
import CardPreview from '../views/CardPreview'
import { setActualCategory } from '../../../appStore/reducers/mainReducer'

import image from '../../../img/category.png'
import changeWhite from '../../../img/changeWhite.svg'
import arrowRight from '../../../img/arrowRight.png'
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
  PopularScrollWrapper,
  CatalogPage: {
    CatalogItem,
    CatalogLastItem
  }} = css.ScreenStyles

const CatalogPage = (props) => {

  const { screen = 420 } = props
  const [ pagi, setPagi ] = useState(20)
  const popularItems = useSelector(state => state.catalog.popular)
  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
  const actualCategory = useSelector(state => state.main.actualCategory)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const startRef = useRef()
  const catalogCategory = params.category

  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null

  if ( !catalogCategory ) {

    jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  } else {

    jsonCatalog 
      ? generalCatalog = JSON.parse(jsonCatalog)[0].product.filter(
          item => actualCategory.id && actualCategory.id.includes(item.groups[0].id[0].toLowerCase())
        ) : generalCatalog = null

  }

  function selectCategory(catid, title) { 
    
    dispatch(setActualCategory({ id: catid, label: title })) 
  
  }
  function scrollStart() {

    startRef.current.scrollIntoView({ behavior: 'smooth' })

  }

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
        <ContentLine width={screen} style={{ marginTop: '14px', marginBottom: '6px' }}>
          
          <h2 style={{ color: '#565656' }}>Каталог товаров</h2>
        
        </ContentLine>
        <ContentLine 
          ref={startRef}
          width={screen} 
          style={{ 
            marginTop: '12px', 
            flexWrap: 'wrap',
            alignContent: 'space-between',
            justifyContent: 'space-between',
          }}
        >

          { mainMenuRemote && JSON.parse(mainMenuRemote)[0].group.map((item, index) => {

            if ( index > 3 && item.parent_id[0] === '' && item.name[0].indexOf('уценка') === -1 ) {

              if ( item.parent_id[0] === '' 
              
                && item.name[0].indexOf('Rossko') === -1
                && item.name[0].indexOf('LC-1187') === -1
                && item.name[0].indexOf('AP182/10') === -1 
                && item.name[0].indexOf('PCA-035') === -1
                && item.name[0] !== 'Трансстартер'
                && item.name[0] !== 'Акции и уценка'
                && item.name[0] !== 'Шины и диски'
                && item.name[0] !== 'Элементы питания' ) {

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
                  <React.Fragment key={index}>
                    <CatalogItem 
                      width={screen * 0.3} 
                      height={screen * 0.3}
                      marginBottom={(screen - (screen * 0.93)) / 3}
                      onClick={() => {

                        selectCategory(idsArray, item.name[0])
                        navigate(`../catalog/${item.name[0]}`)

                      }}
                    >

                      <img 
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
                        style={{
                          display: 'block',
                          width: '63px',
                          margin: '0 auto',
                          marginBottom: '9px',
                          borderRadius: '6px',
                        }}
                      />

                      <span
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '100%',
                          height: '33px',
                          overflow: 'hidden',
                          lineHeight: '16px',
                          fontSize: '12px',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}
                      >
                      
                        { item.name[0] }</span>
                    </CatalogItem>
                  </React.Fragment>
                )

              }

            }

          })}

          <Link style={{ textDecoration: 'none', color: 'black' }} to="/podbor-akkumulyatora">
            <CatalogLastItem  
              width={screen * 0.3} 
              height={screen * 0.3}
              marginBottom={(screen - (screen * 0.93)) / 3}
            >

              <img 
                src={changeWhite} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  margin: '0 auto',
                  marginBottom: '12px'
                }}
              />

              <span
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '100%',
                  lineHeight: '17px',
                  fontSize: '12px',
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
              
                Подбор аккумуляторов</span>

            </CatalogLastItem>
          </Link>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '0px', 
            marginBottom: '4px', 
            justifyContent: 'space-between' 
          }}
        >

          <h4>Каталог всех товаров</h4>
          <span
            style={{
              display: 'none',
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

        </ContentLine> : <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '7px', 
            marginBottom: '12px',
            flexWrap: 'wrap' }}>

            { generalCatalog ? generalCatalog.map((item, index) => {

              index < 0 && console.log(item)

              if ( +item.pre_order_prices[0].region[0].price[0] !== 0 ) {
                return (
                  <React.Fragment key={index}>
                    { index < pagi && <React.Fragment>
                      <CardPreview 
                        itemID={item.id[0]}
                        title={item.name[0]}
                        description={item.description[0]}
                        coast1={+item.pre_order_prices[0].region[0].price[0] === 0
                        ? '--' : item.pre_order_prices[0].region[0].price[0]}
                        coast2={+item.pre_order_prices[0].region[0].price[0] === 0
                        ? '--' : item.pre_order_prices[0].region[0].price[0]}
                      ></CardPreview>
                    </React.Fragment> }
                  </React.Fragment>
                )
              }

            }) : null }

            <span
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '40px',
                backgroundColor: 'rgb(43, 198, 49)',
                fontSize: '14px',
                textAlign: 'center',
                marginBottom: '10px',
                lineHeight: '40px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '22px 53px 23px rgb(163 163 163 / 3%), 12px 30px 19px rgb(163 163 163 / 9%), 5px 13px 14px rgb(163 163 163 / 15%), 1px 3px 8px rgb(163 163 163 / 18%), 0px 0px 0px rgb(163 163 163 / 18%)'
              }}
              onClick={() => setPagi(prev => prev + 20)}
            >
            
              Показать еще</span>
            
            <span
              onClick={scrollStart}
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '40px',
                backgroundColor: 'white',
                color: '#565656',
                fontSize: '14px',
                textAlign: 'center',
                lineHeight: '40px',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '22px 53px 23px rgb(163 163 163 / 3%), 12px 30px 19px rgb(163 163 163 / 9%), 5px 13px 14px rgb(163 163 163 / 15%), 1px 3px 8px rgb(163 163 163 / 18%), 0px 0px 0px rgb(163 163 163 / 18%)'
              }}
            >
            
              Вернуться в начало</span>

        </ContentLine> }

      </Wrapper>
    </React.Fragment>
  )

}

export default CatalogPage 