/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../styles/pages/main-page'
import Button from '../comps/button/Button.jsx'
import SelectAkk from '../../services/selectAkk.service'
import CardPreview from '../views/CardPreview'
import CategoryCard from '../views/CategoryCard'
import { useSelector, useDispatch } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine
const Model3D = css.Model3D
const Banner = css.MainContentLineBanner

const MainPage = () => {

  const mainMenu = useSelector(state => state.main.catalogMenu)
  const popularItems = useSelector(state => state.catalog.popular)
  const dispatch = useDispatch()

  return (
    <Main>
      <ContentLine style={{ justifyContent: 'space-between', marginBottom: '32px' }}>

        <Model3D>
          <h3
            style={{
              marginTop: '30px',
              marginLeft: '40px',
            }}
          >
            Интернет-магазин аккумуляторов и автотоваров
          </h3>
        </Model3D>
        <Model3D>
          <h3
            style={{
              marginTop: '30px',
              marginLeft: '40px',
            }}
          >
            Сеть надежных автосервисов и сто
          </h3>
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
          'для электросамокатов'].map(item => {

          return (
            <Button
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
      <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>

        { popularItems ? popularItems.map((item, index) => {

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
      <ContentLine style={{ marginBottom: '34px', marginTop: '12px' }}>

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

        { mainMenu 
          ? mainMenu.map(item => {

            return (
              <CategoryCard 
                catid={item.id}
                title={item.label}
                tags={item.tags}
              />
            )

          }) : null }

      </ContentLine>
    </Main>
  )

}

export default MainPage