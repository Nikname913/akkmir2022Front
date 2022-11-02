/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import css from '../styles/select-akk'
import styled from 'styled-components'
import Button from '../bricks/comps/button/Button.jsx'
import { setSettings } from '../appStore/reducers/selectionSettingsReducer'
import { setActualCategory } from '../appStore/reducers/mainReducer'

import solaris from '../img/solaris.png'
import vesta from '../img/vesta.png'
import kiario from '../img/kiario.png'
import polo from '../img/polo.png'
import corola from '../img/corola.png'
import lancer from '../img/lancer.png'
import creta from '../img/creta.png'
import gencar from '../img/autogens/generationCar.png'
import error from '../img/error.png'

// ------------------------------
// логотипы автомобилей, список дополняется
// ------------------------------

import hondalogo from '../img/autologo/honda.png'
import audilogo from '../img/autologo/audi.png'
import bmwlogo from '../img/autologo/bmw.png'
import daewoologo from '../img/autologo/daewoo.png'
import hyundailogo from '../img/autologo/hyundai.png'
import kialogo from '../img/autologo/kia.png'
import mazdalogo from '../img/autologo/mazda.png'
import mitsulogo from '../img/autologo/mitsubishi.png'
import nissanlogo from '../img/autologo/nissan.png'
import subarulogo from '../img/autologo/subaru.png'
import wolklogo from '../img/autologo/wolk.png'

const Wrapper = css.SelectTable
const ContentLine = css.SelectTableContentLine
const CarCard = css.CarCard
const AlphabetLine = css.AlphabetLine
const SelectLang = css.SelectLang
const ContentColumn = css.ContentColumn
const Image = styled.img`
  filter: grayscale(0);
  cursor: pointer;
  :hover {
    filter: grayscale(0);
  }
`

