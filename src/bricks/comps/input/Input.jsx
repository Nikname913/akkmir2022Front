/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react'
import css from './input'
import { useDispatch } from 'react-redux'
import { setNumber,
  setModel,
  setName,
  setEmail,
  setPaytype,
  setDiliverytype,
  setAddress } from '../../../appStore/reducers/makeOrderReducer'

const InputWrapper = css.InputWrapper

const Input = (props) => {

  const { 
    type = 'text',
    params, 
    css = null,
    inputCss = null,
    placeholder = '',
    maxlength = 100,
    title = null,
    disabled = false,
    dispatchType = null,
    action = null } = props
  const dispatch = useDispatch()

  function dispatcher(event) {

    switch(dispatchType) {

      case 'number':

        false && console.log(event)

        if ( event.target.value.length < 2 ) event.target.value = '+7' + event.target.value
        if ( event.target.value === '+' ) event.target.value = '+7'

        // ------------------------------
        // обнаружен баг в некоторых пк или или браузерах
        // ------------------------------

        if ( /\D/.test(event.key) ) {

          if ( event.key !== 'Backspace' ) { event.preventDefault() }
          else {
            
            if ( event.target.value === '+7') event.target.value = ''
            if ( event.target.value === '+') event.target.value = '' 
          
          }
        
        }

        // ------------------------------
        // обнаружен баг в некоторых пк или или браузерах
        // ------------------------------
        
        dispatch(setNumber(event.target.value))
        break

      case 'model':
        dispatch(setModel(event.target.value))
        break

      case 'name':
        dispatch(setName(event.target.value))
        break

      case 'email':
        dispatch(setEmail(event.target.value))
        break

      case 'paytype':
        dispatch(setPaytype(event.target.value))
        break

      case 'diliverytype':
        dispatch(setDiliverytype(event.target.value))
        break

      case 'address':
        dispatch(setAddress(event.target.value))
        break

      case 'order-checker':
        break

      default:
        break

    }
  }

  return (
    <InputWrapper
      styles={params}
      style={ css && css }
      onClick={ dispatchType === 'order-checker' && action }
    >
      
      { title && <span style={{ display: 'block', fontSize: '14px', marginBottom: '8px' }}>{ title }</span> }

      { dispatchType === 'number' ? <input
        type={type}
        placeholder={placeholder}
        maxLength={maxlength}
        disabled={disabled}
        onKeyUp={dispatcher}
        style={ !inputCss ? {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px'
        } : {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px',
          ...inputCss,
        }}
      /> : <input
        type={type}
        placeholder={placeholder}
        maxLength={maxlength}
        disabled={disabled}
        onKeyUp={dispatcher}
        style={ !inputCss ? {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px'
        } : {
          display: 'block',
          width: '100%',
          height: '44px',
          outline: 'none',
          borderRadius: '8px',
          boxShadow: '0px 0px 1.5px grey',
          fontSize: '13px',
          paddingLeft: '12px',
          ...inputCss,
        }}
      /> }

    </InputWrapper>
  )
}

export default Input