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
import RequestComponent from '../../services/request.service'
import { useSelector } from 'react-redux'
import category from '../../img/category.png'
import creta from '../../img/creta.png'

const Main = css.Main
const ContentLine = css.MainContentLine
const Model3D = css.Model3D
const Banner = css.MainContentLineBanner

const MainPage = () => {

  const mainMenu = useSelector(state => state.main.catalogMenu)
  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
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
  generalCatalog ? aaa = random(10, generalCatalog.length - 10) : aaa = 0

  useEffect(() => {
    
    document.documentElement.scrollTop = 0
    false && console.log(random(10, generalCatalog.length - 10))
  
  },[ generalCatalog ])

  return (
    <React.Fragment>
      <RequestComponent
        make={false}
        callbackAction={'GET_CATALOG'}
        requestData={{
          type: 'GET',
          urlstring: '/products',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_CATEGORIES'}
        requestData={{
          type: 'GET',
          urlstring: '/categories',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_PROPS'}
        requestData={{
          type: 'GET',
          urlstring: '/props',
        }}
      />

      <Main>
        <ContentLine style={{ justifyContent: 'space-between', marginBottom: '32px' }}>

          <Model3D>
            <h3
              style={{
                marginTop: '36px',
                marginLeft: '40px',
                fontSize: '30px',
                width: '70%',
                lineHeight: '38px',
                color: '#2E2E2E'
              }}
            >
              Интернет-магазин аккумуляторов и автотоваров</h3>

            <img
              alt={""}
              src={creta}
              style={{
                display: 'block',
                position: 'absolute',
                width: '240px',
                left: '100%',
                top: '100%',
                borderRadius: '12px',
                marginTop: '-220px',
                marginLeft: '-290px'
              }}
            />
            
          </Model3D>
          <Model3D>
            <h3
              style={{
                marginTop: '36px',
                marginLeft: '40px',
                fontSize: '30px',
                width: '90%',
                lineHeight: '38px',
                color: '#2E2E2E'
              }}
            >
              Сеть надежных автосервисов</h3>

            <img
              alt={""}
              src={creta}
              style={{
                display: 'block',
                position: 'absolute',
                width: '240px',
                left: '50%',
                top: '100%',
                borderRadius: '12px',
                marginTop: '-220px',
                marginLeft: '-120px',
              }}
            />

          </Model3D>

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginBottom: '32px' }}>

          <Banner/>
          <Banner/>
          <Banner/>

        </ContentLine>
        <ContentLine>

          {['для легковых автомобилей', 
            'для грузовых', 
            'для мотоциклов', 
            'для лодок', 
            'тяговые аккумуляторы', 
            'промышленные', 
            'для спецтехники', 
            'для электросамокатов'].map((item, index) => {

            return (
              <Button
                key={index}
                inner={item}
                params={{
                  background: 'transparent'
                }}
                css={{
                  fontSize: '13px',
                  paddingTop: '7px',
                  paddingBottom: '8px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  marginRight: '14px'
                }}
              />
            )

          })}

        </ContentLine>
        <ContentLine style={{ marginBottom: '35px', marginTop: '9px' }}>

          <h2>Подбор аккумулятора</h2>

        </ContentLine>
        <ContentLine>

          <SelectAkk/>

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
        <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

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
                    +item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]
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
        <ContentLine style={{ marginBottom: '34px', marginTop: '1px' }}>

          <h2>Посмотрите наши акции</h2>

        </ContentLine>
        <ContentLine style={{ marginBottom: '32px', justifyContent: 'space-between' }}>

          <Banner/>
          <Banner/>
          <Banner/>

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
                && item.name[0].indexOf('PCA-035') === -1 ) {

                const ID = item.id[0]
                let idsArray = [ ID ]  
                let tagsArray = []

                false && console.log('--------------------------------')
                false && console.log('--------------------------------')

                JSON.parse(mainMenuRemote)[0].group.forEach(itemm => {

                  if ( itemm.parent_id[0] === ID ) idsArray.push(itemm.id[0])
                  if ( itemm.parent_id[0] === ID ) tagsArray.push([itemm.id[0], itemm.name[0]])

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