const SelectAkk = (props) => {

  const { categories, marks, models, gens, engines } = props
  const [ step, setStep ] = useState(0)
  const [ selectedCar, setSelectedCar ] = useState('Honda')
  const [ selectedCarID, setSelectedCarID ] = useState(null)
  const [ selectedModel, setSelectedModel ] = useState(null)
  const [ selectedModelID, setSelectedModelID ] = useState(null)
  const [ selectedGeneration, setSelectedGeneration ] = useState(null)
  const [ selectedGenerationID, setSelectedGenerationID ] = useState(null)
  const [ selectedLogo, setSelectedLogo ] = useState(null)
  const [ list, setList ] = useState('short')
  const [ letter, setLetter ] = useState('')
  const [ selectedLetter, setSelectedLetter ] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ marksDiapazon2, setMarksDiapazon2 ] = useState(8)
  const [ marksDiapazon3, setMarksDiapazon3 ] = useState(7)
  const [ marksDiapazon4, setMarksDiapazon4 ] = useState(16)
  const [ marksDiapazon5, setMarksDiapazon5 ] = useState(15)
  const [ marksDiapazon6, setMarksDiapazon6 ] = useState(24)
  const [ marksDiapazon7, setMarksDiapazon7 ] = useState(23)
  const [ marksDiapazon8, setMarksDiapazon8 ] = useState(32)
  const [ marksDiapazon9, setMarksDiapazon9 ] = useState(31)
  const [ marksDiapazon10, setMarksDiapazon10 ] = useState(40)

  function selectSubCategory(props) {

    const { id, label } = props
    dispatch(setActualCategory({ id, label}))

  }

  useEffect(() => false && console.log(categories),[ categories ])
  useEffect(() => false && console.log(marks),[ marks ])
  useEffect(() => false && console.log(engines),[ engines ])

  return (
    <React.Fragment>
      <Wrapper>
        <ContentLine>

          { categories && JSON.parse(categories)[0].group.map((item, index) => {

            if ( item.parent_id[0] === 'f863771d-8620-11e6-a171-14dae9fa0260' ) {

              if ( item.name[0] !== 'Клеммы, перемычки, провода' &&
                   item.name[0] !== 'Крепление для АКБ' &&
                   /* временно, пока делается макет */ item.name[0] !== 'Аккумуляторы мотоциклетные' &&
                   /* временно, пока делается макет */ item.name[0] !== 'Аккумуляторы промышленные' ) {

                    return (
                      <React.Fragment key={index}>
                        <Button
                          inner={item.name[0]}
                          params={{
                            width: 300,
                            background: item.name[0] === 'Аккумуляторы автомобильные' && '#404040'
                          }}
                          css={{
                            fontSize: '13px',
                            paddingTop: '10px',
                            paddingBottom: '13px',
                            paddingLeft: '18px',
                            paddingRight: '18px',
                            marginRight: '14px',
                            lineHeight: '20px',
                            color: item.name[0] === 'Аккумуляторы автомобильные' && 'white'
                          }}
                        />
                      </React.Fragment>
                    )

                  }}

          })}

          <Button
            inner={'Подбор акб специалистом'}
            params={{
              width: 220,
              background: '#2BC631'
            }}
            css={{
              fontSize: '13px',
              paddingTop: '10px',
              paddingBottom: '13px',
              paddingLeft: '10px',
              paddingRight: '10px',
              marginRight: '14px',
              lineHeight: '20px',
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
        { false && <ContentLine style={{ marginTop: '20px', marginBottom: '10px' }}>

          <img
            alt={""}
            src={error}
            style={{
              display: 'block',
              position: 'relative',
              width: '42px'
            }}
          />
          <span style={{ fontWeight: 'bold', width: '70%', lineHeight: '22px', marginLeft: '22px', fontStyle: 'italic' }}>
          
            Модуль подбора аккумуляторов был запланирован, как отдельный плагин, который можно было бы использовать со сторонних сайтов. Верстка реализована, рабочий скрипт проходит модерацию на сайте пакетного менеджера npm после прохождения которой станет доступен к работе. Официальный сайт https://www.npmjs.com/</span>

        </ContentLine> }
        <ContentLine style={{ justifyContent: 'space-between' }}>

          <CarCard
            onClick={() => {
              setSelectedLogo(3)
              setSelectedCar('Huyndai')
              setSelectedCarID('601f6217-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Solaris')
              setSelectedModelID('6c1dc919-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >

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
          <CarCard
            onClick={() => {
              setSelectedLogo(null)
              setSelectedCar('ВАЗ(Lada)')
              setSelectedCarID('e68b74ae-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Vesta')
              setSelectedModelID('e68b74ef-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >

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
          <CarCard
            onClick={() => {
              setSelectedLogo(4)
              setSelectedCar('Kia')
              setSelectedCarID('723ef7bd-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Rio')
              setSelectedModelID('783bfd81-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >
            
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
          <CarCard
            onClick={() => {
              setSelectedLogo(2)
              setSelectedCar('Volkswagen')
              setSelectedCarID('d9fe7a54-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Polo')
              setSelectedModelID('e090307b-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >

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
          <CarCard
            onClick={() => {
              setSelectedLogo(null)
              setSelectedCar('Toyota')
              setSelectedCarID('c12dbbe0-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Corolla')
              setSelectedModelID('c7f0bb2c-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >

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
          <CarCard
            onClick={() => {
              setSelectedLogo(5)
              setSelectedCar('Mitsubishi')
              setSelectedCarID('9675e7f7-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Lancer')
              setSelectedModelID('9c709179-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >

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
          <CarCard
            onClick={() => {
              setSelectedLogo(3)
              setSelectedCar('Huyndai')
              setSelectedCarID('601f6217-261d-11ea-8131-00155d0bfb06')
              setSelectedModel('Creta')
              setSelectedModelID('601f6225-261d-11ea-8131-00155d0bfb06')
              setStep(2)
            }}
          >

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
            params={{ background: '#404040', width: 300 }}
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

          {/* ---------------------------------------- */}
          {/* временно скрыть кнопку пока делается макет */}
          {/* ---------------------------------------- */}

          { false === true && <Button
            inner={'Подбор акб по параметрам'}
            params={{ background: 'transparent' }}
            css={{
              fontSize: '13px',
              paddingTop: '11px',
              paddingBottom: '13px',
              paddingLeft: '18px',
              paddingRight: '18px',
              marginRight: '14px',
            }}
          /> }

        </ContentLine>
        <ContentLine style={{ justifyContent: 'space-between', marginTop: '28px' }}>

          <Image
            src={audilogo} 
            alt={""}
            style={{
              display: 'block',
              width: '4%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(1)
              setSelectedCar('Audi')
              setSelectedCarID('414c4657-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={bmwlogo} 
            alt={""}
            style={{
              display: 'block',
              width: '3%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(2)
              setSelectedCar('BMW')
              setSelectedCarID('481ba9a0-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={hyundailogo} 
            alt={""}
            style={{
              display: 'block',
              width: '4%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(3)
              setSelectedCar('Hyundai')
              setSelectedCarID('601f6217-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={kialogo} 
            alt={""}
            style={{
              display: 'block',
              width: '4%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(4)
              setSelectedCar('Kia')
              setSelectedCarID('723ef7bd-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={mitsulogo} 
            alt={""}
            style={{
              display: 'block',
              width: '3.6%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(5)
              setSelectedCar('Mitsubishi')
              setSelectedCarID('9675e7f7-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={nissanlogo} 
            alt={""}
            style={{
              display: 'block',
              width: '4%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(6)
              setSelectedCar('Nissan')
              setSelectedCarID('90438b47-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={wolklogo} 
            alt={""}
            style={{
              display: 'block',
              width: '6%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(7)
              setSelectedCar('Volkswagen')
              setSelectedCarID('d9fe7a54-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={subarulogo} 
            alt={""}
            style={{
              display: 'block',
              width: '6%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(8)
              setSelectedCar('Subaru')
              setSelectedCarID('bb036912-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={hondalogo} 
            alt={""}
            style={{
              display: 'block',
              width: '4%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(9)
              setSelectedCar('Honda')
              setSelectedCarID('5a1b3580-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={mazdalogo} 
            alt={""}
            style={{
              display: 'block',
              width: '3.6%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(10)
              setSelectedCar('Mazda')
              setSelectedCarID('84387515-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />
          <Image
            src={daewoologo} 
            alt={""}
            style={{
              display: 'block',
              width: '4%',
              margin: '0 auto',
            }}
            onClick={() => { 
              setSelectedLogo(11)
              setSelectedCar('Daewoo')
              setSelectedCarID('4e12db63-261d-11ea-8131-00155d0bfb06')
              setStep(1)
            }}
          />

        </ContentLine>
        <ContentLine style={{ marginTop: '28px' }}>
          <AlphabetLine style={{ cursor: 'pointer', paddingBottom: '2px' }}>

            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '6px',
                paddingRight: '10px',
                paddingLeft: '10px', 
                color: selectedLetter === 1 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'a' ? setLetter('a') : setLetter('')
                selectedLetter === 1 ? setSelectedLetter(null) : setSelectedLetter(1)
                setStep(0)
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
                color: selectedLetter === 2 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'b' ? setLetter('b') : setLetter('')
                selectedLetter === 2 ? setSelectedLetter(null) : setSelectedLetter(2)
                setStep(0)
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
                color: selectedLetter === 3 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'c' ? setLetter('c') : setLetter('')
                selectedLetter === 3 ? setSelectedLetter(null) : setSelectedLetter(3)
                setStep(0)
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
                color: selectedLetter === 4 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'd' ? setLetter('d') : setLetter('')
                selectedLetter === 4 ? setSelectedLetter(null) : setSelectedLetter(4)
                setStep(0)
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
                color: selectedLetter === 5 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'e' ? setLetter('e') : setLetter('')
                selectedLetter === 5 ? setSelectedLetter(null) : setSelectedLetter(5)
                setStep(0)
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
                color: selectedLetter === 6 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'f' ? setLetter('f') : setLetter('')
                selectedLetter === 6 ? setSelectedLetter(null) : setSelectedLetter(6)
                setStep(0)
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
                color: selectedLetter === 7 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'g' ? setLetter('g') : setLetter('')
                selectedLetter === 7 ? setSelectedLetter(null) : setSelectedLetter(7)
                setStep(0)
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
                color: selectedLetter === 8 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'h' ? setLetter('h') : setLetter('')
                selectedLetter === 8 ? setSelectedLetter(null) : setSelectedLetter(8)
                setStep(0)
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
                color: selectedLetter === 9 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'i' ? setLetter('i') : setLetter('')
                selectedLetter === 9 ? setSelectedLetter(null) : setSelectedLetter(9)
                setStep(0)
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
                color: selectedLetter === 10 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'j' ? setLetter('j') : setLetter('')
                selectedLetter === 10 ? setSelectedLetter(null) : setSelectedLetter(10)
                setStep(0)
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
                color: selectedLetter === 11 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'k' ? setLetter('k') : setLetter('')
                selectedLetter === 11 ? setSelectedLetter(null) : setSelectedLetter(11)
                setStep(0)
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
                color: selectedLetter === 12 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'l' ? setLetter('l') : setLetter('')
                selectedLetter === 12 ? setSelectedLetter(null) : setSelectedLetter(12)
                setStep(0)
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
                color: selectedLetter === 13 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'm' ? setLetter('m') : setLetter('')
                selectedLetter === 13 ? setSelectedLetter(null) : setSelectedLetter(13)
                setStep(0)
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
                color: selectedLetter === 14 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'n' ? setLetter('n') : setLetter('')
                selectedLetter === 14 ? setSelectedLetter(null) : setSelectedLetter(14)
                setStep(0)
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
                color: selectedLetter === 15 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'o' ? setLetter('o') : setLetter('')
                selectedLetter === 15 ? setSelectedLetter(null) : setSelectedLetter(15)
                setStep(0)
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
                color: selectedLetter === 16 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'p' ? setLetter('p') : setLetter('')
                selectedLetter === 16 ? setSelectedLetter(null) : setSelectedLetter(16)
                setStep(0)
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
                color: selectedLetter === 17 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'q' ? setLetter('q') : setLetter('')
                selectedLetter === 17 ? setSelectedLetter(null) : setSelectedLetter(17)
                setStep(0)
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
                color: selectedLetter === 18 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'r' ? setLetter('r') : setLetter('')
                selectedLetter === 18 ? setSelectedLetter(null) : setSelectedLetter(18)
                setStep(0)
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
                color: selectedLetter === 19 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 's' ? setLetter('s') : setLetter('')
                selectedLetter === 19 ? setSelectedLetter(null) : setSelectedLetter(19)
                setStep(0)
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
                color: selectedLetter === 20 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 't' ? setLetter('t') : setLetter('')
                selectedLetter === 20 ? setSelectedLetter(null) : setSelectedLetter(20)
                setStep(0)
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
                color: selectedLetter === 21 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'u' ? setLetter('u') : setLetter('')
                selectedLetter === 21 ? setSelectedLetter(null) : setSelectedLetter(21)
                setStep(0)
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
                color: selectedLetter === 22 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'v' ? setLetter('v') : setLetter('')
                selectedLetter === 22 ? setSelectedLetter(null) : setSelectedLetter(22)
                setStep(0)
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
                color: selectedLetter === 23 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'w' ? setLetter('w') : setLetter('')
                selectedLetter === 23 ? setSelectedLetter(null) : setSelectedLetter(23)
                setStep(0)
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
                color: selectedLetter === 24 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'x' ? setLetter('x') : setLetter('')
                selectedLetter === 24 ? setSelectedLetter(null) : setSelectedLetter(24)
                setStep(0)
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
                color: selectedLetter === 25 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'y' ? setLetter('y') : setLetter('')
                selectedLetter === 25 ? setSelectedLetter(null) : setSelectedLetter(25)
                setStep(0)
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
                color: selectedLetter === 26 ? 'rgb(43,198,49)' : 'black',
                fontSize: '24px'
              }}
              onClick={() => {
                letter !== 'z' ? setLetter('z') : setLetter('')
                selectedLetter === 26 ? setSelectedLetter(null) : setSelectedLetter(26)
                setStep(0)
              }}
            >Z</span>

          </AlphabetLine>
          <SelectLang>
            <span 
              style={{ 
                display: 'block',
                fontWeight: 'bold', 
                paddingTop: '7px', 
                paddingBottom: '8px',
                paddingRight: '10px',
                paddingLeft: '10px', 
                color: 'white'
              }}
            >RU</span>
          </SelectLang>
        </ContentLine>
        <ContentLine style={{ marginTop: '20px' }}>
          
          { step === 0 && <React.Fragment>

            { letter === '' ? <React.Fragment>

              <ContentColumn>

                { marks && JSON.parse(marks)[0].mark.map((item, index) => {

                  if ( index < marksDiapazon2 ) {

                    if ( letter === '' ) {

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
                            setSelectedCar(item.name[0])
                            setSelectedCarID(item.id[0])
                            setStep(1)
                            setSelectedLogo(null)

                            item.name[0] === 'Audi'       && setSelectedLogo(1)
                            item.name[0] === 'BMW'        && setSelectedLogo(2)
                            item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                            item.name[0] === 'Kia'        && setSelectedLogo(4)
                            item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                            item.name[0] === 'Nissan'     && setSelectedLogo(6)
                            item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                            item.name[0] === 'Subaru'     && setSelectedLogo(8)
                            item.name[0] === 'Honda'      && setSelectedLogo(9)
                            item.name[0] === 'Mazda'      && setSelectedLogo(10)
                            item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                          }}
                        >
                          { item.name[0] }</span>
                      )

                    } else {

                      if ( item.name[0][0].toLowerCase() === letter ) {

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
                              setSelectedCar(item.name[0])
                              setSelectedCarID(item.id[0])
                              setStep(1)
                              setSelectedLogo(null)

                              item.name[0] === 'Audi'       && setSelectedLogo(1)
                              item.name[0] === 'BMW'        && setSelectedLogo(2)
                              item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                              item.name[0] === 'Kia'        && setSelectedLogo(4)
                              item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                              item.name[0] === 'Nissan'     && setSelectedLogo(6)
                              item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                              item.name[0] === 'Subaru'     && setSelectedLogo(8)
                              item.name[0] === 'Honda'      && setSelectedLogo(9)
                              item.name[0] === 'Mazda'      && setSelectedLogo(10)
                              item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                            }}
                          >
                            { item.name[0] }</span>
                        ) 

                      }

                    }

                  }

                })}

              </ContentColumn>
              <ContentColumn>

                { marks && JSON.parse(marks)[0].mark.map((item, index) => {

                  if ( index > marksDiapazon3 && index < marksDiapazon4 ) {

                    if ( letter === '' ) {

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
                            setSelectedCar(item.name[0])
                            setSelectedCarID(item.id[0])
                            setStep(1)
                            setSelectedLogo(null)

                            item.name[0] === 'Audi'       && setSelectedLogo(1)
                            item.name[0] === 'BMW'        && setSelectedLogo(2)
                            item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                            item.name[0] === 'Kia'        && setSelectedLogo(4)
                            item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                            item.name[0] === 'Nissan'     && setSelectedLogo(6)
                            item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                            item.name[0] === 'Subaru'     && setSelectedLogo(8)
                            item.name[0] === 'Honda'      && setSelectedLogo(9)
                            item.name[0] === 'Mazda'      && setSelectedLogo(10)
                            item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                          }}
                        >
                          { item.name[0] }</span>
                      )

                    } else {

                      if ( item.name[0][0].toLowerCase() === letter ) {

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
                              setSelectedCar(item.name[0])
                              setSelectedCarID(item.id[0])
                              setStep(1)
                              setSelectedLogo(null)

                              item.name[0] === 'Audi'       && setSelectedLogo(1)
                              item.name[0] === 'BMW'        && setSelectedLogo(2)
                              item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                              item.name[0] === 'Kia'        && setSelectedLogo(4)
                              item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                              item.name[0] === 'Nissan'     && setSelectedLogo(6)
                              item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                              item.name[0] === 'Subaru'     && setSelectedLogo(8)
                              item.name[0] === 'Honda'      && setSelectedLogo(9)
                              item.name[0] === 'Mazda'      && setSelectedLogo(10)
                              item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                            }}
                          >
                            { item.name[0] }</span>
                        ) 

                      }

                    }

                  }

                })}

              </ContentColumn>
              <ContentColumn>

                { marks && JSON.parse(marks)[0].mark.map((item, index) => {

                  if ( index > marksDiapazon5 && index < marksDiapazon6 ) {

                    if ( letter === '' ) {

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
                            setSelectedCar(item.name[0])
                            setSelectedCarID(item.id[0])
                            setStep(1)
                            setSelectedLogo(null)

                            item.name[0] === 'Audi'       && setSelectedLogo(1)
                            item.name[0] === 'BMW'        && setSelectedLogo(2)
                            item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                            item.name[0] === 'Kia'        && setSelectedLogo(4)
                            item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                            item.name[0] === 'Nissan'     && setSelectedLogo(6)
                            item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                            item.name[0] === 'Subaru'     && setSelectedLogo(8)
                            item.name[0] === 'Honda'      && setSelectedLogo(9)
                            item.name[0] === 'Mazda'      && setSelectedLogo(10)
                            item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                          }}
                        >
                          { item.name[0] }</span>
                      )

                    } else {

                      if ( item.name[0][0].toLowerCase() === letter ) {

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
                              setSelectedCar(item.name[0])
                              setSelectedCarID(item.id[0])
                              setStep(1)
                              setSelectedLogo(null)

                              item.name[0] === 'Audi'       && setSelectedLogo(1)
                              item.name[0] === 'BMW'        && setSelectedLogo(2)
                              item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                              item.name[0] === 'Kia'        && setSelectedLogo(4)
                              item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                              item.name[0] === 'Nissan'     && setSelectedLogo(6)
                              item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                              item.name[0] === 'Subaru'     && setSelectedLogo(8)
                              item.name[0] === 'Honda'      && setSelectedLogo(9)
                              item.name[0] === 'Mazda'      && setSelectedLogo(10)
                              item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                            }}
                          >
                            { item.name[0] }</span>
                        ) 

                      }

                    }

                  }

                })}

              </ContentColumn>
              <ContentColumn>

                { marks && JSON.parse(marks)[0].mark.map((item, index) => {

                  if ( index > marksDiapazon7 && index < marksDiapazon8 ) {

                    if ( letter === '' ) {

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
                            setSelectedCar(item.name[0])
                            setSelectedCarID(item.id[0])
                            setStep(1)
                            setSelectedLogo(null)

                            item.name[0] === 'Audi'       && setSelectedLogo(1)
                            item.name[0] === 'BMW'        && setSelectedLogo(2)
                            item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                            item.name[0] === 'Kia'        && setSelectedLogo(4)
                            item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                            item.name[0] === 'Nissan'     && setSelectedLogo(6)
                            item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                            item.name[0] === 'Subaru'     && setSelectedLogo(8)
                            item.name[0] === 'Honda'      && setSelectedLogo(9)
                            item.name[0] === 'Mazda'      && setSelectedLogo(10)
                            item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                          }}
                        >
                          { item.name[0] }</span>
                      )

                    } else {

                      if ( item.name[0][0].toLowerCase() === letter ) {

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
                              setSelectedCar(item.name[0])
                              setSelectedCarID(item.id[0])
                              setStep(1)
                              setSelectedLogo(null)

                              item.name[0] === 'Audi'       && setSelectedLogo(1)
                              item.name[0] === 'BMW'        && setSelectedLogo(2)
                              item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                              item.name[0] === 'Kia'        && setSelectedLogo(4)
                              item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                              item.name[0] === 'Nissan'     && setSelectedLogo(6)
                              item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                              item.name[0] === 'Subaru'     && setSelectedLogo(8)
                              item.name[0] === 'Honda'      && setSelectedLogo(9)
                              item.name[0] === 'Mazda'      && setSelectedLogo(10)
                              item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                            }}
                          >
                            { item.name[0] }</span>
                        ) 

                      }

                    }

                  }

                })}

              </ContentColumn>
              <ContentColumn>

                { marks && JSON.parse(marks)[0].mark.map((item, index) => {

                  if ( index > marksDiapazon9 && index < marksDiapazon10 ) {

                    if ( letter === '' ) {

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
                            setSelectedCar(item.name[0])
                            setSelectedCarID(item.id[0])
                            setStep(1)
                            setSelectedLogo(null)

                            item.name[0] === 'Audi'       && setSelectedLogo(1)
                            item.name[0] === 'BMW'        && setSelectedLogo(2)
                            item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                            item.name[0] === 'Kia'        && setSelectedLogo(4)
                            item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                            item.name[0] === 'Nissan'     && setSelectedLogo(6)
                            item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                            item.name[0] === 'Subaru'     && setSelectedLogo(8)
                            item.name[0] === 'Honda'      && setSelectedLogo(9)
                            item.name[0] === 'Mazda'      && setSelectedLogo(10)
                            item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                          }}
                        >
                          { item.name[0] }</span>
                      )

                    } else {

                      if ( item.name[0][0].toLowerCase() === letter ) {

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
                              setSelectedCar(item.name[0])
                              setSelectedCarID(item.id[0])
                              setStep(1)
                              setSelectedLogo(null)

                              item.name[0] === 'Audi'       && setSelectedLogo(1)
                              item.name[0] === 'BMW'        && setSelectedLogo(2)
                              item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                              item.name[0] === 'Kia'        && setSelectedLogo(4)
                              item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                              item.name[0] === 'Nissan'     && setSelectedLogo(6)
                              item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                              item.name[0] === 'Subaru'     && setSelectedLogo(8)
                              item.name[0] === 'Honda'      && setSelectedLogo(9)
                              item.name[0] === 'Mazda'      && setSelectedLogo(10)
                              item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                            }}
                          >
                            { item.name[0] }</span>
                        ) 

                      }

                    }

                  }

                })}

              </ContentColumn>
            </React.Fragment> : <React.Fragment>

              <ContentColumn>

                { marks && JSON.parse(marks)[0].mark.map((item, index) => {

                  if ( index < 100 ) {

                    if ( item.name[0][0].toLowerCase() === letter ) {

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
                            setSelectedCar(item.name[0])
                            setSelectedCarID(item.id[0])
                            setStep(1)
                            setSelectedLogo(null)

                            item.name[0] === 'Audi'       && setSelectedLogo(1)
                            item.name[0] === 'BMW'        && setSelectedLogo(2)
                            item.name[0] === 'Hyundai'    && setSelectedLogo(3)
                            item.name[0] === 'Kia'        && setSelectedLogo(4)
                            item.name[0] === 'Mitsubishi' && setSelectedLogo(5)
                            item.name[0] === 'Nissan'     && setSelectedLogo(6)
                            item.name[0] === 'Volkswagen' && setSelectedLogo(2)
                            item.name[0] === 'Subaru'     && setSelectedLogo(8)
                            item.name[0] === 'Honda'      && setSelectedLogo(9)
                            item.name[0] === 'Mazda'      && setSelectedLogo(10)
                            item.name[0] === 'Daewoo'     && setSelectedLogo(11)
                          }}
                        >
                          { item.name[0] }</span>
                      ) 

                    }

                  }

                })}

              </ContentColumn>

            </React.Fragment> }

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

                { selectedLogo !== null && <img 
                  src={
                    selectedLogo === 1
                    ? audilogo
                    : selectedLogo === 2
                    ? bmwlogo
                    : selectedLogo === 3
                    ? hyundailogo
                    : selectedLogo === 4
                    ? kialogo
                    : selectedLogo === 5
                    ? mitsulogo
                    : selectedLogo === 6
                    ? nissanlogo
                    : selectedLogo === 7
                    ? bmwlogo
                    : selectedLogo === 8
                    ? subarulogo
                    : selectedLogo === 9
                    ? hondalogo
                    : selectedLogo === 10
                    ? mazdalogo
                    : selectedLogo === 11
                    ? daewoologo : null
                  } 
                  alt={""}
                  style={{
                    display: 'block',
                    width: selectedLogo === 10
                    ? '3.6%' : selectedLogo === 7
                    ? '3%' : selectedLogo === 8
                    ? '6%' : selectedLogo === 5
                    ? '3.6%' : selectedLogo === 2
                    ? '3%' : '4%',
                    marginRight: '16px'
                  }}
                /> }
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  
                  { selectedCar !== 'ВАЗ(Lada)' ? selectedCar : 'Lada' }</span>

                <span
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '340px',
                    left: '100%',
                    marginLeft: '-350px',
                    fontSize: '14px',
                    color: 'grey',
                    textAlign: 'right',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={() => setStep(0)}
                >
                  
                  Вернутся к выбору марки автомобиля</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '15px',
                width: '100%',
                position: 'relative',
                fontSize: '16px',
                fontWeight: 'bold',
              }}>

                <span>Какая у вас модель?</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                marginTop: '6px',
                width: '100%',
                position: 'relative'
              }}>

                { models && JSON.parse(models)[0].model.map((item, index) => {

                  if ( item.id_master[0] === selectedCarID ) {

                    if ( item.name[0] === 'Cretaaa' ) {

                      console.log(item.id[0])
                      console.log(item.name[0])

                    }

                    return (
                      <Button
                        key={index}
                        inner={item.name[0]}
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
                          marginTop: '14px',
                        }}
                        action={() => {
                          setSelectedModel(item.name[0])
                          setSelectedModelID(item.id[0])
                          setStep(2)
                        }}
                      />
                    )

                  }

                })}

              </div>
            </div>

          </React.Fragment> }

          { step === 2 && <React.Fragment>

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

                { selectedLogo !== null && <img 
                  src={
                    selectedLogo === 1
                    ? audilogo
                    : selectedLogo === 2
                    ? bmwlogo
                    : selectedLogo === 3
                    ? hyundailogo
                    : selectedLogo === 4
                    ? kialogo
                    : selectedLogo === 5
                    ? mitsulogo
                    : selectedLogo === 6
                    ? nissanlogo
                    : selectedLogo === 7
                    ? bmwlogo
                    : selectedLogo === 8
                    ? subarulogo
                    : selectedLogo === 9
                    ? hondalogo
                    : selectedLogo === 10
                    ? mazdalogo
                    : selectedLogo === 11
                    ? daewoologo : null
                  } 
                  alt={""}
                  style={{
                    display: 'block',
                    width: selectedLogo === 10
                    ? '3.6%' : selectedLogo === 7
                    ? '6%' : selectedLogo === 8
                    ? '6%' : selectedLogo === 5
                    ? '3.6%' : selectedLogo === 2
                    ? '3%' : '4%',
                    marginRight: '16px'
                  }}
                /> }
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  
                  { selectedCar !== 'ВАЗ(Lada)' ? selectedCar : 'Lada' } { selectedModel }</span>

                <span
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '340px',
                    left: '100%',
                    marginLeft: '-350px',
                    fontSize: '14px',
                    color: 'grey',
                    textAlign: 'right',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  onClick={() => setStep(1)}
                >
                  
                  Вернутся к выбору модели автомобиля</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '15px',
                width: '100%',
                position: 'relative',
                fontSize: '16px',
                fontWeight: 'bold',
              }}>

                <span>Поколение</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                marginTop: '6px',
                width: '100%',
                position: 'relative'
              }}>

                { gens && JSON.parse(gens)[0].generation.map((item, index) => {

                  if ( item.id_master[0] === selectedModelID ) {

                    return (
                      <div 
                        style={{
                          display: 'block',
                          position: 'relative',
                          width: '240px',
                          marginTop: '18px'
                        }}
                      >
                        <img
                          alt={""}
                          src={gencar}
                          style={{
                            display: 'block',
                            position: 'relative',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '160px'
                          }}
                        />
                        <Button
                          key={index}
                          inner={item.name[0]}
                          params={{
                            width: '',
                            background: 'transparent'
                          }}
                          css={{
                            fontSize: '13px',
                            paddingLeft: '14px',
                            paddingRight: '14px',
                            marginRight: '14px',
                            marginTop: '14px',
                            color: '#858585',
                            fontWeight: 'bold',
                            lineHeight: '38px',
                            height: '40px',
                            overflow: 'hidden'
                          }}
                          action={() => {
                            setSelectedGeneration(item.name[0])
                            setSelectedGenerationID(item.id[0])
                            setStep(3)
                          }}
                        />
                      </div>
                    )

                  }

                })}

              </div>

            </div>

          </React.Fragment> }

          { step === 3 && <React.Fragment>

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

                { selectedLogo !== null && <img 
                  src={
                    selectedLogo === 1
                    ? audilogo
                    : selectedLogo === 2
                    ? bmwlogo
                    : selectedLogo === 3
                    ? hyundailogo
                    : selectedLogo === 4
                    ? kialogo
                    : selectedLogo === 5
                    ? mitsulogo
                    : selectedLogo === 6
                    ? nissanlogo
                    : selectedLogo === 7
                    ? bmwlogo
                    : selectedLogo === 8
                    ? subarulogo
                    : selectedLogo === 9
                    ? hondalogo
                    : selectedLogo === 10
                    ? mazdalogo
                    : selectedLogo === 11
                    ? daewoologo : null
                  } 
                  alt={""}
                  style={{
                    display: 'block',
                    width: selectedLogo === 10
                    ? '3.6%' : selectedLogo === 7
                    ? '6%' : selectedLogo === 8
                    ? '6%' : selectedLogo === 5
                    ? '3.6%' : selectedLogo === 2
                    ? '3%' : '4%',
                    marginRight: '16px'
                  }}
                /> }
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  
                  { selectedCar !== 'ВАЗ(Lada)' ? selectedCar : 'Lada' } { selectedModel }</span>

                <span
                  style={{
                    display: 'block',
                    position: 'absolute',
                    width: '340px',
                    left: '100%',
                    marginLeft: '-350px',
                    fontSize: '14px',
                    color: 'grey',
                    textAlign: 'right',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  onClick={() => setStep(2)}
                >
                  
                  Вернутся к выбору поколения</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '13px',
                width: '100%',
                position: 'relative'
              }}>

                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'block'
                  }}
                >
                  
                  Поколение: { selectedGeneration }</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '15px',
                width: '100%',
                position: 'relative',
                fontSize: '16px',
                fontWeight: 'bold',
              }}>

                <span>Выберите двигатель</span>

              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                marginTop: '6px',
                width: '100%',
                position: 'relative'
              }}>

                { engines && JSON.parse(engines)[0].engine.map((item, index) => {

                  if ( item.id_master[0] === selectedGenerationID ) {

                    return (
                      <React.Fragment key={index}>
                        <Button
                          key={index}
                          inner={item.name[0]}
                          params={{
                            width: '',
                            background: 'transparent'
                          }}
                          css={{
                            fontSize: '13px',
                            paddingLeft: '14px',
                            paddingRight: '14px',
                            marginRight: '14px',
                            marginTop: '14px',
                            color: '#858585',
                            fontWeight: 'bold',
                            height: '40px',
                            lineHeight: '39px'
                          }}
                          action={() => {

                            false && console.log(selectedCar)
                            false && console.log(selectedCarID)
                            false && console.log(selectedModel)
                            false && console.log(selectedModelID)
                            false && console.log(selectedGeneration)
                            false && console.log(selectedGenerationID)
                            false && console.log(item.name[0])
                            false && console.log(item.id[0])

                            let data = {
                              car: selectedCar,
                              carid: selectedCarID,
                              model: selectedModel,
                              modelid: selectedModelID,
                              generation: selectedGeneration,
                              generationid: selectedGenerationID,
                              engine: item.name[0],
                              engineid: item.id[0]
                            }

                            const sendedData = JSON.stringify(data)
                            dispatch(setSettings(sendedData))
                            selectSubCategory({
                              id: 'f863771b-8620-11e6-a171-14dae9fa0260',
                              label: 'Аккумуляторы автомобильные',
                            })

                            console.log(sendedData)
                            navigate('/resultaty-podbora')

                          }}
                        />
                      </React.Fragment>
                    )

                  }

                })}

              </div>
            </div>

          </React.Fragment> }

        </ContentLine>
        
        { step === 0 && <ContentLine style={{ marginTop: '20px' }}>
          <AlphabetLine style={{ boxShadow: '10px 18px 8px rgb(163 163 163 / 2%), 6px 10px 7px rgb(163 163 163 / 7%), 2px 4px 5px rgb(163 163 163 / 11%), 1px 1px 3px rgb(163 163 163 / 13%), 0px 0px 0px rgb(163 163 163 / 13%)' }}>
            { list === 'short' ? <span 
              style={{ 
                display: 'block',
                fontSize: '13px',
                paddingTop: '7px', 
                paddingBottom: '10px',
                paddingRight: '10px',
                paddingLeft: '10px', 
                cursor: 'pointer'
              }}
              onClick={() => {
                setMarksDiapazon2(15)
                setMarksDiapazon3(14)
                setMarksDiapazon4(30)
                setMarksDiapazon5(29)
                setMarksDiapazon6(45)
                setMarksDiapazon7(44)
                setMarksDiapazon8(60)
                setMarksDiapazon9(59)
                setMarksDiapazon10(75)
                setList('long')
              }}
            >Показать все марки - { marks ? JSON.parse(marks)[0].mark.length : 0 }</span> : <span 
              style={{ 
                display: 'block',
                fontSize: '13px',
                paddingTop: '7px', 
                paddingBottom: '10px',
                paddingRight: '10px',
                paddingLeft: '10px',
                cursor: 'pointer' 
              }}
              onClick={() => {
                setMarksDiapazon2(8)
                setMarksDiapazon3(7)
                setMarksDiapazon4(16)
                setMarksDiapazon5(15)
                setMarksDiapazon6(24)
                setMarksDiapazon7(23)
                setMarksDiapazon8(32)
                setMarksDiapazon9(31)
                setMarksDiapazon10(40)
                setList('short')
              }}
            >Свернуть список</span> }
          </AlphabetLine>
        </ContentLine> }

      </Wrapper>
    </React.Fragment>
  )

}

export default SelectAkk