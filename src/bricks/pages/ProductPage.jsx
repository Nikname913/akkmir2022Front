/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import css from '../../styles/pages/product-page'
import CardView from '../views/CardView'
import CardPreview from '../views/CardPreview'
import RequestComponent from '../../services/request.service'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine

const ProductPage = () => {

  const items = useSelector(state => state.catalog.catalog)
  const itemLocal = useSelector(state => state.main.actualItem)

  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  useEffect(() => document.documentElement.scrollTop = 0, [])

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

      <Main>
        <ContentLine style={{ marginBottom: '38px', marginTop: '0px', position: 'relative' }}>

          { generalCatalog.map(item => {

            if ( item.id[0] === itemLocal ) {

              return (
                <h2>{ item.name }</h2>
              )

          }})}
          <h4
            style={{
              width: '220px',
              textAlign: 'right',
              display: 'block',
              position: 'absolute',
              left: '100%',
              marginLeft: '-258px',
              color: 'grey',
              marginTop: '36px'
            }}
          >{"Этот товар купили 124 раза"}</h4>

        </ContentLine>
        <ContentLine>
          { generalCatalog.map(item => {

            console.log(item)
            console.log('--------------------------------')

            if ( item.id[0] === itemLocal ) {

              return (
                <CardView 
                  title={item.name[0]}
                  descr={item.description[0]}
                  properties={item.properties}
                  coast={+item.pre_order_prices[0].region[0].price[0] === 0
                    ? '--' : item.pre_order_prices[0].region[0].price[0]}
                />
              )

          }})}
        </ContentLine>
        <ContentLine style={{ marginBottom: '38px', marginTop: '16px' }}>

          <h2>Товары с похожими характеристиками</h2>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

          { items ? items.map((item, index) => {

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

            return <React.Fragment>{
              index < 6 && <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 15.833333, mleft: 0 }}
                  image={null}
                  title={item.name}
                  description={[
                    'Гарантия : 6 месяцев',
                    'Емкость Ач : 9',
                    'Полярность : Обратная',
                    'Пусковой ток (А) : 480',
                    'Размер (Д*Ш*В) : 207*175*175'
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
            }</React.Fragment>

          }) : null }

        </ContentLine> }
        <ContentLine style={{ marginBottom: '38px', marginTop: '2px' }}>

          <h2>Не забудьте купить</h2>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

          { items ? items.map((item, index) => {

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

            return <React.Fragment>{
              index < 6 && <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 15.833333, mleft: 0 }}
                  image={null}
                  title={item.name}
                  description={[
                    'Гарантия : 6 месяцев',
                    'Емкость Ач : 9',
                    'Полярность : Обратная',
                    'Пусковой ток (А) : 480',
                    'Размер (Д*Ш*В) : 207*175*175'
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
            }</React.Fragment>

          }) : null }

        </ContentLine> }
      </Main>
    </React.Fragment>
  )
}

export default ProductPage