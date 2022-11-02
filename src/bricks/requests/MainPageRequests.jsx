/* eslint-disable no-unused-vars */
import React from 'react'
import RequestComponent from '../../services/request.service'

const MAPAR = () => {

  return (
    <React.Fragment>
      <RequestComponent
        make={false}
        callbackAction={'GET_CATALOG'}
        requestData={{
          type: 'GET',
          urlstring: '/products',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_CATEGORIES'}
        requestData={{
          type: 'GET',
          urlstring: '/categories',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_PROPS'}
        requestData={{
          type: 'GET',
          urlstring: '/props',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_MARKS'}
        requestData={{
          type: 'GET',
          urlstring: '/marks',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_MODELS'}
        requestData={{
          type: 'GET',
          urlstring: '/models',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_GENERATIONS'}
        requestData={{
          type: 'GET',
          urlstring: '/generations',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_ENGINES'}
        requestData={{
          type: 'GET',
          urlstring: '/engines',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_DIRS'}
        requestData={{
          type: 'GET',
          urlstring: '/directions',
        }}
      />

      <RequestComponent
        make={false}
        callbackAction={'GET_SHOPS'}
        requestData={{
          type: 'GET',
          urlstring: '/shops',
        }}
      />
    </React.Fragment>
  )

}

export default MAPAR
