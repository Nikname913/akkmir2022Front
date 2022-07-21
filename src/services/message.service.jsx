/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../styles/modal-window'
import success from '../img/success.png'
import { useSelector, useDispatch } from 'react-redux'
import { setMessageShow } from '../appStore/reducers/mainReducer'

const { MessageWindow, MessageWindowImg } = css

const Message = (props) => {

  const dispatch = useDispatch()
  const { title, message } = useSelector(state => state.main.messageContent)

  return (
    <React.Fragment>
      <MessageWindow onClick={() => dispatch(setMessageShow(false))}>

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