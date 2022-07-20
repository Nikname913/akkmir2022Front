/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../styles/modal-window'
import success from '../img/success.png'

const Message = (props) => {

  const { MessageWindow, MessageWindowImg } = css
  const { title = 'Примерный заголовок сообщения', 
          message = 'Примерный текст сообщения, которое будет выводиться в окне, в те моменты когда ничего полезного в нем выводиться не будет' } = props 

  return (
    <React.Fragment>
      <MessageWindow>

        <MessageWindowImg>
          <img
            style={{
              display: 'block',
              width: '34px',
            }}
            src={success}
            alt={""}
          />
        </MessageWindowImg>
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
            position:'relative',
            width: '100%',
            paddingLeft: '30px',
            paddingRight: '30px',
            fontSize: '14px',
            lineHeight: '20px',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
        
          { message }</span>

      </MessageWindow>
    </React.Fragment>
  )

}

export default Message