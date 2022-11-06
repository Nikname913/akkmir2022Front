/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../../../styles/mobile/mobileStyles'
import Button from '../../comps/button/Button.jsx'
import ReactSelect from '../../comps/ReactSelectNoIcons'
import CardPreview from '../views/CardPreview'
import { useSelector } from 'react-redux'

const { Wrapper, 
  ContentLine,
  SelectAkkum } = css.ScreenStyles

const ChangePage = (props) => {

  const { screen = 420 } = props
  const catalog = useSelector(state => state.catalog.catalog)
  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

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

        <ContentLine width={screen} style={{ marginTop: '10px', marginBottom: '8px' }}>
          
          <h2 style={{ color: '#565656' }}>Каталог товаров</h2>
        
        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          <SelectAkkum width={screen}>
            <h4 style={{ marginBottom: '18px', marginTop: '2px' }}>Подбор аккумулятора</h4>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >

              <Button  
                params={{
                  width: 154,
                  height: 38,
                  background: '#2E2E2E'
                }}
                inner={"По марке авто"}
                css={{
                  fontSize: '13px',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '10px',
                  lineHeight: '36px'
                }}
              />

              <Button  
                params={{
                  width: 154,
                  height: 38,
                  background: 'transparent'
                }}
                inner={"По характеристикам"}
                css={{
                  fontSize: '13px',
                  color: '#2E2E2E',
                  borderRadius: '12px',
                  lineHeight: '36px',
                }}
              />

            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
              }}
            >

              <Button  
                params={{
                  width: 154,
                  height: 38,
                  background: '#2E2E2E'
                }}
                inner={"Автомобильные"}
                css={{
                  fontSize: '13px',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '10px',
                  lineHeight: '36px'
                }}
              />

              <Button  
                params={{
                  width: 154,
                  height: 38,
                  background: 'transparent'
                }}
                inner={"Грузовые авто"}
                css={{
                  fontSize: '13px',
                  color: '#2E2E2E',
                  borderRadius: '12px',
                  lineHeight: '36px'
                }}
              />

            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                marginTop: '16px',
                marginBottom: '10px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              <span style={{ width: '50%' }}>1. Марка</span>
              <span style={{ width: '50%' }}>2. Модель</span>
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '14px'
              }}
            >
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Выберите марку"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
              <div style={{ width: '12px' }}></div>
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Модель авто"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                marginBottom: '10px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              <span style={{ width: '50%' }}>3. Поколение</span>
              <span style={{ width: '50%' }}>4. Объем двигателя</span>
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '26px'
              }}
            >
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Поколение авто"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
              <div style={{ width: '12px' }}></div>
              <ReactSelect 
                params={{ width: 166 }}
                placeholder={"Двигатель авто"}
                data={[
                  { value: 'card', label: '---' },
                  { value: 'cash', label: '---' },
                  { value: 'online', label: '---' }
                ]}
              />
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                position: 'relative',
                marginBottom: '12px'
              }}
            >

              <Button  
                params={{
                  width: 154,
                  height: 40,
                  background: '#2E2E2E'
                }}
                inner={"Показать"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px',
                  marginRight: '10px'
                }}
              />

              <Button  
                params={{
                  width: 174,
                  height: 40,
                  background: '#2BC631'
                }}
                inner={"Подбор специалистом"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  borderRadius: '12px'
                }}
              />

            </div>

          </SelectAkkum>

        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '5px', 
            marginBottom: '6px', 
            justifyContent: 'space-between' 
          }}
        >

          <h4>Результаты подбора товаров</h4>

        </ContentLine>
        { generalCatalog === null || generalCatalog.length === 0 ? <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          { catalog ? catalog.map((item, index) => {

            if ( index < 2 ) {
              return (
                <React.Fragment key={index}>
                  <CardPreview itemID={item.itemID}></CardPreview>
                </React.Fragment>
              )
            }

          }) : null }

        </ContentLine> : <ContentLine width={screen} style={{ marginTop: '6px', marginBottom: '6px' }}>

          { generalCatalog ? generalCatalog.map((item, index) => {

            index < 2 && console.log(item)

            if ( index === 70 || index === 74 ) {
              return (
                <React.Fragment key={index}>
                  <CardPreview 
                    itemID={item.id[0]}
                    title={item.name[0]}
                    description={item.description[0]}
                    coast1={+item.pre_order_prices[0].region[0].price[0] === 0
                    ? '--' : item.pre_order_prices[0].region[0].price[0]}
                    coast2={+item.pre_order_prices[0].region[0].price[0] === 0
                    ? '--' : item.pre_order_prices[0].region[0].price[0]}
                  ></CardPreview>
                </React.Fragment>
              )
            }

          }) : null }

        </ContentLine> }
        <ContentLine 
          width={screen} 
          style={{ 
            marginBottom: '0px',
            marginTop: '-7px',
            justifyContent: 'space-around', 
          }}
        >
          <span
            style={{
              fontSize: '13px',
              color: '#C4C4C4'
            }}
          >
          
            Показать еще</span>
        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginBottom: '12px',
            marginTop: '-7px',
            justifyContent: 'space-around', 
          }}
        >

          <span
            style={{
              fontSize: '13px',
              color: '#C4C4C4',
              backgroundColor: '#414141',
              width: '22px',
              height: '30px',
              textAlign: 'center',
              lineHeight: '31px',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            
            0</span>
        </ContentLine>

      </Wrapper>
    </React.Fragment>
  )

}

export default ChangePage 