/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/pages/product-page'
import CardView from '../views/CardView'
import CardPreview from '../views/CardPreview'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine

const ProductPage = () => {

  const items = useSelector(state => state.catalog.catalog)
  const itemLocal = useSelector(state => state.main.actualItem)

  return (
    <Main>
      <ContentLine style={{ marginBottom: '38px', marginTop: '0px', position: 'relative' }}>

        { items.map(item => {

          if ( item.itemID === itemLocal ) {

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
        
        { items.map(item => {

          if ( item.itemID === itemLocal ) {

            return (
              <CardView coast={item.coast1}/>
            )

        }})}

      </ContentLine>
      <ContentLine style={{ marginBottom: '38px', marginTop: '16px' }}>

        <h2>Товары с похожими характеристиками</h2>

      </ContentLine>
      <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

        { items ? items.map((item, index) => {

          return (
            <React.Fragment>
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

        <h2>Не забудьте купить</h2>

      </ContentLine>
      <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: '34px' }}>

        { items ? items.map((item, index) => {

          return (
            <React.Fragment>
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
    </Main>
  )

}

export default ProductPage