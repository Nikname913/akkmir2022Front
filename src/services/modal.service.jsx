/* eslint-disable react/style-prop-object */
import React from 'react'
import css from '../styles/modal-window'
import { useSelector, useDispatch } from 'react-redux'
import { setModalShow } from '../appStore/reducers/mainReducer'
import closeImg from '../img/closePicture.png'

const { Shadow, ShadowClose } = css

const ModalWindow = (props) => {

  const { children } = props
  const child = useSelector(state => state.main.modalContent)
  const dispatch = useDispatch()

  function closeModal() { 
    
    document.documentElement.style.overflowY = 'scroll'
    dispatch(setModalShow(false)) 
  
  }

  return (
    <React.Fragment>
      <Shadow>
        <ShadowClose onClick={closeModal}>

          <img 
            alt={""}
            src={closeImg}
            style={{
              display: 'block',
              position: 'relative',
              width: '30px'
            }}
          />

        </ShadowClose>

        { children && children }
        { child && child }

      </Shadow>
    </React.Fragment>
  )
}

export default ModalWindow