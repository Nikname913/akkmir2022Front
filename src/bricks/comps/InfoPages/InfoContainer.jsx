// ------------------------------
// dev by omar
// ------------------------------
import React from 'react'
import css from '../../../styles/card-view'

const InfoPagesContainer = css.InfoPagesContainer

export const InfoContainer = ({children}) => {
  return (
    <React.Fragment>
      <InfoPagesContainer>
        {children}
      </InfoPagesContainer>
    </React.Fragment>
  )
}