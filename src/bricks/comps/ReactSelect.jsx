/* eslint-disable eqeqeq */
/* eslint-disable react/style-prop-object */
import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const Decorate = {
  SelectWrapper: styled.div`
    display: block;
    position: relative;
    width: ${ props => props.styles.width }px;
    margin-top: ${ props => props.styles.mt };
    margin-bottom: ${ props => props.styles.mb };
    border-radius: ${ props => props.styles.borra };
  `
}

const selectStyles = {

  control: (theme) => ({
    ...theme,
    border: 'none',
    outline: 'none',
    boxShadow: '0px 0px 1.5px grey',
    height: '44px',
    fontSize: '13px',
    paddingBottom: '1px',
    borderRadius: '10px',
    paddingLeft: '30px'
  }),
  placeholder: (theme) => ({
		...theme,
    paddingLeft: '4px'
	}),
  singleValue: (theme) => ({
    ...theme,
    paddingLeft: '4px'
  }),
  input: (theme) => ({
    ...theme,
    paddingLeft: '4px',
  }),
  menu: (theme) => ({
    ...theme,
    overflow: 'hidden',
    paddingTop: 6,
    paddingBottom: 6,
    width: '90%',
    marginTop: 10,
    border: 'none',
    zIndex: 20
  }),
  option: (theme) => ({
    ...theme,
    fontSize: '13px',
    padding: '12px 0',
    paddingLeft: '13px',
    paddingBottom: '12.8px',
    cursor: 'pointer',
    color: '#2E2E2E'
  }),

}

const ReactSelect = (props) => {

  const { 
    params, 
    placeholder = 'Выберите тип оплаты',
    data = null,
    action = null,
    actionType = null,
    actionParams = null,
    showIcon = false,
    icon = false,
    iconStyles = null } = props

    function actionsReducer(param) {

      const acty = actionType
      switch(acty) {

        case 'DISCOUNT_REDUCER': 
          action(!param)
          break

        default:
          break

      }

    }

  return (
    <Decorate.SelectWrapper styles={params}>

      { showIcon && <img

        alt={""}
        src={icon}
        style={{
          ...iconStyles,
          display: 'block',
          position: 'absolute',
          zIndex: '10',
          top: '50%',
          left: '0%',
        }}

      /> }
      
      <Select 
        options={ data && data }
        placeholder={placeholder}
        styles={selectStyles}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#F7F7F7',
            primary25: '#F7F7F7',
          }
        })}
        onChange={inputValue => {

          action && actionsReducer(actionParams)

        }}
      />
    
    </Decorate.SelectWrapper>
  )

}

export default ReactSelect