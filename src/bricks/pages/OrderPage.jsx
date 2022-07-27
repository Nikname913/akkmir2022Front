/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import MakeOrder from '../views/MakeOrder'
import CardPreview from '../views/CardPreview'
import css from '../../styles/pages/order-page'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine
const Banner = css.MainContentLineBanner

const OrderPage = () => {

  const popularItems = useSelector(state => state.catalog.popular)

  return (
    <Main>
      <ContentLine style={{ marginBottom: '38px', marginTop: '0px' }}>

        <h2>Оформление заказа</h2>

      </ContentLine>
      <ContentLine style={{ marginBottom: '16px' }}>
        
        <MakeOrder/>
      
      </ContentLine>
      <ContentLine style={{ marginBottom: '38px', marginTop: '0px' }}>

        <h2>Не забудьте купить</h2>

      </ContentLine>
      <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

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

      </ContentLine>
      <ContentLine style={{ marginBottom: '38px', marginTop: '16px' }}>

        <h2>Посмотрите наши акции</h2>

      </ContentLine>
      <ContentLine style={{ justifyContent: 'space-between', marginBottom: '32px' }}>

        <Banner/>
        <Banner/>
        <Banner/>

      </ContentLine>
    </Main>
  )

}

export default OrderPage