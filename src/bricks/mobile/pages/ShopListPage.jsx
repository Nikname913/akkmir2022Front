/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import css from '../../../styles/mobile/mobileStyles'
import AdressCard from '../views/AdressCard'
import RequestComponent from '../../../services/request.service'

const { Wrapper, 
  ContentLine } = css.ScreenStyles

const ShopListPage = (props) => {

  const { screen = 420 } = props
  const mainShopsRemote = useSelector(state => state.main.catalogShopsRemote)
  const actualRegion = useSelector(state => state.actualRegion.selectedRegion)

  useEffect(() => {

    console.log(mainShopsRemote)

  },[])

  return (
    <React.Fragment>

      <RequestComponent
        make={false}
        callbackAction={'GET_SHOPS'}
        requestData={{
          type: 'GET',
          urlstring: '/shops',
        }}
      />

      <Wrapper 
        style={{ 
          marginLeft: '20px', 
          borderRadius: '0px',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px' 
        }}
      >

        <ContentLine width={screen} style={{ marginTop: '10px', marginBottom: '8px' }}>
          
          <h2 style={{ color: '#565656' }}>Адреса наших магазинов</h2>
        
        </ContentLine>
        <ContentLine 
          width={screen} 
          style={{ 
            marginTop: '6px', 
            marginBottom: '12px', 
            flexWrap: 'wrap' 
          }}
        >

          { mainShopsRemote && JSON.parse(mainShopsRemote)[0].warehouse.map((shop, index) => {

            return (
              <React.Fragment key={index}>
                { shop.region_id[0] === actualRegion && shop.name[0] !== 'Ткачей'  && <React.Fragment>
                  { index !== JSON.parse(mainShopsRemote)[0].warehouse.length - 1 
                    ? <AdressCard 
                        shopID={shop.id[0]} 
                        regionID={shop.region_id[0]}
                        name={shop.name[0].slice(4)}
                        isService={shop.service[0] === "1" ? true : false}  />
                    : <AdressCard marbottom={0.00000011}></AdressCard> }
                </React.Fragment> }          
              </React.Fragment>
            )

          })}

        </ContentLine>
      </Wrapper>
    </React.Fragment>
  )

}

export default ShopListPage 