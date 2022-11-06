/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import css from '../../styles/mobile/mobileStyles'
import Input from '../comps/input/Input.jsx'
import Button from '../comps/button/Button.jsx'
import ModalWindow from '../../services/modal.service'
import Message from '../../services/message.service'
import sravnenieImg from '../../img/sravnenie.svg'
import likeImg from '../../img/like.svg'
import search from '../../img/search.svg'

const { Wrapper, ContentLine } = css.HeaderStyles

const MobileHeader = (props) => {

  const { screen = 420 } = props
  const startRef = useRef()
  const showModalWindow = useSelector(state => state.main.modalShow)
  const showMessageWindow = useSelector(state => state.main.messageShow)
  const mobScroll = useSelector(state => state.mobileScroll.active)

  function scrollStart() {

    startRef.current.scrollIntoView({ behavior: 'smooth' })

  }

  useEffect(() => {

    mobScroll && scrollStart()

  },[ mobScroll ])

  return (
    <React.Fragment>
      <Wrapper 
        ref={startRef}
        style={{ 
          marginTop: '20px', 
          marginLeft: '20px',
          borderTopRightRadius: '4px',
          borderTopLeftRadius: '4px'  
        }}
      > 

        { showModalWindow && <ModalWindow></ModalWindow> }
        { showMessageWindow && <Message></Message> }

        <ContentLine width={screen}>

          <img
            style={{
              display: 'block',
              position: 'absolute',
              width: '22px',
              left: '0px',
              marginLeft: '22px'
            }}
            src={search}
            alt={""}
          />

          <Input
            params={{ width: screen - ( 40 + 40 + 12 + 12 + 8 + 8 )}}
            type={"text"}
            placeholder={"Найти товар или услугу"}
            inputCss={{ border: 'none', paddingLeft: '42px' }}
            css={{}}
          />
          <Button  
            params={{
              width: 44,
              height: 44,
              background: 'white'
            }}
            inner={""}
            css={{
              fontSize: '13px',
              marginLeft: '8px',
              borderRadius: '14px'
            }}
            children={
              <img 
                alt={""}
                src={sravnenieImg}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '20px',
                  left: 0,
                  marginLeft: '11px',
                  top: '50%',
                  marginTop: '-10px'
                }}
              />
            }
          />
          <Button  
            params={{
              width: 44,
              height: 44,
              background: 'white'
            }}
            inner={""}
            css={{
              fontSize: '13px',
              marginLeft: '8px',
              borderRadius: '14px'
            }}
            children={
              <img 
                alt={""}
                src={likeImg}
                style={{
                  display: 'block',
                  position: 'absolute',
                  width: '20px',
                  left: 0,
                  marginLeft: '11px',
                  top: '50%',
                  marginTop: '-8px'
                }}
              />
            }
          />

        </ContentLine>
        <ContentLine width={screen} style={{ marginTop: '12px' }}>

          <Button  
            params={{
              width: 24,
              height: 24,
              background: '#FFB600'
            }}
            inner={""}
            css={{
              fontSize: '13px',
              borderRadius: '12px'
            }}
          />
          <Button  
            params={{
              width: 24,
              height: 24,
              background: '#FFB600'
            }}
            inner={""}
            css={{
              fontSize: '13px',
              marginLeft: '8px',
              borderRadius: '12px'
            }}
          />

          <Link style={{ textDecoration: 'none', color: 'black' }} to="/glavnaya"><Button  
            params={{
              width: 90,
              height: 24,
              background: '#FFB600'
            }}
            inner={"АККМИР"}
            css={{
              fontSize: '12px',
              marginLeft: '8px',
              borderRadius: '12px',
              color: '#565656',
              fontWeight: 'bold',
              letterSpacing: 1,
              fontStyle: 'italic',
              lineHeight: '24px'
            }}
          /></Link>

          <Button  
            params={{
              width: screen - ( 24 + 24 + 8 + 8 + 90 + 8 + 90 + 8 + 100 + 26 ),
              height: 24,
              background: '#565656'
            }}
            inner={""}
            css={{ borderRadius: '12px', opacity: '0' }}
          />

          <Button  
            params={{
              width: 90,
              height: 24,
              background: 'white'
            }}
            inner={"Позвоните"}
            css={{
              fontSize: '11px',
              marginLeft: '8px',
              borderRadius: '12px',
              color: 'black',
              lineHeight: '24px'
            }}
          />
          <Button  
            params={{
              width: 100,
              height: 24,
              background: 'white'
            }}
            inner={"Екатеринбург"}
            css={{
              fontSize: '11px',
              marginLeft: '8px',
              borderRadius: '12px',
              color: 'black',
              lineHeight: '24px'
            }}
          />

        </ContentLine>

      </Wrapper>
    </React.Fragment>
  )

}

export default MobileHeader