/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import css from '../../styles/pages/main-page'
import Button from '../comps/button/Button.jsx'
import SelectAkk from '../../services/selectAkk.service'
import CardPreview from '../views/CardPreview'
import CategoryCard from '../views/CategoryCard'
import MAPAAX from '../../services/mainpageAccii.service'
import { useSelector } from 'react-redux'
import mainBlueAkkum from '../../img/mainBlueAkkum.png'
import mainYellowAkkum from '../../img/mainYellowAkkum.png'
import mainBlueCar from '../../img/mainBlueCar.png'
import flame from '../../img/flame.png'
import hand from '../../img/promo/promoHand.png'
import akkum from '../../img/promo/promoAkkum.png'
import shield from '../../img/promo/promoShield.png'
import shieldText from '../../img/promo/promoShieldText.png'
import eco from '../../img/promo/promoEco.png'

const Main = css.Main
const ContentLine = css.MainContentLine
const Model3D = css.Model3D
const Banner = css.MainContentLineBanner

const MainPage = () => {

  const mainMenu = useSelector(state => state.main.catalogMenu)
  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
  const mainMarksRemote = useSelector(state => state.main.catalogMarksRemote)
  const mainModelsRemote = useSelector(state => state.main.catalogModelsRemote)
  const mainGenerationsRemote = useSelector(state => state.main.catalogGenerationsRemote)
  const mainEnginesRemote = useSelector(state => state.main.catalogEnginesRemote)
  const mainDirsRemote = useSelector(state => state.main.catalogDirsRemote)
  const popularItems = useSelector(state => state.catalog.popular)
  
  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  let aaa
  let bbb

  generalCatalog ? aaa = random(10, generalCatalog.length - 10) : aaa = 0
  generalCatalog ? bbb = random(10, generalCatalog.length - 10) : bbb = 0

  useEffect(() => {
    
    document.documentElement.scrollTop = 0
    false && console.log(random(10, generalCatalog.length - 10))
    
    false && console.log(mainMarksRemote)
    console.log(mainDirsRemote)

  },[ generalCatalog ])

  return (
    <React.Fragment>
      <Main>
        <ContentLine style={{ justifyContent: 'flex-start', marginBottom: '32px' }}>

          <Model3D style={{ marginRight: '20px' }}>
            <h3
              style={{
                marginTop: '20px',
                marginLeft: '24px',
                fontSize: '30px',
                width: '70%',
                lineHeight: '38px',
                color: '#2E2E2E'
              }}
            >
              Интернет-магазин аккумуляторов и автотоваров</h3>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative',
                width: '100%',
                paddingRight: '10%',
                paddingLeft: '10%',
                marginTop: '40px'
              }}
            >
              <img
                alt={""}
                src={mainBlueAkkum}
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '160px',
                  borderRadius: '12px',
                }}
              />
              <img
                alt={""}
                src={mainYellowAkkum}
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '180px',
                  borderRadius: '12px',
                }}
              />
            </div>
            
          </Model3D>
          <Model3D style={{ marginRight: '20px' }}>
            <h3
              style={{
                marginTop: '20px',
                marginLeft: '24px',
                fontSize: '30px',
                width: '90%',
                lineHeight: '38px',
                color: '#2E2E2E'
              }}
            >
              Сеть надежных автосервисов и СТО</h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative',
                width: '100%',
                paddingRight: '10%',
                paddingLeft: '10%',
                marginTop: '30px'
              }}
            >
              <img
                alt={""}
                src={mainBlueCar}
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '280px',
                  borderRadius: '12px',
                }}
              />
            </div>

          </Model3D>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              width: '33.3333%',
              height: '400px',
            }}
          >

            <div
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '47.4444%',
                padding: '16px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)'
              }}
            >

              <div>
                <span style={{ fontSize: '14px' }}>13.10.2022</span>
                <img
                  alt={""}
                  src={flame}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '22px',
                    top: '0%',
                    left: '100%',
                    marginLeft: '-40px',
                    marginTop: '14px'
                  }}
                />
              </div>
              <div style={{ marginTop: '10px' }}>
                <span 
                  style={{ 
                    fontSize: '22px', 
                    fontWeight: 'bold', 
                    paddingRight: '30px', 
                    lineHeight: '24px' 
                  }}
                >Откроем даный сезон вместе!</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <span 
                  style={{ 
                    fontSize: '14px',
                    lineHeight: '20px' 
                  }}
                >Приятный бонус! При покупке аккумуляторной батареи у нас вы всегда сможете пройти ее бесплатную диагностику и обслуживание в наших сервисных центрах. Достаточно захватить с собой чек и гарантийный талон</span>
              </div>
              <div 
                style={{ 
                  marginTop: '8px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '60px',
                  marginLeft: 'auto',
                  marginRight: 'auto', 
                }}
              >

                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '10px',
                      height: '10px',
                      border: '1px solid #565656',
                      backgroundColor: '#565656',
                      borderRadius: '50%'
                    }}
                  />
                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '10px',
                      height: '10px',
                      border: '1px solid #565656',
                      backgroundColor: 'transparent',
                      borderRadius: '50%'
                    }}
                  />
                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '10px',
                      height: '10px',
                      border: '1px solid #565656',
                      backgroundColor: 'transparent',
                      borderRadius: '50%'
                    }}
                  />
                  <span
                    style={{
                      display: 'block',
                      position: 'relative',
                      width: '10px',
                      height: '10px',
                      border: '1px solid #565656',
                      backgroundColor: 'transparent',
                      borderRadius: '50%'
                    }}
                  />

              </div>

            </div>
            <div
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '47.4444%',
                background: 'radial-gradient(99.52% 532.85% at 84.55% 19.23%, #E3FFEC 0%, #E0FFFC 100%)',
                borderRadius: '12px',
                boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)'
              }}
            ></div>

          </div>

        </ContentLine>
        <ContentLine style={{ marginBottom: '35px', marginTop: '0px' }}>

          <h2>Подбор аккумулятора</h2>

        </ContentLine>
        <ContentLine>

          <SelectAkk 
            categories={mainMenuRemote}
            marks={mainMarksRemote} 
            models={mainModelsRemote}
            gens={mainGenerationsRemote}
            engines={mainEnginesRemote}
          />

        </ContentLine>
        <ContentLine style={{ flexWrap: 'wrap', marginTop: '14px' }}>

          { mainDirsRemote && JSON.parse(mainDirsRemote)[0].direction.map((item, index) => {

            return (
              <Button
                key={index}
                inner={item.name[0]}
                params={{
                  background: 'white'
                }}
                css={{
                  fontSize: '13px',
                  paddingTop: '7px',
                  paddingBottom: '10px',
                  paddingLeft: '14px',
                  paddingRight: '14px',
                  marginRight: '14px',
                  marginBottom: '14px'
                }}
              />
            )

          })}

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginBottom: '22px' }}>

          <Banner 
            style={{ 
              background: 'radial-gradient(110.83% 1056.5% at -4.45% 15.94%, #2E2E2E 36.97%, #201C51 100%)',
              boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)'
            }}
          >
            <h3
              style={{
                display: 'block',
                position: 'relative',
                color: 'white',
                fontSize: '28px',
                width: '76%',
                lineHeight: '36px'
              }}
            >
            
              Бесплатная установка в сервисных центрах</h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative',
                width: '24%'
              }}
            >
              <img
                alt={""}
                src={hand}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '150%',
                  top: '0%',
                  left: '0%',
                  marginLeft: '-23px',
                  marginTop: '-160px'
                }}
              />
            </div>
          </Banner>
          <Banner 
            style={{ 
              background: 'radial-gradient(100.31% 865.46% at 13.16% 77.19%, #2E2E2E 41.64%, #30704A 100%)',
              boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)',
              flexWrap: 'wrap',
            }}
          >
            <h3
              style={{
                display: 'block',
                position: 'relative',
                color: 'white',
                fontSize: '28px',
                width: '70%',
                lineHeight: '36px'
              }}
            >
            
              Скидка за ваш аккумулятор</h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative',
                width: '24%'
              }}
            >

              <img
                alt={""}
                src={akkum}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '204%',
                  marginBottom: '2px',
                  marginTop: '-20px',
                  marginLeft: '-66px',
                }}
              />
            </div>
            <div>
              <img
                alt={""}
                src={eco}
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '80px',
                  marginBottom: '2px',
                }}
              />
            </div>
          </Banner>
          <Banner 
            style={{ 
              background: 'radial-gradient(129.66% 1235.96% at 0% 10.31%, #2E2E2E 32.05%, #6C0808 100%)',
              boxShadow: '22px 53px 23px rgba(163, 163, 163, 0.03), 12px 30px 19px rgba(163, 163, 163, 0.09), 5px 13px 14px rgba(163, 163, 163, 0.15), 1px 3px 8px rgba(163, 163, 163, 0.18), 0px 0px 0px rgba(163, 163, 163, 0.18)',
              flexWrap: 'wrap', 
            }}
          >
            <h3
              style={{
                display: 'block',
                position: 'relative',
                color: 'white',
                fontSize: '28px',
                width: '70%',
                lineHeight: '36px'
              }}
            >
            
              Расширенная гарантия</h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                position: 'relative',
                width: '24%'
              }}
            >

              <img
                alt={""}
                src={shield}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '218%',
                  marginBottom: '2px',
                  marginTop: '-40px',
                  marginLeft: '-66px',
                }}
              />
              <img
                alt={""}
                src={shieldText}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '50%',
                  marginBottom: '2px',
                  marginTop: '-58px',
                  marginLeft: '-66px',
                }}
              />
            </div>
            <div>
              <img
                alt={""}
                src={eco}
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '80px',
                  marginBottom: '2px',
                  opacity: '0'
                }}
              />
            </div>
          </Banner>

        </ContentLine>
        <ContentLine style={{ marginBottom: '35px', marginTop: '9px', position: 'relative' }}>

          <h2>Популярные товары</h2>
          <h4
            style={{
              width: '180px',
              textAlign: 'right',
              display: 'block',
              position: 'absolute',
              left: '100%',
              marginLeft: '-180px',
              color: 'grey',
              marginTop: '26px'
            }}
          >Смотреть все товары</h4>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

          { popularItems ? popularItems.map((item, index) => {

            return (
              <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 15.833333, mleft: 0 }}
                  image={null}
                  title={item.name}
                  description={item.discr}
                  coast1={item.coast1}
                  coast2={item.coast2}
                  itemID={item.itemID}
                />
                { index < 5 && <span 
                  style={{ 
                    display: 'block',
                    position: 'relative',
                    width: '1%',
                    height: '300px',
                    boxSizing: 'border-box'
                  }}
                ></span> }
              </React.Fragment>
            )

          }) : null }

        </ContentLine> : 
        <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: '0px', marginTop: '-2px' }}>

          { generalCatalog ? generalCatalog.map((item, index) => {

            false && console.log('--------------------------------')
            false && console.log(item)
            false && console.log('--------------------------------')

            return <React.Fragment key={index}>{
              index > aaa && index < aaa + 7 && <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 15.833333, mleft: 0 }}
                  image={null}
                  title={item.name}
                  popular={true}
                  description={[
                    `Бренд : ${item.properties[0].property[0].value[0]}`,
                    `Производитель : ${item.properties[0].property[1].value[0]}`,
                  ]}
                  coast1={
                    +item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]
                  }
                  coast2={
                    !item.pre_order_prices[0].region[0].price_discount
                      ? item.pre_order_prices[0].region[0].price[0] : item.pre_order_prices[0].region[0].price_discount[0]
                  }
                  itemID={item.id[0]}
                />
                { index < aaa + 6 && <span 
                  style={{ 
                    display: 'block',
                    position: 'relative',
                    width: '1%',
                    height: '300px',
                    boxSizing: 'border-box'
                  }}
                ></span> }
              </React.Fragment>
            }</React.Fragment>

          }) : null }

        </ContentLine> }
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

          { popularItems ? popularItems.map((item, index) => {

            return (
              <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 15.833333, mleft: 0 }}
                  image={null}
                  title={item.name}
                  description={item.discr}
                  coast1={item.coast1}
                  coast2={item.coast2}
                  itemID={item.itemID}
                />
                { index < 5 && <span 
                  style={{ 
                    display: 'block',
                    position: 'relative',
                    width: '1%',
                    height: '300px',
                    boxSizing: 'border-box'
                  }}
                ></span> }
              </React.Fragment>
            )

          }) : null }

        </ContentLine> : 
        <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: '18px' }}>

          { generalCatalog ? generalCatalog.map((item, index) => {

            false && console.log('--------------------------------')
            false && console.log(item)
            false && console.log('--------------------------------')

            return <React.Fragment key={index}>{
              index > bbb && index < bbb + 7 && <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 15.833333, mleft: 0 }}
                  image={null}
                  title={item.name}
                  popular={true}
                  description={[
                    `Бренд : ${item.properties[0].property[0].value[0]}`,
                    `Производитель : ${item.properties[0].property[1].value[0]}`,
                  ]}
                  coast1={
                    +item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]
                  }
                  coast2={
                    !item.pre_order_prices[0].region[0].price_discount
                      ? item.pre_order_prices[0].region[0].price[0] : item.pre_order_prices[0].region[0].price_discount[0]
                  }
                  itemID={item.id[0]}
                />
                { index < bbb + 6 && <span 
                  style={{ 
                    display: 'block',
                    position: 'relative',
                    width: '1%',
                    height: '300px',
                    boxSizing: 'border-box'
                  }}
                ></span> }
              </React.Fragment>
            }</React.Fragment>

          }) : null }

        </ContentLine> }
        <ContentLine style={{ marginBottom: '34px', marginTop: '1px' }}>

          <h2>Посмотрите наши акции</h2>

        </ContentLine>
        <ContentLine style={{ marginBottom: '32px', justifyContent: 'space-between' }}>

          <MAPAAX></MAPAAX>

        </ContentLine>
        <ContentLine style={{ marginBottom: '36px' }}>

          <h2>Каталог товаров</h2>

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>

          { !mainMenuRemote ? mainMenu.map((item, index) => {

              return (
                <React.Fragment key={index}>
                  <CategoryCard 
                    catid={item.id}
                    title={item.label}
                    tags={item.tags}
                  />
                </React.Fragment>
              )

            }) : JSON.parse(mainMenuRemote)[0].group.map((item, index) => {

              false && console.log(item.name[0])

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
                let tagsArray = []

                false && console.log('--------------------------------')
                false && console.log(item.name[0])
                false && console.log(item.id[0])
                false && console.log('--------------------------------')

                JSON.parse(mainMenuRemote)[0].group.forEach(itemm => {

                  if ( itemm.parent_id[0] === ID ) idsArray.push(itemm.id[0])
                  if ( itemm.parent_id[0] === ID ) tagsArray.push([itemm.id[0], itemm.name[0]])

                  if ( itemm.parent_id[0] === 'f863771d-8620-11e6-a171-14dae9fa0260') {

                    false && console.log('--------------------------------')
                    false && console.log(itemm.name[0])
                    false && console.log(itemm.id[0])
                    false && console.log('--------------------------------')

                  }

                })

                false && console.log(idsArray)

                return (
                  <React.Fragment key={index}>
                    <CategoryCard 
                      catid={idsArray}
                      title={item.name[0]}
                      tags={tagsArray}
                    />
                  </React.Fragment>
                )

              }
            })}

        </ContentLine>
      </Main>
    </React.Fragment>
  )
}

export default MainPage