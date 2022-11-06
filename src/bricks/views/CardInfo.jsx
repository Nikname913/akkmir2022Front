/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import css from '../../styles/card-view'
import { useSelector } from 'react-redux'
import byClickImage from '../../img/byClickGrey.svg'
import mapImage from '../../img/mapFish.png'

const AdressBlock = css.CardInfo.AdressBlock
const ContentLine = css.CardInfo.AdressBlockContentLine
const MapBlock = css.CardInfo.MapBlock
const Cell1 = css.CardInfo.AdressBlockContentCell1
const Cell2 = css.CardInfo.AdressBlockContentCell2
const Cell3 = css.CardInfo.AdressBlockContentCell3
const Cell4 = css.CardInfo.AdressBlockContentCell4
const CellButton = css.CardInfo.Cell4Button

const CardInfo = (props) => {

  const { descr = '', title = '', tech = '', manufacturer = '', shops = [] } = props
  const productPageDiscriptionFork = useSelector(state => state.main.productPageDiscriptionFork)
  const shopsRemote = useSelector(state => state.main.catalogShopsRemote)

  const descrTag = useRef()
  const techTag = useRef()
  const manufacturerTag = useRef()
  const [ productShops, ] = useState(shopsConfig())

  function shopsConfig() {

    const warehouses = shops[0].warehouse
    let returnedWarehousesArray = []

    false && console.log(shopsRemote)
    false && console.log(shops)
    false && console.log(warehouses)

    shopsRemote && warehouses.forEach(warehouse => {

      const sshopsRemote = JSON.parse(shopsRemote)[0].warehouse
      const shopID = warehouse.id[0]
      const itemsCount = warehouse.count[0]
      const ekbRegion = 'f662faa5-029b-11e8-8dcf-0015179b1da1'

      sshopsRemote.forEach(sshop => {

        if ( sshop.region_id[0] === ekbRegion && sshop.id[0] === shopID ) {

          sshop.count = [ itemsCount ]
          returnedWarehousesArray.push(sshop)        

        }

      })

    })

    false && console.log(returnedWarehousesArray)
    return returnedWarehousesArray

  }

  useEffect(() => {

    if ( descr !== '' ) {

      const parcer = new DOMParser()
      const descrHTML = parcer.parseFromString(descr, 'text/html')
      const content = descrHTML.body.innerHTML

      productPageDiscriptionFork === 1 ? descrTag.current.innerHTML = content : null

    }

    if ( tech !== '' ) {

      const parcer = new DOMParser()
      const descrHTML = parcer.parseFromString(tech, 'text/html')
      const content = descrHTML.body.innerHTML

      productPageDiscriptionFork === 2 ? techTag.current.innerHTML = content : null

    }

    if ( manufacturer !== '' ) {

      const parcer = new DOMParser()
      const descrHTML = parcer.parseFromString(manufacturer, 'text/html')
      const content = descrHTML.body.innerHTML

      productPageDiscriptionFork === 3 ? manufacturerTag.current.innerHTML = content : null

    }

  },[ productPageDiscriptionFork ])

  return (
    <React.Fragment>

      { productPageDiscriptionFork === 1 ? 
      
        <React.Fragment>

          <h5 style={{ fontSize: '20px', marginBottom: '20px'  }}>
            
            { title ? title : 'Аккумуляторы ZEUS RED' }
            
          </h5>
          <p ref={descrTag} style={{ fontSize: '14px', lineHeight: '30px', width: '86%' }}>

            { descr ? <React.Fragment></React.Fragment> : <React.Fragment>
              
              Описание этого товара пока отсутствует

            </React.Fragment> }
          
          </p>

        </React.Fragment> 
        : productPageDiscriptionFork === 2 ?
        <React.Fragment>

          <h5 style={{ fontSize: '20px', marginBottom: '20px'  }}>
            
            { title ? title : 'Аккумуляторы ZEUS RED' }
            
          </h5>
          <p ref={techTag} style={{ fontSize: '14px', lineHeight: '30px', width: '86%' }}>

            { tech ? <React.Fragment></React.Fragment> : <React.Fragment>
              
              Описание этого товара пока отсутствует

            </React.Fragment> }
          
          </p>

        </React.Fragment> 
        : productPageDiscriptionFork === 3 ?
        <React.Fragment>

          <h5 style={{ fontSize: '20px', marginBottom: '20px'  }}>
            
            { title ? title : 'Аккумуляторы ZEUS RED' }
            
          </h5>
          <p ref={manufacturerTag} style={{ fontSize: '14px', lineHeight: '30px', width: '86%' }}>

            { manufacturer ? <React.Fragment></React.Fragment> : <React.Fragment>
              
              Описание этого товара пока отсутствует

            </React.Fragment> }
          
          </p>

        </React.Fragment> 
        : productPageDiscriptionFork === 0 ?
        <React.Fragment>

          <AdressBlock>

            <ContentLine>
              <Cell1><h5 style={{ fontSize: '15px', lineHeight: '18px' }}>Адреса магазинов:</h5></Cell1>
              <Cell2></Cell2>
              <Cell3><h5 style={{ fontSize: '15px', lineHeight: '18px' }}>Наличие:</h5></Cell3>
              <Cell4><h5 style={{ fontSize: '15px', lineHeight: '18px' }}>Оформить самовывоз:</h5></Cell4>
            </ContentLine>

            { productShops && productShops.map((item, index) => {

              return (
                <React.Fragment key={index}>
                  <ContentLine>
                    <Cell1>
                      <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '10px' }}>
                        { item.name[0].indexOf('Склад') !== -1 
                          ? item.name[0].slice(4).split(' Склад')[0]
                          : item.name[0].slice(4) }
                      </p>
                      <p style={{ fontSize: '13px', marginBottom: '10px' }}>Звоните (343)261-61-62</p>
                      <p style={{ fontSize: '13px' }}>Мы работаем: с 09:00 до 19:00</p>
                    </Cell1>
                    <Cell2>
                      <span
                        style={{
                          display: 'block',
                          position: 'absolute',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: '#2BC631',
                          top: '50%',
                          marginTop: '-6px',
                          left: 0
                        }}
                      ></span>
                      <p style={{ fontSize: '13px', paddingLeft: '19px' }}>Открыто</p>
                    </Cell2>
                    <Cell3>
                      <p style={{ fontSize: '13px', color: 'grey' }}>В наличии 
                      <i style={{ textDecoration: 'none', color: 'black', fontStyle: 'normal' }}> { item.count[0] } шт</i></p>
                    </Cell3>
                    <Cell4><CellButton>
                      <img 
                        alt={""}
                        src={byClickImage}
                        style={{
                          display: 'block',
                          position: 'absolute',
                          width: '20px',
                          left: 0,
                          marginLeft: '14px',
                          top: '50%',
                          marginTop: '-11px'
                        }}
                      />
                    </CellButton></Cell4>
                  </ContentLine>
                </React.Fragment>
              )

            })}

          </AdressBlock>
          <MapBlock>

            <img 
              alt={""}
              src={mapImage}
              style={{
                display: 'block',
                position: 'relative',
                width: '120%',
                left: 0,
                top: 0
              }}
            />

          </MapBlock>

        </React.Fragment> : null }

    </React.Fragment>
  )

}

export default CardInfo