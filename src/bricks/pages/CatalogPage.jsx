/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import css from '../../styles/pages/catalog-page'
import ReactSelect from '../comps/ReactSelect'
import Input from '../comps/input/Input.jsx'
import Button from '../comps/button/Button.jsx'
import CardPreview from '../views/CardPreview'
import RequestComponent from '../../services/request.service'
import arrowImg from '../../img/arrow.png'
import { useSelector } from 'react-redux'

const Main = css.Main
const ContentLine = css.MainContentLine
const PodborWindow = css.PodborWindow
const PodborWindowContentLine = css.PodborWindowContentLine

const CatalogPage = () => {

  const items = useSelector(state => state.catalog.catalog)
  const actualCategory = useSelector(state => state.main.actualCategory)
  const params = useParams()
  const catalogCategory = params.category

  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  if ( !catalogCategory ) {

    jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  } else {

  jsonCatalog 
    ? generalCatalog = JSON.parse(jsonCatalog)[0].product.filter(
        item => actualCategory.id.includes(item.groups[0].id[0].toLowerCase())
      ) : generalCatalog = null

  }

  useEffect(() => document.documentElement.scrollTop = 0,[])
  useEffect(() => false && console.log(catalogCategory),[])
  useEffect(() => false && console.log(actualCategory),[])

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
        <ContentLine style={{ justifyContent: 'space-between' }}>
          <PodborWindow width={'65%'}>

            <PodborWindowContentLine>
              <h4>По параметрам</h4>
            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <span style={{ display: 'block', width: '180px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Бренд продукта</span>
              <span style={{ display: 'block', width: '180px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Размер (Д*Ш*В)</span>
              <span style={{ display: 'block', width: '140px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Полярность</span>
              <span style={{ display: 'block', width: '280px', fontSize: '13px', fontWeight: 'bold' }}>Пусковой ток аккумулятора</span>

            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <ReactSelect 
                placeholder={"Выберите бренд"}
                params={{ width: 180 }}
                data={[
                  { value: '001', label: 'no brand' },
                  { value: '002', label: 'no brand' },
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                placeholder={"Выберите размер"}
                params={{ width: 180 }}
                data={[
                  { value: '001', label: 'no size' },
                  { value: '002', label: 'no size' },
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                placeholder={"Полярность"}
                params={{ width: 140 }}
                data={[
                  { value: '001', label: 'прямая' },
                  { value: '002', label: 'обратная' },
                ]}
              />

              <span style={{ width: '10px' }}></span>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  width: '280px'
                }}
              >

                <Input
                  params={{ width: 60 }}
                  type={"text"}
                  placeholder={"10"}
                  inputCss={{ border: 'none', textAlign: 'center', paddingRight: '12px' }}
                  css={{ marginTop: '0px' }}
                />
                <div
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '140px',
                    height: '4px',
                    backgroundColor: '#565656',
                    marginLeft: '2px'
                  }}
                >

                  <span 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#565656',
                      top: '50%',
                      marginTop: '-5px',
                      left: '0'
                    }}
                  ></span>
                  <span 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#565656',
                      top: '50%',
                      marginTop: '-5px',
                      left: '100%',
                      marginLeft: '-10px'
                    }}
                  ></span>

                </div>
                <Input
                  params={{ width: 60 }}
                  type={"text"}
                  placeholder={"50"}
                  inputCss={{ border: 'none', textAlign: 'center', paddingRight: '12px' }}
                  css={{ marginTop: '0px' }}
                />

              </div>

            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <span style={{ display: 'block', width: '140px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Тип клемм</span>
              <span style={{ display: 'block', width: '140px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Технология</span>
              <span style={{ display: 'block', width: '220px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Емкость аккумулятора Ач</span>
              <span style={{ display: 'block', width: '280px', fontSize: '13px', fontWeight: 'bold' }}>Стоимость аккумулятора</span>

            </PodborWindowContentLine>
            <PodborWindowContentLine style={{ marginBottom: '0px' }}>

              <ReactSelect 
                placeholder={"Выбрать"}
                params={{ width: 140 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                placeholder={"Выбрать"}
                params={{ width: 140 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
              />

              <span style={{ width: '10px' }}></span>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  width: '220px'
                }}
              >

                <Input
                  params={{ width: 60 }}
                  type={"text"}
                  placeholder={"100"}
                  inputCss={{ border: 'none', textAlign: 'center', paddingRight: '12px' }}
                  css={{ marginTop: '0px' }}
                />
                <div
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#565656',
                    marginLeft: '0px'
                  }}
                >

                  <span 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#565656',
                      top: '50%',
                      marginTop: '-5px',
                      left: '0'
                    }}
                  ></span>
                  <span 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#565656',
                      top: '50%',
                      marginTop: '-5px',
                      left: '100%',
                      marginLeft: '-10px'
                    }}
                  ></span>

                </div>
                <Input
                  params={{ width: 60 }}
                  type={"text"}
                  placeholder={"5000"}
                  inputCss={{ border: 'none', textAlign: 'center', paddingRight: '12px' }}
                  css={{ marginTop: '0px' }}
                />

              </div>

              <span style={{ width: '10px' }}></span>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  width: '280px'
                }}
              >

                <Input
                  params={{ width: 60 }}
                  type={"text"}
                  placeholder={"2500"}
                  inputCss={{ border: 'none', textAlign: 'center', paddingRight: '12px' }}
                  css={{ marginTop: '0px' }}
                />
                <div
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '140px',
                    height: '4px',
                    backgroundColor: '#565656',
                    marginLeft: '2px'
                  }}
                >

                  <span 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#565656',
                      top: '50%',
                      marginTop: '-5px',
                      left: '0'
                    }}
                  ></span>
                  <span 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#565656',
                      top: '50%',
                      marginTop: '-5px',
                      left: '100%',
                      marginLeft: '-10px'
                    }}
                  ></span>

                </div>
                <Input
                  params={{ width: 60 }}
                  type={"text"}
                  placeholder={"8300"}
                  inputCss={{ border: 'none', textAlign: 'center', paddingRight: '12px' }}
                  css={{ marginTop: '0px' }}
                />

              </div>

            </PodborWindowContentLine>

          </PodborWindow>
          <PodborWindow width={'34%'}>

            <PodborWindowContentLine>
              <h4>По автомобилям</h4>
            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <span style={{ display: 'block', width: '160px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Марка автомобиля</span>
              <span style={{ display: 'block', width: '160px', fontSize: '13px', fontWeight: 'bold' }}>Модель автомобиля</span>

            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <ReactSelect 
                placeholder={"Выбор марки"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                placeholder={"Выбор модели"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
              />

            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <span style={{ display: 'block', width: '160px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Объем двигателя</span>
              <span style={{ display: 'block', width: '160px', fontSize: '13px', fontWeight: 'bold' }}>Поколение</span>

            </PodborWindowContentLine>
            <PodborWindowContentLine style={{ marginBottom: '0px' }}>

              <ReactSelect 
                placeholder={"Двигатель"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                placeholder={"Поколение"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
              />

            </PodborWindowContentLine>

          </PodborWindow>
        </ContentLine>
        <ContentLine style={{ justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: '6px' }}>

          <Button
            inner={"для Nexia"}
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

          <Button
            inner={"для Kia Optima"}
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

          <Button
            inner={"для Solaris"}
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

          <Button
            inner={"для Solaris"}
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

          <Button
            inner={"для Nexia"}
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

          <Button
            inner={"для Kia Optima"}
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

          <Button
            inner={"для Solaris"}
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

          <Button
            inner={"для Solaris"}
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

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginTop: '2px', marginBottom: '27px' }}>

          <h2>{ catalogCategory ? catalogCategory : 'Все товары' }</h2>
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <Button
              inner={"по цене"}
              params={{
                background: 'transparent'
              }}
              css={{
                fontSize: '13px',
                paddingTop: '7px',
                paddingBottom: '8px',
                paddingLeft: '34px',
                paddingRight: '10px',
                marginRight: '14px'
              }}
              children={
                <img
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '14px',
                    top: '50%',
                    left: '0%',
                    marginTop: '-8px',
                    marginLeft: '10px'
                  }}
                  src={arrowImg}
                  alt={""}
                />
              }
            />
            <Button
              inner={"по популярности"}
              params={{
                background: 'transparent'
              }}
              css={{
                fontSize: '13px',
                paddingTop: '7px',
                paddingBottom: '8px',
                paddingLeft: '34px',
                paddingRight: '10px',
              }}
              children={
                <img
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '14px',
                    top: '50%',
                    left: '0%',
                    marginTop: '-8px',
                    marginLeft: '10px'
                  }}
                  src={arrowImg}
                  alt={""}
                />
              }
            />
          </div>

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

            return <React.Fragment key={index}>{
              index < 200 && <React.Fragment key={index}>
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
                
                { (( index < 5 ) || 
                   ( index > 5 && index < 11 )  ||
                   ( index > 11 && index < 17 ) ||
                   ( index > 17 && index < 23 ) ||
                   ( index > 23 && index < 29 ) ||
                   ( index > 29 && index < 35 ) ||
                   ( index > 35 && index < 41 ) ||
                   ( index > 41 && index < 47 ) ||
                   ( index > 47 && index < 53 ) ||
                   ( index > 53 && index < 59 ) ||
                   ( index > 59 && index < 65 ) ||
                   ( index > 65 && index < 71 ) ||
                   ( index > 71 && index < 77 ) ||
                   ( index > 77 && index < 83 ) ||
                   ( index > 83 && index < 89 ) ||
                   ( index > 89 && index < 95 ) ||
                   ( index > 95 && index < 101 ) ||
                   ( index > 101 && index < 107 ) ||
                   ( index > 107 && index < 113 ) ||
                   ( index > 113 && index < 119 ) ||
                   ( index > 119 && index < 125 ) ||
                   ( index > 125 && index < 131 ) ||
                   ( index > 131 && index < 137 ) ||
                   ( index > 137 && index < 143 ) ||
                   ( index > 143 && index < 149 ) ||
                   ( index > 149 && index < 155 ) ||
                   ( index > 155 && index < 161 ) ||
                   ( index > 161 && index < 167 ) ||
                   ( index > 167 && index < 173 ) ||
                   ( index > 173 && index < 179 ) ||
                   ( index > 179 && index < 185 ) ||
                   ( index > 185 && index < 191 ) ||
                   ( index > 191 && index < 197 ) ||
                   ( index > 197 && index < 203 ) ||
                   ( index > 203 && index < 209 ) ||
                   ( index > 209 && index < 215 ) ||
                   ( index > 215 && index < 221 ) ||
                   ( index > 221 && index < 227 ) ||
                   ( index > 227 && index < 233 ) ||
                   ( index > 233 && index < 239 ) || 
                   ( index > 239 && index < 245 ) ||
                   ( index > 245 && index < 251 ) ||
                   ( index > 251 && index < 257 ) ||
                   ( index > 257 && index < 263 ) ||
                   ( index > 263 && index < 269 ) ||
                   ( index > 269 && index < 275 ) ||
                   ( index > 275 && index < 281 ) ||
                   ( index > 281 && index < 287 ) ||
                   ( index > 287 && index < 293 ) ||
                   ( index > 293 && index < 299 ) ||
                   ( index > 299 && index < 305 )) && <span 
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
        <ContentLine style={{ justifyContent: 'space-around', marginTop: '0px', marginBottom: '33px' }}>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              position: 'relative',
              width: '200px'
            }}
          >

            <span style={{ color: '#2E2E2E', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>Назад</span>
            <div>
              <span
                style={{
                  display: 'block',
                  color: 'white',
                  backgroundColor: '#2E2E2E',
                  fontSize: '13px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  lineHeight: '26px'
                }}
              >
                
                0</span>
            </div>
            <span style={{ color: '#2E2E2E', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>Вперед</span>

          </div>

        </ContentLine>
      </Main>
    </React.Fragment>
  )
}

export default CatalogPage