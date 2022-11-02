/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { generalCatalogReducer, orderProductsReducer } from '../appStore/reducers/catalogReducer'
import { setCatalogMenuRemote, 
  setCatalogPropsRemote,
  setCatalogMarksRemote,
  setCatalogModelsRemote,
  setCatalogGenerationsRemote,
  setCatalogEnginesRemote,
  setCatalogDirsRemote,
  setCatalogShopsRemote } from '../appStore/reducers/mainReducer'

const RequestActionsComponent = (props) => {

  const dispatch = useDispatch()

  const { make = true,
    callbackAction,
    requestData: {
      type = 'GET',
      urlstring = '',
      reqbody = null
    }} = props

  useEffect( async () => {

    const requestType = type
    switch(requestType) {
      
      case 'GET':

        const response = await fetch(urlstring)
        let data = null

        if ( response.status === 200 ) {

          if ( callbackAction === 'GET_ORDERED_PRODUCTS' ) {
            
            data = await fetch(urlstring).then(res => res.text())
            
          } else if ( callbackAction === 'SEND_ORDER_TO_TELEGRAM' ) { } else {

            data = await fetch(urlstring).then(res => res.json())

          }

          callbackAction === 'NON_ACTION' && console.log(data)
          callbackAction === 'GET_CATEGORIESS' && console.log(data)
          callbackAction === 'GET_CATALOGG' && console.log(data)

          callbackAction !== 'NON_ACTION' && dispatch(
            callbackAction === 'GET_CATALOG' 
            ? generalCatalogReducer(JSON.stringify(data))
            : callbackAction === 'GET_ORDERED_PRODUCTS'
            ? orderProductsReducer(data)
            : callbackAction === 'GET_POPULAR'
            ? generalCatalogReducer(JSON.stringify(data))
            : callbackAction === 'GET_CATEGORIES'
            ? setCatalogMenuRemote(JSON.stringify(data))
            : callbackAction === 'GET_PROPS'
            ? setCatalogPropsRemote(JSON.stringify(data))
            : callbackAction === 'GET_MARKS'
            ? setCatalogMarksRemote(JSON.stringify(data))
            : callbackAction === 'GET_MODELS'
            ? setCatalogModelsRemote(JSON.stringify(data))
            : callbackAction === 'GET_GENERATIONS'
            ? setCatalogGenerationsRemote(JSON.stringify(data))
            : callbackAction === 'GET_ENGINES'
            ? setCatalogEnginesRemote(JSON.stringify(data))
            : callbackAction === 'GET_DIRS'
            ? setCatalogDirsRemote(JSON.stringify(data))
            : callbackAction === 'GET_SHOPS'
            ? setCatalogShopsRemote(JSON.stringify(data))
            : null
          )
      
        }

        break

      case 'POST':

        await fetch(urlstring, {
          method: 'POST',
          headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, 
          body: reqbody
        })

        break

      default:
        break

    }
  },[ make ])

  return <React.Fragment/>

}

export default RequestActionsComponent