/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import MakeOrder from '../views/MakeOrder'
import CardPreview from '../views/CardPreview'
import RequestComponent from '../../services/request.service'
import css from '../../styles/pages/order-page'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine
const Banner = css.MainContentLineBanner

const OrderPage = () => {

  const popularItems = useSelector(state => state.catalog.popular)
  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  useEffect(() => document.documentElement.scrollTop = 0)

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
        <ContentLine style={{ marginBottom: '38px', marginTop: '0px' }}>

          <h2>Оформление заказа</h2>

        </ContentLine>
        <ContentLine style={{ marginBottom: '15px' }}>
          
          <MakeOrder/>
        
        </ContentLine>
        <ContentLine style={{ marginBottom: '38px', marginTop: '0px' }}>

          <h2>Не забудьте купить</h2>

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
                  itemID={'oil0006'}
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
        <ContentLine style={{ marginBottom: '38px', marginTop: '3px' }}>

          <h2>Посмотрите наши акции</h2>

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginBottom: '32px' }}>

          <Banner/>
          <Banner/>
          <Banner/>

        </ContentLine>
      </Main>
    </React.Fragment>
  )
}

export default OrderPage