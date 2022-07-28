/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import css from '../styles/select-akk'
import Button from '../bricks/comps/button/Button.jsx'
import { useSelector } from 'react-redux'

import solaris from '../img/solaris.png'
import vesta from '../img/vesta.png'
import kiario from '../img/kiario.png'
import polo from '../img/polo.png'
import corola from '../img/corola.png'
import lancer from '../img/lancer.png'
import creta from '../img/creta.png'
import hondalogo from '../img/autologo/honda.png'

const Wrapper = css.SelectTable
const ContentLine = css.SelectTableContentLine
const CarCard = css.CarCard
const AlphabetLine = css.AlphabetLine
const SelectLang = css.SelectLang
const ContentColumn = css.ContentColumn

const SelectAkk = () => {

  const carModels = useSelector(state => state.main.models)
  const [ step, setStep ] = useState(1)
  const [ selectedCar, setSelectedCar ] = useState('Honda')

  return (
    <React.Fragment>
      <Wrapper>

        <ContentLine>
          <Button
            inner={'Автомобильные'}
            params={{
              width: 170,
              background: '#404040'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginRight: '14px',
              color: 'white'
            }}
          />
          <Button
            inner={'Мотоциклетные'}
            params={{
              width: 170,
              background: 'transparent'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginRight: '14px',
            }}
          />
          <Button
            inner={'Тяговые'}
            params={{
              width: 170,
              background: 'transparent'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginRight: '14px',
            }}
          />
          <Button
            inner={'Подбор акб специалистом'}
            params={{
              width: 220,
              background: '#2BC631'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginRight: '14px',
              position: 'absolute',
              left: '100%',
              marginLeft: '-220px',
              color: 'white'
            }}
          />
        </ContentLine>
        <ContentLine style={{ marginTop: '20px', marginBottom: '10px' }}>

          <h4>Часто ищут следующие модели</h4>

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between' }}>

          <CarCard>

            <img 
              src={solaris} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для Huyndai Solaris</h5>

          </CarCard>
          <CarCard>

            <img 
              src={vesta} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для Lada Vesta</h5>

          </CarCard>
          <CarCard>
            
            <img 
              src={kiario} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для Kia Rio</h5>

          </CarCard>
          <CarCard>

            <img 
              src={polo} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для VW Polo</h5>

          </CarCard>
          <CarCard>

            <img 
              src={corola} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для Toyota Corolla</h5>

          </CarCard>
          <CarCard>

            <img 
              src={lancer} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для Lancer</h5>

          </CarCard>
          <CarCard>

            <img 
              src={creta} 
              alt={""}
              style={{
                display: 'block',
                width: '100%',
                margin: '0 auto'
              }}
            />
            <h5 style={{ textAlign: 'center', lineHeight: '20px' }}>Аккумуляторы для Huyndai Creta</h5>

          </CarCard>

        </ContentLine>
        <ContentLine style={{ marginTop: '20px' }}>

          <Button
            inner={'Подбор акб по марке авто'}
            params={{
              background: '#404040'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '18px',
              paddingRight: '18px',
              marginRight: '14px',
              color: 'white'
            }}
          />
          <Button
            inner={'Подбор акб по параметрам'}
            params={{
              background: 'transparent'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '18px',
              paddingRight: '18px',
              marginRight: '14px',
            }}
          />

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginTop: '20px' }}>

          {[ null, null, null, null, null, null, null, null, null, null, null, null, null ].map((item, index) => {

            return (
              <img 
                key={index}
                src={hondalogo} 
                alt={""}
                style={{
                  display: 'block',
                  width: '4%',
                  margin: '0 auto'
                }}
              />
            )

          })}

        </ContentLine>
        <ContentLine style={{ marginTop: '20px' }}>
          <AlphabetLine>

            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >A</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >B</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >C</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >D</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >E</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >F</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >G</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >H</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >I</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >J</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >K</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >L</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >M</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >N</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >O</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >P</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >Q</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >R</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >S</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >T</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >U</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >V</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >W</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >X</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >Y</span>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >Z</span>

          </AlphabetLine>
          <SelectLang>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
                color: 'white'
              }}
            >RU</span>
          </SelectLang>
        </ContentLine>
        <ContentLine style={{ marginTop: '20px' }}>
          
          { step === 0 && <React.Fragment>

            <ContentColumn>
              {/* eslint-disable-next-line array-callback-return */}
              { carModels && carModels.map((model, index) => {

                if ( index < 8 ) {

                  return (
                    <span 
                      key={index}
                      style={{ 
                        color: 'grey', 
                        fontSize: '13px', 
                        lineHeight: '32px', 
                        cursor: 'pointer' 
                      }}
                      onClick={() => {
                        setSelectedCar(model)
                        setStep(1)
                      }}
                    >
                      {model}</span>
                  )

                }

              })}
            </ContentColumn>
            <ContentColumn>
              {/* eslint-disable-next-line array-callback-return */}
              { carModels && carModels.map((model, index) => {

                if ( index > 7 && index < 16 ) {

                  return (
                    <span 
                      key={index}
                      style={{ 
                        color: 'grey', 
                        fontSize: '13px', 
                        lineHeight: '32px', 
                        cursor: 'pointer' 
                      }}
                      onClick={() => {
                        setSelectedCar(model)
                        setStep(1)
                      }}
                    >
                      {model}</span>
                  )

                }

              })}
            </ContentColumn>
            <ContentColumn>
              {/* eslint-disable-next-line array-callback-return */}
              { carModels && carModels.map((model, index) => {

                if ( index > 15 && index < 24 ) {

                  return (
                    <span 
                      key={index}
                      style={{ 
                        color: 'grey', 
                        fontSize: '13px', 
                        lineHeight: '32px', 
                        cursor: 'pointer' 
                      }}
                      onClick={() => {
                        setSelectedCar(model)
                        setStep(1)
                      }}
                    >
                      {model}</span>
                  )
                  
                }

              })}
            </ContentColumn>
            <ContentColumn>
              {/* eslint-disable-next-line array-callback-return */}
              { carModels && carModels.map((model, index) => {

                if ( index > 23 && index < 32 ) {

                  return (
                    <span 
                      key={index}
                      style={{ 
                        color: 'grey', 
                        fontSize: '13px', 
                        lineHeight: '32px', 
                        cursor: 'pointer' 
                      }}
                      onClick={() => {
                        setSelectedCar(model)
                        setStep(1)
                      }}
                    >
                      {model}</span>
                  )

                }

              })}
            </ContentColumn>
            <ContentColumn>
              {/* eslint-disable-next-line array-callback-return */}
              { carModels && carModels.map((model, index) => {

                if ( index > 31 && index < 40 ) {

                  return (
                    <span 
                      key={index}
                      style={{ 
                        color: 'grey', 
                        fontSize: '13px', 
                        lineHeight: '32px', 
                        cursor: 'pointer' 
                      }}
                      onClick={() => {
                        setSelectedCar(model)
                        setStep(1)
                      }}
                    >
                      {model}</span>
                  )
                  
                }

              })}
            </ContentColumn>

          </React.Fragment> }
          { step === 1 && <React.Fragment>
            
            <div style={{ width: '100%', position: 'relative' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '0px',
                width: '100%',
                position: 'relative'
              }}>

                <img 
                  src={hondalogo} 
                  alt={""}
                  style={{
                    display: 'block',
                    width: '50px',
                  }}
                />
                <span
                  style={{
                    fontSize: '24px',
                    marginLeft: '16px',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  
                  { selectedCar }</span>

                <span
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '240px',
                    left: '100%',
                    marginLeft: '-240px',
                    fontSize: '14px',
                    color: 'grey',
                    textAlign: 'right',
                    cursor: 'pointer'
                  }}
                  onClick={() => setStep(0)}
                >
                  
                  Вернутся к выбору марки</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '20px',
                width: '100%',
                position: 'relative'
              }}>

                { ['..........'][0].split('.').map((item, index) => {

                  return (
                    <Button
                      key={index}
                      inner={'no model'}
                      params={{
                        width: '',
                        background: 'transparent'
                      }}
                      css={{
                        fontSize: '13px',
                        paddingTop: '11px',
                        paddingBottom: '13px',
                        paddingLeft: '14px',
                        paddingRight: '14px',
                        marginRight: '14px',
                      }}
                    />
                  )

                })}

              </div>
            </div>

          </React.Fragment> }

        </ContentLine>
        { step === 0 && <ContentLine style={{ marginTop: '20px' }}>
          <AlphabetLine>
            <span 
              style={{ 
                display: 'block',
                fontSize: '13px',
                paddingTop: '7px', 
                paddingBottom: '10px',
                paddingRight: '10px',
                paddingLeft: '10px', 
              }}
            >Посмотреть все марки</span>
          </AlphabetLine>
        </ContentLine> }

      </Wrapper>
    </React.Fragment>
  )

}

export default SelectAkk