/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import css from '../../styles/card-view'
import { useSelector, useDispatch } from 'react-redux'
import byClickImage from '../../img/byClickGrey.png'
import mapImage from '../../img/mapFish.png'

const AdressBlock = css.CardInfo.AdressBlock
const ContentLine = css.CardInfo.AdressBlockContentLine
const MapBlock = css.CardInfo.MapBlock
const Cell1 = css.CardInfo.AdressBlockContentCell1
const Cell2 = css.CardInfo.AdressBlockContentCell2
const Cell3 = css.CardInfo.AdressBlockContentCell3
const Cell4 = css.CardInfo.AdressBlockContentCell4
const CellButton = css.CardInfo.Cell4Button

const CardInfo = () => {

  const productPageDiscriptionFork = useSelector(state => state.main.productPageDiscriptionFork)
  const dispatch = useDispatch()

  return (
    <React.Fragment>

      { productPageDiscriptionFork === 1 ? 
        <React.Fragment>

          <h5 style={{ fontSize: '16px', marginBottom: '16px'  }}>Аккумуляторы ZEUS RED</h5>
          <p style={{ fontSize: '14px', lineHeight: '26px', width: '86%' }}>
    
            Премиальные аккумуляторные батареи ZEUS RED обладают повышенными пусковыми характеристиками.
            <br/>
            Предназначены как для современных автомобилей с мощными бензиновыми или дизельными двигателями, оснащённых большим количеством электрооборудования, так и для автомобилей со стандартными характеристиками.
            <br/>
            Аккумуляторы ZEUS RED характеризуются увеличенным током для запуска двигателя, дополнительной мощностью при запуске в зимний период, минимальным расходом воды, повышенной устойчивостью к глубокому разряду и увеличенным сроком службы.
            <br/>
            Особенности конструкции аккумуляторов ZEUS RED:
            <br/>
            * углеродно графитовая композиция в составе активной массы обеспечивает высокие пусковые токи при пониженных температурах и улучшенный приём заряда
            <br/>
            * специальная добавка в составе электролита повышает устойчивость к глубоким разрядам
            <br/>
            * отрицательные электроды просечного-растяжного типа на основе Pb-Ca-Sn сплавов
            <br/>
            * увеличенное количество электродов
            <br/>
            * крышка оснащена фильтрами-пламегасителями
            <br/>
            * ударопрочный и морозостойкий корпус
          
          </p>

        </React.Fragment> 
        : productPageDiscriptionFork === 0 ?
        <React.Fragment>

          <AdressBlock>

            <ContentLine>
              <Cell1><h5 style={{ fontSize: '15px' }}>Адреса:</h5></Cell1>
              <Cell2></Cell2>
              <Cell3><h5 style={{ fontSize: '15px' }}>Наличие:</h5></Cell3>
              <Cell4><h5 style={{ fontSize: '15px' }}>Оформить самовывоз:</h5></Cell4>
            </ContentLine>
            <ContentLine>
              <Cell1>
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '4px' }}>Аппаратная, 3</p>
                <p style={{ fontSize: '13px', marginBottom: '4px' }}>Звоните: +7(343)261-61-62</p>
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
                <p style={{ fontSize: '13px', color: 'grey' }}>в наличии: 
                <i style={{ textDecoration: 'none', color: 'black', fontStyle: 'normal' }}> 3шт</i></p>
              </Cell3>
              <Cell4><CellButton>
                <img 
                  alt={""}
                  src={byClickImage}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '18px',
                    left: 0,
                    marginLeft: '14px',
                    top: '50%',
                    marginTop: '-10px'
                  }}
                />
              </CellButton></Cell4>
            </ContentLine>
            <ContentLine>
              <Cell1>
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '4px' }}>Патриса Лулумбы, 4в</p>
                <p style={{ fontSize: '13px', marginBottom: '4px' }}>Звоните: +7(343)261-61-62</p>
                <p style={{ fontSize: '13px' }}>Мы работаем: с 09:00 до 21:00</p>
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
                <p style={{ fontSize: '13px', color: 'grey' }}>в наличии: 
                <i style={{ textDecoration: 'none', color: 'black', fontStyle: 'normal' }}> 3шт</i></p>
              </Cell3>
              <Cell4><CellButton>
                <img 
                  alt={""}
                  src={byClickImage}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '18px',
                    left: 0,
                    marginLeft: '14px',
                    top: '50%',
                    marginTop: '-10px'
                  }}
                />
              </CellButton></Cell4>
            </ContentLine>
            <ContentLine>
              <Cell1>
                <p style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '4px' }}>Щербакова, 216</p>
                <p style={{ fontSize: '13px', marginBottom: '4px' }}>Звоните: +7(343)261-61-62</p>
                <p style={{ fontSize: '13px' }}>Мы работаем: с 09:00 до 21:00</p>
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
                <p style={{ fontSize: '13px', color: 'grey' }}>В наличии: 
                <i style={{ textDecoration: 'none', color: 'black', fontStyle: 'normal' }}> 3шт</i></p>
              </Cell3>
              <Cell4><CellButton>
                <img 
                  alt={""}
                  src={byClickImage}
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '18px',
                    left: 0,
                    marginLeft: '14px',
                    top: '50%',
                    marginTop: '-10px'
                  }}
                />
              </CellButton></Cell4>
            </ContentLine>

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