/* eslint-disable array-callback-return */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import css from '../styles/search-service'
import image from '../img/category.png'
import error from '../img/error.png'
import { useSelector, useDispatch } from 'react-redux'
import { refreshResults, setShowResults } from '../appStore/reducers/searchDinamicReducer'
import { setActualItem } from '../appStore/reducers/mainReducer'
import Button from '../bricks/comps/button/Button.jsx'

const { ResultsWindow, ResultProductCard } = css

const HeaderSearch = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const searchResults = useSelector(state => state.searchDinamic.products)
  const showResults = useSelector(state => state.searchDinamic.showResults)
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
      <input
        type="text"
        placeholder="Найти товар или услугу"
        maxLength="100"
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: 'white',
          borderRadius: '12px',
          height: '36px',
          width: '55%',
          paddingLeft: '40px',
          marginLeft: '30px'
        }}
        onKeyUp={getResults}
      />

      { showResults && <ResultsWindow>

        { JSON.parse(searchResults).map((item, index) => {

          if ( index < 4 ) { return (
            <ResultProductCard>
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
                    width: '376px',
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    paddingRight: '44px',
                    lineHeight: '20px'
                  }}
                  onClick={() => { 
                    dispatch(setActualItem(item.id[0]))
                    dispatch(refreshResults(JSON.stringify([])))
                    dispatch(setShowResults(false))
                  }}
                >
                  
                  { item.name[0] && item.name[0] }</span>

              </Link>
              { false && <Button  
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
              /> }
              
              <span
                style={{
                  boxShadow: 'none',
                  color: 'white',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  border: '1px dashed grey',
                  height: '36px',
                  width: '100px',
                  borderRadius: '10px'
                }}
              ></span>

            </ResultProductCard>
          )}

        })}

        <ResultProductCard style={{ height: '110px' }}>
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

        </ResultProductCard>

      </ResultsWindow> }
    </React.Fragment>
  )
}

export default HeaderSearch