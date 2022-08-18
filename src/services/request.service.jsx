/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { generalCatalogReducer, orderProductsReducer } from '../appStore/reducers/catalogReducer'

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

          dispatch(
            callbackAction === 'GET_CATALOG' 
            ? generalCatalogReducer(JSON.stringify(data))
            : callbackAction === 'GET_ORDERED_PRODUCTS'
            ? orderProductsReducer(data)
            : callbackAction === 'GET_POPULAR'
            ? generalCatalogReducer(JSON.stringify(data))
            : null
          )
      
        }

        break

      case 'POST':

        reqbody && console.log(reqbody)
        break

      default:
        break

    }
  },[ make ])

  return <React.Fragment/>

}

export default RequestActionsComponent