/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/style-prop-object */
import React from 'react'
import { Link } from "react-router-dom"
import css from '../../styles/footer'
import Button from '../comps/button/Button.jsx'
import vkimage from '../../img/vkon.png'
import { useDispatch } from 'react-redux'
import { setInfoPageTitle } from '../../appStore/reducers/mainReducer'

const Foot = css.Footer
const FootContent = css.FooterContent
const FootContentCol = css.FooterContentColumn

const Footer = () => {

  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Foot>

        <FootContent>
          <FootContentCol>

            <Link style={{ textDecoration: 'none', color: 'black' }} to="/princip-raboty">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Принцип работы'))}
              >
                Принцип работы</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/pochemu-akkmir">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Почему Аккмир'))}
              >
                Почему Akkmir</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/nashy-sertifikaty">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Наши сертификаты'))}
              >
                Наши сертификаты</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/priem-vashikh-akkumulyatorov">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Прием ваших аккумуляторов'))}
              >
                Прием ваших аккумуляторов</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/polezno-znat">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Полезно знать'))}
              >
                Полезно знать</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/novosti">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Новости компании'))}
              >
                Новости компании</span>
            </Link>

          </FootContentCol>
          <FootContentCol>

            <Link style={{ textDecoration: 'none', color: 'black' }} to="/oplata-i-dostavka">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Оплата и доставка'))}
              >
                Оплата и доставка</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/korporativnym-klientam">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Корпоративным клиентам'))}
              >
                Корпоративным клиентам</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/uslugi-servisnykh-centrov">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Услуги сервисных центров'))}
              >
                Услуги сервисных центров</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/accii">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Наши акции'))}
              >
                Наши акции</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/oferta">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Договор публичной оферты'))}
              >
                Договор публичной оферты</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/bonusnaya-programma">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Бонусная программа'))}
              >
                Бонусная программа</span>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/vakansii-kompanii">
              <span 
                style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}
                onClick={() => dispatch(setInfoPageTitle('Вакансии компании'))}
              >
                Вакансии компании</span>
            </Link>

          </FootContentCol>
          <FootContentCol>

            <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>[ платежные системы ]</span>
            <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px' }}>Подписывайтесь на нас:</span>

            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '32px'
              }}
            >
              <img 
                src={vkimage} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                }}
              />
              <img 
                src={vkimage} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                  marginLeft: '12px'
                }}
              />
              <img 
                src={vkimage} 
                alt={""}
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                  marginLeft: '12px'
                }}
              />
            </span>

          </FootContentCol>
          <FootContentCol>

            <span style={{ color: 'white', lineHeight: '32px', fontSize: '20px', marginBottom: '20px' }}>+7 (343) 261-62-62</span>
            <span style={{ color: 'white', lineHeight: '32px', fontSize: '14px', marginBottom: '8px' }}>Есть пожелания и предложения?</span>

            <Button  
              params={{
                width: 200,
                height: 36,
                background: 'white'
              }}
              inner={"Написать директору"}
              css={{
                fontSize: '13px',
                boxShadow: 'none'
              }}
            />

          </FootContentCol>
        </FootContent>

        <p style={{ color: '#F7F7F7', textAlign: 'center', fontSize: '14px', marginTop: '30px' }}>© 2022 Аккумуляторный мир</p>

      </Foot>
    </React.Fragment>
  )

}

export default Footer