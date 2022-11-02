/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import css from '../styles/search-service'
import image from '../img/category.png'
import error from '../img/error.png'
import searchResult from '../img/searchResult.png'
import { useSelector, useDispatch } from 'react-redux'
import { refreshResults, setShowResults } from '../appStore/reducers/searchDinamicReducer'
import { setActualItem } from '../appStore/reducers/mainReducer'
import Button from '../bricks/comps/button/Button.jsx'

const { ResultsWindow, ResultProductCard } = css

const HeaderSearch = () => {

  const [ isFocused, setIsFocused ] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const searchResults = useSelector(state => state.searchDinamic.products)
  const showResults = useSelector(state => state.searchDinamic.showResults)
  const searchHistory = useSelector(state => state.searchDinamic.history)
  let jsonCatalog = useSelector(state => state.catalog.generalCatalog)
  let generalCatalog = null
  jsonCatalog ? generalCatalog = JSON.parse(jsonCatalog)[0].product : generalCatalog = null

  function getResults(e) {

    let val = e.target.value
    let keyValue = e.key
    let resultsArray = []

    if ( keyValue === 'Enter' ) { 
      
      e.target.value = ''
      dispatch(refreshResults(JSON.stringify([])))
      dispatch(setShowResults(false)) 
      navigate(`../search/${val}`)
    
    }

    if ( val.length > 2 ) {

      generalCatalog.forEach(item => {

        if ( item.name[0].toLowerCase().indexOf(val.toLowerCase()) !== -1 ) {

          resultsArray.push(item)
          false && console.log(item)

        }

      })

      dispatch(refreshResults(JSON.stringify(resultsArray)))
      dispatch(setShowResults(true))

      resultsArray.length === 0 && dispatch(setShowResults(false))

    } else if ( val.length < 3 ) {

      dispatch(refreshResults(JSON.stringify([])))
      dispatch(setShowResults(false))

    }

  }

  return (
    <React.Fragment>
      {(!showResults || showResults) && <ResultsWindow style={{ boxShadow: !isFocused ? 'none' : 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px' }}>
        <input
          type="text"
          placeholder="Найти товар или услугу"
          maxLength="100"
          style={{
            outline: 'none',
            backgroundColor: 'white',
            borderRadius: '12px',
            height: '36px',
            width: '100%',
            paddingLeft: '40px',
            paddingBottom: '2px',
            boxSizing: 'border-box',
            border: 'none',
            borderBottomLeftRadius: showResults ? '0px' : '12px',
            borderBottomRightRadius: showResults ? '0px' : '12px'
          }}
          onKeyUp={getResults}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </ResultsWindow> }

      { showResults && <ResultsWindow 
        style={{ 
          boxShadow: !isFocused ? 'none' : 'rgb(163 163 163 / 2%) 10px 18px 8px, rgb(163 163 163 / 7%) 6px 10px 7px, rgb(163 163 163 / 11%) 2px 4px 5px, rgb(163 163 163 / 13%) 1px 1px 3px, rgb(163 163 163 / 13%) 0px 0px 0px',
          position: 'absolute',
          top: '0',
          marginTop: '36px',
          borderTopRightRadius: '0px',
          borderTopLeftRadius: '0px',
          borderTop: '1px solid #D9D9D9'
        }}
      >

        { JSON.parse(searchHistory).map((item, index) => {

          return (
            <React.Fragment>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  position: 'relative',
                  paddingLeft: '8px',
                  marginTop: index === 0 ? '8px' : '0px',
                  cursor: 'pointer'
                }}
              >
                <img
                  alt={""}
                  src={searchResult}
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '20px',
                    marginBottom: '3px',
                    marginLeft: '12px'
                  }}
                />
                <span 
                  style={{ 
                    display: 'block',
                    position: 'relative',
                    height: '36px',
                    lineHeight: '36px',
                    fontSize: '14px',
                    color: '#C4C4C4',
                    marginLeft: '8px'
                  }}
                >
                  
                  { item.text }
                
                </span>
              </div>
            </React.Fragment>
          )

        }) }

        <span
          style={{
            display: 'block',
            position: 'relative',
            width: '92%',
            height: '1px',
            backgroundColor: '#C4C4C4',
            marginTop: '8px',
            marginBottom: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />

        { JSON.parse(searchResults).map((item, index) => {

          if ( index < 4 ) { return (
            <ResultProductCard style={{ paddingLeft: '10px', paddingRight: '19px' }}>
              <img 
                src={image} 
                alt={""} 
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '56px',
                  marginTop: '10px',
                  marginBottom: '10px',
                  marginLeft: '10px',
                  marginRight: '16px',
                  borderRadius: '8px'
                }}
              />
              <Link style={{ width: '376px', textDecoration: 'none', color: 'black' }} to="/product">
                <span
                  style={{
                    display: 'block',
                    position: 'relative',
                    width: '300px',
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    paddingRight: '44px',
                    lineHeight: '20px',
                    color: '#565656'
                  }}
                  onClick={() => { 
                    dispatch(setActualItem(item.id[0]))
                    dispatch(refreshResults(JSON.stringify([])))
                    dispatch(setShowResults(false))
                  }}
                >
                  
                  { item.name[0] && item.name[0] }</span>

              </Link>

              { false === true ? <Button  
                params={{
                  height: 36,
                  background: '#2E2E2E'
                }}
                inner={"В корзину"}
                css={{
                  fontSize: '13px',
                  boxShadow: 'none',
                  color: 'white',
                  paddingRight: '20px',
                  paddingLeft: '20px'
                }}
              /> : <span
                style={{
                  boxShadow: 'none',
                  height: '36px',
                  width: '120px',
                  borderRadius: '10px',
                  color: '#C4C4C4',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  lineHeight: '33px',
                  textAlign: 'center',
                }}
              >от { item.pre_order_prices[0].region[0].price[0] } ₽</span> }

            </ResultProductCard>
          )}

        })}

        <span
          style={{
            display: 'block',
            position: 'relative',
            width: '92%',
            height: '1px',
            backgroundColor: '#C4C4C4',
            marginTop: '8px',
            marginBottom: '8px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />

        <ResultProductCard style={{ paddingLeft: '10px', paddingRight: '19px', marginBottom: '10px' }}>
          <img 
            src={image} 
            alt={""} 
            style={{
              display: 'block',
              position: 'relative',
              width: '56px',
              marginTop: '10px',
              marginBottom: '10px',
              marginLeft: '10px',
              marginRight: '16px',
              borderRadius: '8px'
            }}
          />
          <Link style={{ width: '376px', textDecoration: 'none', color: 'black' }} to="/product">
            <span
              style={{
                display: 'block',
                position: 'relative',
                width: '300px',
                fontWeight: 'bold',
                overflow: 'hidden',
                paddingRight: '44px',
                lineHeight: '20px',
                color: '#565656'
              }}
              onClick={() => { 
                dispatch(refreshResults(JSON.stringify([])))
                dispatch(setShowResults(false))
              }}
            >{"[ название бренда поискового запроса ]"}</span>

          </Link>

          { false === true ? <Button  
            params={{
              height: 36,
              background: '#2E2E2E'
            }}
            inner={"В корзину"}
            css={{
              fontSize: '13px',
              boxShadow: 'none',
              color: 'white',
              paddingRight: '20px',
              paddingLeft: '20px'
            }}
          /> : <span
            style={{
              boxShadow: 'none',
              height: '36px',
              width: '120px',
              borderRadius: '10px',
              color: '#C4C4C4',
              fontSize: '16px',
              fontWeight: 'bold',
              lineHeight: '33px',
              textAlign: 'center',
            }}
          >бренд</span> }

        </ResultProductCard>

        { false && <ResultProductCard style={{ height: '110px' }}>
          <img 
            src={error} 
            alt={""} 
            style={{
              display: 'block',
              position: 'relative',
              width: '46px',
              marginTop: '10px',
              marginBottom: '10px',
              marginLeft: '10px',
              marginRight: '16px',
              borderRadius: '8px'
            }}
          />
            <span
              style={{
                display: 'block',
                position: 'relative',
                width: '476px',
                fontWeight: 'bold',
                overflow: 'hidden',
                paddingRight: '44px',
                lineHeight: '20px',
                color: 'grey'
              }}
            >
              
              {"Модуль модального окна поиска нужно согласовать и добавить в макет, данная реализация - примерная, сделана для отражения функционала"}</span>

        </ResultProductCard> }

      </ResultsWindow> }
    </React.Fragment>
  )
}

export default HeaderSearch