/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import css from '../../styles/pages/catalog-page'
import ReactSelect from '../comps/ReactSelectNoIcons'
import Input from '../comps/input/Input.jsx'
import Button from '../comps/button/Button.jsx'
import CardPreview from '../views/CardPreview'
import RequestComponent from '../../services/request.service'
import SelectAkk from '../../services/selectAkk.service'
import arrowImg from '../../img/arrow.png'
import minus from '../../img/minus.png'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../appStore/reducers/desktopPaginationReducer'
import { setActualCategory } from '../../appStore/reducers/mainReducer'

const Main = css.Main
const ContentLine = css.MainContentLine
const PodborWindow = css.PodborWindow
const PodborWindowContentLine = css.PodborWindowContentLine

const CatalogPage = () => {

  const items = useSelector(state => state.catalog.catalog)
  const actualCategory = useSelector(state => state.main.actualCategory)
  const paginationCount = useSelector(state => state.desktopPagination.count)
  const selectionData = useSelector(state => state.selectionSettings.settings)
  const mainMenuRemote = useSelector(state => state.main.catalogMenuRemote)
  const mainMarksRemote = useSelector(state => state.main.catalogMarksRemote)
  const mainModelsRemote = useSelector(state => state.main.catalogModelsRemote)
  const mainGenerationsRemote = useSelector(state => state.main.catalogGenerationsRemote)
  const mainEnginesRemote = useSelector(state => state.main.catalogEnginesRemote)
  const catalogSelectionParams = useSelector(state => state.main.catalogSelectionParams)
  const catalogSelectionSettings = useSelector(state => state.selectionSettings.settings)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const startRef = useRef()
  const catalogCategory = params.category

  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  if ( catalogCategory ) {

    jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  } else {

    jsonCatalog 
      ? generalCatalog = JSON.parse(jsonCatalog)[0].product.filter(
          item => { 

            if ( actualCategory.id && actualCategory.id.includes(item.groups[0].id[0].toLowerCase()) ) {

              return item

            }
          }
        ) : generalCatalog = null

  }

  function selectSubCategory(props) {

    const { id, label } = props
    dispatch(setActualCategory({ id, label}))

  }

  function scrollStart() {

    startRef.current.scrollIntoView({ behavior: 'smooth' })

  }

  useEffect(() => document.documentElement.scrollTop = 0,[])
  useEffect(() => false && console.log(catalogCategory),[])
  useEffect(() => false && console.log(actualCategory),[])
  useEffect(() => false && console.log(selectionData),[])
  useEffect(() => !false && console.log(catalogSelectionParams),[])
  useEffect(() => !false && console.log(catalogSelectionSettings),[])
  
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
        <ContentLine ref={startRef} style={{ justifyContent: 'space-between' }}>

          <SelectAkk 
            categories={mainMenuRemote}
            marks={mainMarksRemote} 
            models={mainModelsRemote}
            gens={mainGenerationsRemote}
            engines={mainEnginesRemote}
          />

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginTop: '6px', marginBottom: '27px' }}>

          <h2>{ JSON.parse(selectionData).car } { JSON.parse(selectionData).model } { JSON.parse(selectionData).generation }</h2>
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
                isDisabled={true}
                placeholder={"Выбор марки"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
                defaultValue={[
                  { value: '002', label: JSON.parse(catalogSelectionSettings).car }
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                isDisabled={true}
                placeholder={"Выбор модели"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
                defaultValue={[
                  { value: '002', label: JSON.parse(catalogSelectionSettings).model }
                ]}
              />

            </PodborWindowContentLine>
            <PodborWindowContentLine>

              <span style={{ display: 'block', width: '160px', fontSize: '13px', fontWeight: 'bold', marginRight: '10px' }}>Объем двигателя</span>
              <span style={{ display: 'block', width: '160px', fontSize: '13px', fontWeight: 'bold' }}>Поколение</span>

            </PodborWindowContentLine>
            <PodborWindowContentLine style={{ marginBottom: '0px' }}>

              <ReactSelect 
                isDisabled={true}
                placeholder={"Двигатель"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
                defaultValue={[
                  { value: '002', label: JSON.parse(catalogSelectionSettings).engine }
                ]}
              />
              <span style={{ width: '10px' }}></span>
              <ReactSelect 
                isDisabled={true}
                placeholder={"Поколение"}
                params={{ width: 160 }}
                data={[
                  { value: '001', label: 'no params' },
                  { value: '002', label: 'no params' },
                ]}
                defaultValue={[
                  { value: '002', label: JSON.parse(catalogSelectionSettings).generation }
                ]}
              />

            </PodborWindowContentLine>

          </PodborWindow>
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
        <ContentLine 
          style={{ 
            justifyContent: 'flex-start', 
            flexWrap: 'wrap', 
            marginBottom: '8px',
            paddingRight: '15.833333%' ,
            position: 'relative',
          }}
        >

          {/* ---------------------------------- */}
          {/* ответвление от макета */}
          {/* ---------------------------------- */}

          <div
            style={{
              display: 'block',
              position: 'absolute',
              width: '24%',
              height: '90%',
              minHeight: '60px',
              borderRadius: '4px',
              boxShadow: '22px 53px 23px rgb(163 163 163 / 3%), 12px 30px 19px rgb(163 163 163 / 9%), 5px 13px 14px rgb(163 163 163 / 15%), 1px 3px 8px rgb(163 163 163 / 18%), 0px 0px 0px rgb(163 163 163 / 18%)',
              background: 'linear-gradient(to right, transparent, white)',
              top: '5%',
              left: '76%',
            }}
          ></div>

          { generalCatalog ? generalCatalog.map((item, index) => {

            const { params, mount, terminal, tech } = JSON.parse(catalogSelectionParams)
            const itemProps = item.properties[0].property
            let success = 0

            itemProps.forEach(property => {

              if ( property.id[0] === '474b3fff-bb81-11e6-963a-0015179b1da1' ) {
                if ( property.value[0] === params ) {

                  false && console.log(params)
                  false && console.log(property.value[0])
                  success++

                }
              }
              if ( property.id[0] === 'a6b1161c-3c7a-11e7-be29-0015179b1da1' ) {
                if ( property.value[0] === terminal[0] ) {

                  false && console.log(terminal[0])
                  false && console.log(property.value[0])
                  success++

                }
              }
              if ( property.id[0] === 'dbcfce83-e01b-11e9-8100-00155d0bfb06' ) {
                if ( property.value[0] === mount[0] ) {

                  false && console.log(mount[0])
                  false && console.log(property.value[0])
                  success++

                }
              }
              if ( property.id[0] === 'ce2db260-3c7a-11e7-be29-0015179b1da1' ) {
                if ( tech.includes(property.value[0]) ) {

                  false && console.log(tech)
                  false && console.log(property.value[0])
                  success++

                }
              }

            })

            if ( success === 4 ) { return <React.Fragment key={index}>{
              index < /* paginationCount + 2 */ 10000 && <React.Fragment key={index}>
                <CardPreview
                  params={{ width: 18.833333, mleft: 0, mright: 12 }}
                  image={null}
                  title={item.name}
                  description={[
                    `Бренд : ${item.properties[0].property[0].value[0]}`,
                    `Производитель : ${item.properties[0].property[1].value[0]}`,
                  ]}
                  coast1={
                    +item.pre_order_prices[0].region[0].price[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price[0]
                  }
                  coast2={
                    +item.pre_order_prices[0].region[0].price_discount[0] === 0
                      ? '--' : item.pre_order_prices[0].region[0].price_discount[0]
                  }
                  itemID={item.id[0]}
                />
                { false && <span 
                  style={{ 
                    display: 'block',
                    position: 'relative',
                    width: '1%',
                    height: '300px',
                    boxSizing: 'border-box'
                  }}
                ></span> }

              </React.Fragment>
            }</React.Fragment> }

          }) : null }

        </ContentLine> }
        { false && <ContentLine style={{ justifyContent: 'space-around', marginTop: '0px', marginBottom: '33px' }}>

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

            <span 
              style={{ 
                color: '#2E2E2E', 
                fontSize: '13px', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
              }}
              onClick={() => {
                dispatch(decrement(20))
                navigate(`/catalog/${catalogCategory}/${paginationCount - 20}`)
              }}
            >Меньше</span>
            <div>
              <span
                style={{
                  display: 'block',
                  color: 'white',
                  backgroundColor: '#2E2E2E',
                  fontSize: '13px',
                  width: '46px',
                  height: '36px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  lineHeight: '36px'
                }}
              >
                
                { paginationCount }</span>
            </div>
            <span 
              style={{ 
                color: '#2E2E2E', 
                fontSize: '13px', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
              }}
              onClick={() => {
                dispatch(increment(20))
                navigate(`/catalog/${catalogCategory}/${paginationCount + 20}`)
              }}
            >Больше</span>

          </div>

        </ContentLine> }
        <ContentLine style={{ justifyContent: 'space-around', marginTop: '0px', marginBottom: '20px' }}>

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

            <div>
              <span
                onClick={scrollStart}
                style={{
                  display: 'block',
                  color: 'grey',
                  backgroundColor: 'transparent',
                  fontSize: '13px',
                  width: '186px',
                  height: '36px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  lineHeight: '36px',
                  cursor: 'pointer'
                }}
              >Вернуться в начало страницы</span>
            </div>

          </div>

        </ContentLine>
      </Main>
    </React.Fragment>
  )
}

export default CatalogPage