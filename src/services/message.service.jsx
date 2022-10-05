/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../styles/modal-window'
import success from '../img/success.png'
import error from '../img/error.png'
import { useSelector, useDispatch } from 'react-redux'
import { setMessageShow } from '../appStore/reducers/mainReducer'

const { MessageWindow, MessageWindowImg } = css

const Message = () => {

  const dispatch = useDispatch()
  const { 
    title, 
    message, 
    children = null, 
    type = 'success', 
    windowHeight = null,
    isMobile = false } = useSelector(state => state.main.messageContent)

  return (
    <React.Fragment>
      <MessageWindow 
        style={ windowHeight && { height: windowHeight } }
        onClick={() => dispatch(setMessageShow(false))}
        left={ isMobile ? '0%' : null }
        mleft={ isMobile ? '4px' : null }
      >

        { type === 'success' && <MessageWindowImg>
          <img
            style={{
              display: 'block',
              width: '34px',
            }}
            src={success}
            alt={""}
          />
        </MessageWindowImg> }
        { type === 'error' && <MessageWindowImg style={{ backgroundColor: 'transparent' }}>
          <img
            style={{
              display: 'block',
              width: '70px',
            }}
            src={error}
            alt={""}
          />
        </MessageWindowImg> }
        <h2
          style={{
            display: 'block',
            position: 'relative',
            width: '100%',
            fontSize: '22px',
            textAlign: 'center',
            marginTop: '20px'
          }}
        >
        
          { title }</h2>

        <span
          style={{
            display: 'block',
            position: 'relative',
            width: '100%',
            paddingLeft: '30px',
            paddingRight: '30px',
            fontSize: '14px',
            lineHeight: '24px',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
        
          { message }</span>
          { children && children }

      </MessageWindow>
    </React.Fragment>
  )
}

export default Message